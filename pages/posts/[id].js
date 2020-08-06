/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Gravatar from 'react-gravatar'
import { Content, Section } from '../../shared/components/content-layout'
import Date from '../../shared/components/date'
import Layout from '../../shared/components/layout'
import { getAllIds, getData } from '../../shared/data'
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

export default function Post({ data }) {
    return (
        <Layout
            featureImage={'/images/blog-banner.jpg'}
            featureText='Blog'
        >
            <Section>
                <Content>
                    <h1>
                        {data.title}
                    </h1>
                    <AuthorBlock
                        author={data.author}
                        date={data.date}
                        authorEmail={data.authorEmail}
                        authorTwitter={data.authorTwitter}
                    />
                    <div dangerouslySetInnerHTML={{ __html: data.contentHtml }} />
                </Content>
            </Section>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = await getAllIds('posts')
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const data = await getData('posts', params.id)
    return {
        props: {
            data
        }
    }
}