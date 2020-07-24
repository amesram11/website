/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import Layout from '../shared/components/layout'
import Link from 'next/link'
import { breakpoints } from '../shared/styles'
import { Section, Strong, H3, HR, P, A, UL, LI, SingleColumnContent} from '../shared/components/tags'

const About = () => (
    <Layout
        featureImage={'/images/gnd-banner.png'}
        featureText='About'
    >
        <Section>            
            <SingleColumnContent>
                <H3>Why a new consensus?</H3>
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
                <H3>Our Story</H3>
                <P>
                    The elections of 2016 showed that the American people see the possibility for real change. In order to make that change a reality, New Consensus was formed as a team of experienced organizers and policy wonks. We turn progressive ideas into policy, working at three key stages to:
                </P>
                <UL>
                    <LI>Develop in-depth policy proposals and plans (like the Green New Deal) to support economic development and transformation;</LI>
                    <LI>Organize a broad coalition of climate experts, economists, business leaders, union and labor leaders, policy leaders, and other experts around an emerging new consensus in support of economic development and transformation; and</LI>
                    <LI>Produce educational material to popularize and build broad public and political support for this new consensus.</LI>
                </UL>
                <H3>Team</H3>
                <P>
                    <Strong>Demond Drummer</Strong> is co-founder and executive director of New Consensus. He is an organizer and civic innovator whose grassroots work in Chicago has been recognized by the Obama White House, Code for America and the Aspen Institute. 
                </P>
                <HR />
                <P>
                    <Strong>Zack Exley</Strong> is a co-founder and senior advisor of New Consensus, where he focuses on strategy, recruiting, and fundraising. Zack has been a pioneer in the worlds of political campaigning, organizing, and fundraising for more than 20 years.
                </P>
                <HR />
                <P>
                    <Strong>Saikat Chakrabarti</Strong> is the President of New Consensus. Previously, he was a founding engineer at Stripe, co-founded Brand New Congress and Justice Democrats, and was the campaign manager and then Chief of Staff to Rep. Alexandria Ocasio-Cortez where he led the effort to draft the Green New Deal.
                </P>
            </SingleColumnContent>
        </Section>
    </Layout>
)

export default About