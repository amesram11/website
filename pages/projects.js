/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Link from 'next/link'
import ContentBlock from '../shared/components/content-block'
import { Content, Section } from '../shared/components/content-layout'
import Layout from '../shared/components/layout'
import Meta from '../shared/components/meta'
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
                    display: block;
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

const description = "At New Consensus, we develop reports and plans for tackling the world's biggest problems. See some of our projects below."
const featureImage='/images/projects-banner.jpg'
const Projects = ({ data }) => (
    <Layout
        featureImage={featureImage}
        featureText='Projects'
    >
        <Meta
            title='Projects'
            description={description}
            type='website'
            image={featureImage}
        />
        <Section>
            <Content>
                <p>
                    <em>{description}</em>
                </p>
                {data.map(({ id, title, thumbnail, summary }) => (
                    <ProjectBlock
                        key={title}
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