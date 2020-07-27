/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import Layout from '../shared/components/layout'
import Link from 'next/link'
import { breakpoints } from '../shared/styles'
import { Section, Strong, H3, HR, P, A, UL, LI, SingleColumnContent} from '../shared/components/tags'
import { SocialMediaButton } from '../shared/components/buttons'
import ContentBlock from '../shared/components/content-block'

const ProjectBlock = ({ title, projectUrl, imageUrl, children}) => {     
    let titleBlock = (
        <Link href={projectUrl} passHref>
            <A css={css`
                text-decoration: none;
                border: none;
            `}>
                {title}
            </A>
        </Link>
    )   

    let imageBlock = (
        <Link href={projectUrl} passHref>
            <a>
            <img 
                css={css`
                    width: 200px;
                    height: 300px;
                `} 
                src={imageUrl}
            />
            </a>
        </Link>
        
    )

    let caption=(
        <Link href={projectUrl} passHref>
            <A>
                Read more
            </A>
        </Link>
    )
    return (        
        <ContentBlock
            titleBlock={titleBlock}
            imageBlock={imageBlock}            
        >
            {children}
        </ContentBlock>            
    )
}
    

const Projects = () => (
    <Layout
        featureImage={'/images/projects-banner.jpg'}
        featureText='Projects'
    >
        <Section>            
            <SingleColumnContent>
                <P>
                    <em>At New Consensus, we aim to develop reports and plans for tackling the world's biggest problems. See some of our work below.</em>
                </P>
                <ProjectBlock
                    title='Green New Deal'
                    imageUrl='/images/gnd-14-pager-thumb.png'
                    projectUrl='/green-new-deal'
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </ProjectBlock>
                <ProjectBlock
                    title='Pandemic Economics'
                    imageUrl='/images/gnd-14-pager-thumb.png'
                    projectUrl='/pandemic-economics'
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </ProjectBlock>
            </SingleColumnContent>
        </Section>
    </Layout>
)

export default Projects