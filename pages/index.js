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
    padding-bottom: 25px;
    width: 560px;
    height: 315px;
    @media (max-width: ${breakpoints['desktop']}) {
        width: 448px;
        height: 252px;
    }
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
            <Grid
                css={css`
                    grid-template-areas:
                        'b'
                        'a';

                    @media (min-width: ${breakpoints['desktop']}) {
                        grid-template-areas:
                            'a a a a a b b b b b b b';
                    }
            `}>
                <div css={css`
                    grid-area: a;
                    @media(min-width: ${breakpoints['desktop']}) {
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
                <VideoContainer css={css`
                    grid-area: b;
                    align-self: center;
                    justify-self: center;

                `}>
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/JG5U0xmYsSw"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullsSreen
                    />
                </VideoContainer>
            </Grid>
        </BigSection>
        <BigSection css={css`
            background-color: ${colors['red']};
            color: ${colors['white']};
        `}>
            <Grid
                css={css`
                    grid-template-areas:
                        'a'
                        'b';

                    @media (min-width: ${breakpoints['desktop']}) {
                        grid-template-areas:
                            'a a a a a a a b b b b b';
                    }
            `}>
                <div css={css`
                    grid-area: b;
                    @media(min-width: ${breakpoints['desktop']}) {
                        text-align: right;
                    }
                `}>
                    <h1>
                        What's New About the New Consensus?
                    </h1>
                    <p css={css`
                        color: ${colors['white']}
                    `}>
                        Over the last several decades, America has  abandoned the idea that the government should have any role in shaping our future. By drawing on successful examples from America's own history, as well as advanced economies around the world, New Consensus presents an alternative vision. We show how the government must shape new markets, invest in new high-wage industries, and create projects to mobilize our economy to solve our biggest problems like climate change, racial and regional wealth and income gaps, and COVID-19.
                    </p>
                    <LinkButton href='/projects' color={colors['white']} hoverColor={colors['red']}>See Our Projects ⟶</LinkButton>
                </div>
                <VideoContainer css={css`
                    grid-area: a;
                    align-self: center;
                    justify-self: center;

                `}>
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/UNsHq6z99DM"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullsSreen
                    />
                </VideoContainer>
            </Grid>
        </BigSection>
        <BigSection>
            <Grid
                css={css`
                    grid-template-areas:
                        'b'
                        'a';

                    @media (min-width: ${breakpoints['desktop']}) {
                        grid-template-areas:
                            'a a a a a b b b b b b b';
                    }
            `}>
                <div css={css`
                    grid-area: a;
                    @media(min-width: ${breakpoints['desktop']}) {
                        text-align: right;
                    }
                `}>
                    <h1>
                        Why Do We Need a New Consensus?
                    </h1>
                    <p>
                        A truly beautiful world is possible - one without poverty or pollution, and with prosperity and dignity for everyone. Humanity has everything it needs to build that world in a single generation: billions of creative, hard working people, technology that already can allow us to make a comfortable living safely and sustainably, and unlimited energy from the sun, wind, and other sources that we can now harness to power that technology. But to achieve this, we must use a new approach, and our politicians much reach a new consensus.
                    </p>
                    <LinkButton href='/library' color={colors['red']} hoverColor={colors['white']}>Read More in Our Library ⟶</LinkButton>
                </div>
                <VideoContainer css={css`
                    grid-area: b;
                    align-self: center;
                    justify-self: center;

                `}>
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/rZc6ZWTUwCE"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullsSreen
                    />
                </VideoContainer>
            </Grid>
        </BigSection>
    </Layout>
)

export default Home
