/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import Layout from '../shared/components/layout'
import Link from 'next/link'
import { breakpoints } from '../shared/styles'
import { Section, Strong, H3, HR, P, A, UL, LI, SingleColumnContent} from '../shared/components/tags'
import { SocialMediaButton } from '../shared/components/buttons'
import ContentBlockWithImage from '../shared/components/content-block'

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
        <ContentBlockWithImage
            titleBlock={titleBlock}
            imageBlock={imageBlock}            
        >
            {children}
        </ContentBlockWithImage>            
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
                    Test
                </ProjectBlock>
                <ProjectBlock
                    title='Pandemic Economics'
                    imageUrl='/images/gnd-14-pager-thumb.png'
                    projectUrl='/pandemic-economics'
                >
                    Test
                </ProjectBlock>
            </SingleColumnContent>
        </Section>
    </Layout>
)

export default Projects