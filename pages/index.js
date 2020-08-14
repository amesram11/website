/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { LinkButton } from '../shared/components/buttons'
import { BigSection, Grid } from '../shared/components/content-layout'
import Layout from '../shared/components/layout'
import Meta from '../shared/components/meta'
import { breakpoints, colors } from '../shared/styles'

const description = "New Consensus develops plans to show how America can mobilize its society to solve its biggest problems."
const featureImage = '/images/earth-banner.jpeg'

const VideoContainer = styled('div')`
    width: 336px;
    height: 189px;
    padding-bottom: 2rem;
    @media (min-width: ${breakpoints['tablet']}) {
        width: 448px;
        height: 252px;
    }
    @media (min-width: ${breakpoints['desktop']}) {
        width: 560px;
        height: 315px;
        padding: 0;
    }
`

const SectionGrid = styled(Grid)`
    grid-template-areas:
        'v'
        'd';
    justify-items: center;
    align-items: center;
`

const Home = () => (
    <Layout
        tall
        featureImage={featureImage}
        featureBoxInfo={{
            title: 'What is the Green New Deal?',
            description: 'How can we stop climate breakdown and ensure economic growth for all? The Green New Deal outlines 5 goals with 14 projects to tackle those goals.',
            url: '/green-new-deal'
        }}
    >
        <Meta
            title='New Consensus'
            description={description}
            type='website'
            image={featureImage}
        />
        <BigSection>
            <SectionGrid
                css={css`
                    @media (min-width: ${breakpoints['desktop']}) {
                        grid-template-areas:
                            'd d d d d v v v v v v v';
                    }
            `}>
                <div css={css`
                    grid-area: d;
                    @media(min-width: ${breakpoints['desktop']}) {
                        justify-self: right;
                        text-align: right;
                    }
                `}>
                    <h1>
                        A New Consensus is Emerging.
                    </h1>
                    <p>
                        {description}
                    </p>
                    <LinkButton href='/about' color={colors['red']} hoverColor={colors['white']}>About Us ⟶</LinkButton>
                </div>
                <div css={css`
                    grid-area: v;
                    @media(min-width: ${breakpoints['desktop']}) {
                        justify-self: center;
                    }
                `}>
                    <VideoContainer>
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/JG5U0xmYsSw"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullsSreen
                        />
                    </VideoContainer>
                </div>
            </SectionGrid>
        </BigSection>
        <BigSection css={css`
            background-color: ${colors['red']};
            color: ${colors['white']};
        `}>
            <SectionGrid
                css={css`
                    @media (min-width: ${breakpoints['desktop']}) {
                        grid-template-areas:
                            'v v v v v v v d d d d d';
                    }

            `}>
                <div css={css`
                    grid-area: d;
                    @media(min-width: ${breakpoints['desktop']}) {
                        justify-self: left;
                        text-align: left;
                    }
                `}>
                    <h1>
                        What's New About the New Consensus?
                    </h1>
                    <p css={css`
                        color: ${colors['white']}
                    `}>
                        While the <a
                            css={css`
                                color: ${colors['black']};
                                border-bottom: 1px solid ${colors['white']};
                                &:focus, &:hover {
                                    color: ${colors['white']};
                                    text-decoration: none;
                                }`}
                            href="https://en.wikipedia.org/wiki/Washington_Consensus#Original_sense:_Williamson's_Ten_Points">
                        old consensus</a> promotes free markets alone as the solution, New Consensus proposes solving problems like climate change and COVID-19 through goal-oriented, national projects.
                    </p>
                    <LinkButton href='/projects' color={colors['white']} hoverColor={colors['red']}>See Our Projects ⟶</LinkButton>
                </div>
                <div css={css`
                    grid-area: v;
                    @media(min-width: ${breakpoints['desktop']}) {
                        justify-self: center;
                    }`}
                >
                    <VideoContainer>
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/UNsHq6z99DM"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullsSreen
                        />
                    </VideoContainer>
                </div>
            </SectionGrid>
        </BigSection>
        <BigSection>
            <SectionGrid
                css={css`
                    @media (min-width: ${breakpoints['desktop']}) {
                        grid-template-areas:
                            'd d d d d v v v v v v v';
                    }
            `}>
                <div css={css`
                    grid-area: d;
                    @media(min-width: ${breakpoints['desktop']}) {
                        justify-self: right;
                        text-align: right;
                    }
                `}>
                    <h1>
                        Why Do We Need a New Consensus?
                    </h1>
                    <p>
                        A truly beautiful world is possible - one without poverty or pollution, and with prosperity and dignity for everyone. But the current ideas being proposed by our political leaders won't get us there.
                    </p>
                    <LinkButton href='/library' color={colors['red']} hoverColor={colors['white']}>Read More in Our Library ⟶</LinkButton>
                </div>
                <div css={css`
                    grid-area: v;
                    @media(min-width: ${breakpoints['desktop']}) {
                        justify-self: center;
                    }
                `}>
                    <VideoContainer>
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/rZc6ZWTUwCE"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullsSreen
                        />
                    </VideoContainer>
                </div>
            </SectionGrid>
        </BigSection>
    </Layout>
)

export default Home
