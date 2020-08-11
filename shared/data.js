import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import remark from 'remark'
import html from 'remark-html'
import removeMarkdown from 'remove-markdown'

const fsPromises = fs.promises;

async function getAllDataFromDirectory(model) {
    const ids = await getAllIdsFromDirectory(model);
    const allData = await Promise.all(ids.map(async (idObj) => {
        const data = await getData(model, idObj.params.id)
        return data
    }))
    return allData
}

async function getAllDataFromDataFile(model) {
    const dataFile = path.join(process.cwd(), '_data', model + '.yaml')
    const data = await fsPromises.readFile(dataFile, 'utf8')
    const matterResult = matter(data)
    return matterResult.data.map((datum) => ({
        id: datum.title,
        contentHtml: null,
        summary: null,
        ...datum
    }))
}

async function getDataFromDirectory(model, id) {
    const directory = path.join(process.cwd(), '_' + model)
    const fullPath = path.join(directory, `${id}.md`)
    const data = await fsPromises.readFile(fullPath, 'utf8')
    const matterResult = matter(data)

    const summary = removeMarkdown(matterResult.content)
        .split(' ', 50)
        .join(' ') + '...'
    const processedContent = await remark()
    .use(html)
    .process(matterResult.content)

    const contentHtml = processedContent.toString()

    return {
        id,
        contentHtml,
        summary,
        ...matterResult.data
    }
}

async function getDataFromDataFile(model, id) {
    const allData = await getAllDataFromDataFile(model)
    let returnValue = null
    allData.forEach((datum) => {
        if (datum.id === id) {
            returnValue = datum
        }
    })
    return returnValue
}

async function getAllIdsFromDirectory(model) {
    const directory = path.join(process.cwd(), '_' + model)
    const fileNames = await fsPromises.readdir(directory)
    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, '')
            }
        }
    })
}

async function getAllIdsFromDataFile(model) {
    const allData = await getAllDataFromDataFile(model)
    const allIds = allData.map((datum) => datum.id)
    return allIds
}

export async function getSortedData(model, key, descending) {
    const allData = await getAllData(model)

    return allData.sort((a, b) => {
        if (descending) {
            return (a[key] < b[key] ? 1 : -1)
        } else {
            return (a[key] > b[key] ? 1 : -1)
        }
    })
}

export async function getAllData(model) {
    try {
        return await getAllDataFromDirectory(model)
    } catch (err) {
        return await getAllDataFromDataFile(model)
    }
}

export async function getAllIds(model) {
    try {
        return await getAllIdsFromDirectory(model)
    } catch (err) {
        return await getAllIdsFromDataFile(model)
    }
}

export async function getData(model, id) {
    try {
        return await getDataFromDirectory(model, id)
    } catch (err) {
        return await getDataFromDataFile(model, id)
    }
}
