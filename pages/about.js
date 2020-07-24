/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Layout from '../shared/components/layout'
import Link from 'next/link'
import { breakpoints } from '../shared/styles'
import { Section, Row, H4, P, A} from '../shared/components/tags'

const About = () => (
    <Layout
        featureImage={'/images/gnd-banner.png'}
        featureText='About'
    >
        <Section>
            <Row css={css`
                @media (max-width: ${breakpoints['desktop']}) {
                    grid-template-areas: 
                        'a';                               
                }
                @media (min-width: ${breakpoints['desktop']}) {
                    grid-template-areas: 
                        '. . a a a a a a a a . .';                               
                }
            `}>
                <div css={css`
                    grid-area: a;
                `}>
                    <H4>Why a new consensus?</H4>
                    <P>
                        A truly beautiful world is possible—one without poverty or pollution, and with prosperity and dignity for everyone. Humanity has everything it needs to build that world in a single generation: billions of creative, hard working people, technology that already can allow us to make a comfortable living safely and sustainably, and unlimited energy from the sun that we can now harness to power that technology.
                    </P>
                    <P>
                        The obstacles to getting there are political, not technical. Entrenched, backward-looking political elites fight to keep the world as it is. An equally-powerful blocker is their reigning consensus—called neoliberalism or “the Washington Consensus”—that drives their thinking on economics, government, technology, labor and business. Over a period when multiple existential threats to life as we know it have emerged into plain view, the Washington Consensus has deliberately sought to paralyze societies to prevent them from acting collectively.
                    </P>
                    <P>
                        Finally a new consensus is rising. It is driven by a new generation of thinkers and leaders who recognize that governments and other public institutions have played a critical role every time a national economy has renewed and reinvented itself—not only by setting rules, but also by setting goals; not only by building infrastructure, but also by investing in new industries; not only by protecting rights, but also by materially correcting historic injustices.
                    </P>
                    <P>
                        New consensus thinkers are exploring how government and other public institutions can lead the transition to a green economy, close wealth and income gaps between groups, spearhead innovation and research, kick-start new high wage industries, and more.
                    </P>
                    <P>
                        We are a global, distributed network of academics, creators, activists, leaders and entrepreneurs working to make the new consensus the standard operating system for national economies around the world.
                    </P>
                    <P>
                        Check out the our <Link href='/library' passHref><A>reading list</A></Link> to learn about some of the voices of the new consensus.
                    </P>
                </div>
            </Row>
        </Section>
    </Layout>
)

export default About