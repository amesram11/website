/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Content, Section } from '../../shared/components/content-layout'
import Date from '../../shared/components/Date'
import Layout from '../../shared/components/layout'
import { getAllPostIds, getPostData } from '../../shared/lib/posts'
import { colors } from '../../shared/styles'

const AuthorBlock = ({ author, date }) => (
    <div css={css`
        padding-bottom: 1rem;
        margin-bottom: 3rem;
        position: relative;
        &:before {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 8rem;
            height: 1px;
            background: #e1e3e6;
        }
    `}>
        <div><strong>{author}</strong></div>
        <div css={css`
            color: ${colors['lightGray']}
        `}><Date dateString={date} /></div>
    </div>
)

export default function Post({ postData }) {
  return (
    <Layout
        featureImage={'/images/blog-banner.jpg'}
        featureText='Blog'
    >
        <Section>
            <Content>
                <h1>
                    {postData.title}
                </h1>
                <AuthorBlock
                    author={postData.author}
                    date={postData.date}
                />
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