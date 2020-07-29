/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Layout from '../shared/components/layout'
import Link from 'next/link'
import { colors } from '../shared/styles'
import { getSortedPostsData } from '../shared/lib/posts'
import { Section, Content } from '../shared/components/content-layout'

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
            By {author} on {date}
        </div>
        <div>{summary}</div>
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