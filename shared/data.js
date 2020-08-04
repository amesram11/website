import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import remark from 'remark'
import html from 'remark-html'
import removeMarkdown from 'remove-markdown'

const fsPromises = fs.promises;

export async function getSortedData(model, key, descending) {
    const ids = await getAllIds(model);
    const allData = await Promise.all(ids.map(async (idObj) => {
        const data = await getData(model, idObj.params.id)
        return data
    }))

    return allData.sort((a, b) => {
        if (descending) {
            return (a[key] < b[key] ? 1 : -1)
        } else {
            return (a[key] > b[key] ? 1 : -1)
        }
    })
}

export async function getAllIds(model) {
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

export async function getData(model, id) {
    const directory = path.join(process.cwd(), '_' + model)
    const fullPath = path.join(directory, `${id}.md`)
    const fileContents = await fsPromises.readFile(fullPath, 'utf8')

    const matterResult = matter(fileContents)

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
