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

async function getAllIdsFromDirectory(model, excludeReactPages) {
    const directory = path.join(process.cwd(), '_' + model)
    const fileNames = await fsPromises.readdir(directory)
    const ids = fileNames.map((fileName) => fileName.replace(/\.md$/, ''))
    if (excludeReactPages) {
        const directory = path.join(process.cwd(), 'pages', model)
        const allReactPages = await fsPromises.readdir(directory)
        allReactPages.forEach((page) => {
            const pageId = page.replace(/\.js$/, '')
            const index = ids.indexOf(pageId)
            if (index > -1) {
                ids.splice(index, 1)
            }
        })
    }
    return ids.map(id => {
        return {
            params: {
                id: id
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

// excludeReactPages is our hack to make the project build when
// we have projects or posts that are react-based (like left-right-forward.js)
// Otherwise, there is a conflict between the .js file and the
// html file next tries to build from the data
export async function getAllIds(model, excludeReactPages) {
    try {
        return await getAllIdsFromDirectory(model, excludeReactPages)
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
