/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { LinkButton } from '../shared/components/buttons'
import { BigSection, Grid } from '../shared/components/content-layout'
import Layout from '../shared/components/layout'
import { breakpoints, colors } from '../shared/styles'

const Home = () => (
    <Layout
        tall
        featureImage={'/images/earth-banner.jpeg'}
        featureBoxInfo={{
            title: 'What is the Green New Deal?',
            description: 'How can we stop climate breakdown and ensure economic growth for all? The Green New Deal uses policy and spending tools to confront the most important problems facing America.',
            url: '/green-new-deal'
        }}
    >
        <BigSection>
            <Grid
                css={css`
                    grid-template-areas:
                        'b'
                        'a';

                    @media (min-width: ${breakpoints['desktop']}) {
                        grid-template-areas:
                            '. a a a a a b b b b b b';
                    }
            `}>
                <div css={css`
                    grid-area: a;
                    @media(min-width: ${breakpoints['desktop']}) {
                        text-align: right;
                    }
                `}>
                    <h1>
                        A new consensus is emerging.
                    </h1>
                    <p>
                        Drawing on successful examples from America's own history, as well as advanced economies around the world, new consensus thinkers are rediscovering how government can catalyze the transition to a green economy, close racial and regional wealth and income gaps, spearhead innovation and research, kickstart new high-wage industries, and more.
                    </p>
                    <LinkButton href='/about' color={colors['red']} hoverColor={colors['white']}>About Us ⟶</LinkButton>
                </div>
                <div css={css`
                    grid-area: b;
                    text-align: center;
                `}>
                    <img css={css`
                        width: 70%;
                        max-width: 320px;
                        margin: 0 0 45px;
                        @media(min-width: ${breakpoints['desktop']}) {
                            width: 422px;
                            height: 422px;
                            max-width: none;
                            margin: 0;
                        }
                    `} src='/images/worldview.png' />
                </div>
            </Grid>
        </BigSection>
    </Layout>
)

export default Home
