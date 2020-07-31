/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Link from 'next/link'
import { Content, Section } from '../shared/components/content-layout'
import Date from '../shared/components/date'
import Layout from '../shared/components/layout'
import { getSortedPostsData } from '../shared/lib/posts'
import { colors } from '../shared/styles'

const Post = ({ title, author, date, href, summary}) => (
   <div css={css`
        border-top: 1px solid ${colors['lightGray']};
        margin: 30px 0 0;
   `}>
       <div>
            <Link href={href} passHref>
                <a css={css`
                    text-decoration: none;
                    border: none;
                `}>
                    <h3>{title}</h3>
                </a>
            </Link>
        </div>
        <div css={css`
            margin-bottom: 15px;
            color: ${colors['lightGray']}
        `}>
            By {author} on <Date dateString={date} />
        </div>
        <p>{summary}</p>
   </div>
)

const Blog = (props) => (
    <Layout
        featureImage={'/images/blog-banner.jpg'}
        featureText='Blog'
    >
        <Section>
            <Content>
                {props.allPostsData.map(({ id, title, author, date, summary }) => (
                    <Post
                        title={title}
                        author={author}
                        date={date}
                        href={`/posts/${id}`}
                        summary={summary}
                    />
                ))}
            </Content>
        </Section>
    </Layout>
)

export default Blog

export async function getStaticProps() {
    const allPostsData = await getSortedPostsData()
    return {
      props: {
        allPostsData
      }
    }
  }