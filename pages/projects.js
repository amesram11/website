/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Link from 'next/link'
import ContentBlock from '../shared/components/content-block'
import { Content, Section } from '../shared/components/content-layout'
import Layout from '../shared/components/layout'
import { getSortedData } from '../shared/data'
import { colors } from '../shared/styles'

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
            <a css={css`
                border: 1px solid ${colors['lightGray']}
            `}>
            <img
                css={css`
                    width: 255px;
                    height: 330px;
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


const Projects = (props) => (
    <Layout
        featureImage={'/images/projects-banner.jpg'}
        featureText='Projects'
    >
        <Section>
            <Content>
                <p>
                    <em>At New Consensus, we aim to develop reports and plans for tackling the world's biggest problems. See some of our work below.</em>
                </p>
                {props.data.map(({ id, title, thumbnail, summary }) => (
                    <ProjectBlock
                        title={title}
                        imageUrl={thumbnail}
                        projectUrl={`/projects/${id}`}
                    >
                        {summary}
                    </ProjectBlock>
                ))}
            </Content>
        </Section>
    </Layout>
)

export default Projects

export async function getStaticProps() {
    const data = await getSortedData('projects', 'date', true)
    return {
        props: {
            data
        }
    }
}