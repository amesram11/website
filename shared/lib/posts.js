import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const fsPromises = fs.promises;
const postsDirectory = path.join(process.cwd(), 'posts')

export async function getSortedPostsData() {
    // Get file names under /posts
    const ids = await getAllPostIds();  
    const allPostsData = await Promise.all(ids.map(async (idObj) => {
        console.log('here??')
        console.log(idObj.params.id)
        const postData = await getPostData(idObj.params.id)        
        return postData
    }))
    
    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1
        } else {
            return -1
        }
    })
}

export async function getAllPostIds() {
  const fileNames = await fsPromises.readdir(postsDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = await fsPromises.readFile(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}
