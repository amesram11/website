/** @jsx jsx */
import { jsx } from '@emotion/core'
import Layout from '../../shared/components/layout'
import { Content }  from '../../shared/components/content-layout'
import { getPostData, getAllPostIds } from '../../shared/lib/posts'

export default function Post({ postData }) {
  return (
    <Layout>
      <Content>
          <h1>
              {postData.title}
          </h1>
          <div>
              {postData.date}
          </div>
      </Content>
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