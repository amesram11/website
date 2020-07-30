/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Link from 'next/link'
import ContentBlock from '../shared/components/content-block'
import { Content, Section } from '../shared/components/content-layout'
import Layout from '../shared/components/layout'

const ProjectBlock = ({ title, projectUrl, imageUrl, children}) => {
    let titleBlock = (
        <Link href={projectUrl} passHref>
            <a css={css`
                text-decoration: none;
                border: none;
            `}>
                {title}
            </a>
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
            <a>
                Read more
            </a>
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
            <Content>
                <p>
                    <em>At New Consensus, we aim to develop reports and plans for tackling the world's biggest problems. See some of our work below.</em>
                </p>
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
            </Content>
        </Section>
    </Layout>
)

export default Projects