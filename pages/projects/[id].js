/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Link from 'next/link'
import { Content, Grid, Section } from '../../shared/components/content-layout'
import Date from '../../shared/components/date'
import Layout from '../../shared/components/layout'
import { getAllIds, getData } from '../../shared/data'
import { breakpoints, colors } from '../../shared/styles'

const DownloadBox = (props) => (
    <Link href={props.href} passHref>
        <a css={css`
            color: ${colors['white']};
            border: none;
        `}>
            <div css={css`
                display: grid;
                grid-template-columns: max-content auto;
                grid-template-areas:
                    'image title';
                grid-column-gap: 20px;
            `}>
                <div css={css`
                    grid-area: image;
                `}>
                    <img
                        css={css`
                            height: 120px;
                            vertical-align: middle;
                        `}
                        src={props.image}
                    />
                </div>
                <div css={css`
                    grid-area: title;
                `}>
                    <h3 css={css`
                        color: ${colors['red']};
                        margin: 0;
                    `}>{props.title}</h3>
                    <label css={css`
                        margin-bottom: .25rem;
                        font-weight: 400;
                        color: ${colors['white']}
                    `}>
                        {props.subtitle}
                    </label>
                </div>
            </div>
        </a>
    </Link>
)

export default function Project({ data }) {
    return (
        <Layout
            featureImage={data.featureImage}
            featureText={data.title}
        >
            <Section css={css`
                @media(min-width: ${breakpoints['tablet']}) {
                    margin-top: -110px;
                    padding: 0;
                }
            `}>
                <Grid css={css`
                    margin-right: auto;
                    margin-left: auto;
                    background-color: ${colors['black']};
                    grid-column-gap: 1.5rem;
                    grid-row-gap: 1.5rem;
                    padding: 1.5rem;
                    grid-template-areas:
                            'x'
                            'y';
                    @media(min-width: ${breakpoints['phone']}) {
                        max-width: 540px;
                    }
                    @media(min-width: ${breakpoints['tablet']}) {
                        max-width: 720px;
                        grid-template-columns: repeat(2, 1fr);
                        grid-template-areas:
                            'x y'
                    }
                    @media(min-width: ${breakpoints['desktop']}) {
                        max-width: 720px;
                    }
                    @media(min-width: ${breakpoints['large-desktop']}) {
                        max-width: 720px;
                    }
                `}>
                    <div css={css`
                        grid-area: x;
                        display: inline-block;
                    `}>
                        <DownloadBox
                            href={data.reports[0].link}
                            image={data.reports[0].thumbnail}
                            title={data.reports[0].title}
                            subtitle={data.reports[0].subtitle}
                        />
                    </div>
                    <div css={css`
                        grid-area: y;
                        display: inline-block;
                    `}>
                        <DownloadBox
                            href={data.reports[1].link}
                            image={data.reports[1].thumbnail}
                            title={data.reports[1].title}
                            subtitle={data.reports[1].subtitle}
                        />
                    </div>
                </Grid>
            </Section>
            <Section>
                <Content>
                    <div dangerouslySetInnerHTML={{ __html: data.contentHtml }} />
                    <p><em>Published: <Date dateString={data.date} /></em></p>
                </Content>
            </Section>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = await getAllIds('projects')
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const data = await getData('projects', params.id)
    return {
        props: {
            data
        }
    }
}