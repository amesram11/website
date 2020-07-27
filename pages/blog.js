/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import Layout from '../shared/components/layout'
import Link from 'next/link'
import { colors } from '../shared/styles'
import { Section, Strong, H3, HR, P, A, UL, LI, SingleColumnContent} from '../shared/components/tags'
import { SocialMediaButton } from '../shared/components/buttons'

const Post = ({ title, author, date, href, children}) => (     
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
            By {author} on {date.toLocaleString('default', { month: 'long'})} {date.getDate()}, {date.getYear()}
        </div>
        <P>
            {children}
        </P>
   </div>
)
    
const summarize = (text) => {
    return text.substring(0, 500) + '...'
}

const Blog = () => (
    <Layout
        featureImage={'/images/blog-banner.jpg'}
        featureText='Blog'
    >
        <Section>            
            <SingleColumnContent>
                <Post
                    title='Test'
                    author='Zack Exley'
                    date={new Date(2020, 2, 29)}
                    href='/'
                >
                    {summarize('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')}
                </Post>                
            </SingleColumnContent>
        </Section>
    </Layout>
)

export default Blog