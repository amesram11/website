/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import Layout from '../shared/components/layout'
import Link from 'next/link'
import { colors } from '../shared/styles'
import { getSortedPostsData } from '../shared/lib/posts'
import { Section, Strong, H3, HR, P, A, UL, LI, SingleColumnContent} from '../shared/components/tags'
import { SocialMediaButton } from '../shared/components/buttons'

const Post = ({ title, author, date, href, summary}) => (     
   <div css={css`
        border-top: 1px solid ${colors['lightGray']};        
        margin: 30px 0 0;
   `}>
       <div>
            <Link href={href} passHref>
                <A css={css`
                    text-decoration: none;
                    border: none;
                `}>
                    <H3>{title}</H3>
                </A>
            </Link>
        </div>
        <div css={css`            
            margin-bottom: 15px;
            color: ${colors['lightGray']}
        `}>
            By {author} on {date}
        </div>
        <div dangerouslySetInnerHTML={{ __html: summary }} />   
   </div>
)
    
const summarize = (text) => {
    return text.substring(0, 500) + '...'
}

const Blog = (props) => (
    <Layout
        featureImage={'/images/blog-banner.jpg'}
        featureText='Blog'
    >
        <Section>            
            <SingleColumnContent>
                {props.allPostsData.map(({ id, title, author, date, contentHtml }) => (
                    <Post
                        title={title}
                        author={author}
                        date={date}
                        href={`/posts/${id}`}
                        summary={summarize(contentHtml)}
                    />                    
                ))}            
            </SingleColumnContent>
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