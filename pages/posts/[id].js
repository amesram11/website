/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Layout from '../../shared/components/layout'
import { SingleColumnContent, H1 }  from '../../shared/components/tags'
import { getPostData, getAllPostIds } from '../../shared/lib/posts'

export default function Post({ postData }) {
  return (
    <Layout>
      <SingleColumnContent>
          <H1>
              {postData.title}
          </H1>
          <div>
              {postData.date}
          </div>
      </SingleColumnContent>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}