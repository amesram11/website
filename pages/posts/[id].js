/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Gravatar from 'react-gravatar'
import { Content, Section } from '../../shared/components/content-layout'
import Date from '../../shared/components/Date'
import Layout from '../../shared/components/layout'
import { getAllPostIds, getPostData } from '../../shared/lib/posts'
import { colors } from '../../shared/styles'

const AuthorBlock = ({ author, authorTwitter, authorEmail, date }) => (
    <div css={css`
        padding-bottom: 2rem;
        margin-bottom: 3rem;
        position: relative;
        &:before {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 8rem;
            height: 1px;
            background: ${colors['lightGray']};
        }
    `}>
        <div css={css`
            display: grid;
            grid-template-columns: 50px auto;
            grid-column-gap: 15px;
            grid-template-areas:
                'avatar author'
                'avatar date'
        `}>
            <div css={css`
                grid-area: avatar;
                border-radius: 100%;
                overflow: hidden;
                width: 50px;
                height: 50px;
            `}>
                <Gravatar
                    email={authorEmail}
                    size={50}
                />
            </div>
            <div css={css`
                grid-area: author;
            `}>
                <strong>{author}</strong>
            </div>
            <div css={css`
                grid-area: date;
                color: ${colors['lightGray']}
            `}><Date dateString={date} /></div>
        </div>
    </div>
)

export default function Post({ postData }) {
    console.log(postData)
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
                        authorEmail={postData.authorEmail}
                        authorTwitter={postData.authorTwitter}
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