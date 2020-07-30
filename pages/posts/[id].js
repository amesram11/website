/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Content, Section } from '../../shared/components/content-layout'
import Layout from '../../shared/components/layout'
import { getAllPostIds, getPostData } from '../../shared/lib/posts'

export default function Post({ postData }) {
  return (
    <Layout>
        <Section>
            <Content>
                <h1>
                    {postData.title}
                </h1>
                <div>
                    By {postData.author} on {postData.date}
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </Content>
        </Section>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = await getAllPostIds()
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