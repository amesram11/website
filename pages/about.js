/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'
import Link from 'next/link'
import Gravatar from 'react-gravatar'
import { SocialMediaButton } from '../shared/components/buttons'
import { Content, Section } from '../shared/components/content-layout'
import Layout from '../shared/components/layout'
import Meta from '../shared/components/meta'
import Video from '../shared/components/video'
import { getSortedData } from '../shared/data'

const SocialMediaRow = styled('div')`
    display: flex;
    justify-content: space-between
`

const TeamMember = ({ email, twitterHandle, children }) => (
    <div>
        <div css={css`
            display: grid;
            grid-template-columns: 150px auto;
            grid-template-rows: 150px auto;
            grid-column-gap: 15px;
            grid-row-gap: 15px;
            grid-template-areas:
                'image description'
                'social description'
        `}>
            <div css={css`
                grid-area: image;
            `}>
                <Gravatar
                    email={email}
                    size={150}
                />
            </div>
            <div css={css`
                grid-area: social;
            `}>
                <SocialMediaRow>
                    <SocialMediaButton
                        type='email'
                        href={`mailto:${email}`}
                    />
                    <SocialMediaButton
                        type='twitter'
                        href={`https://twitter.com/${twitterHandle}`}
                    />
                </SocialMediaRow>
            </div>
            <div css={css`
                grid-area: description;
            `}>
                {children}
            </div>
        </div>
        <hr />
    </div>
)

const featureImage = '/images/about-banner.jpg'
const About = ({ data }) => (
    <Layout
        featureImage={featureImage}
        featureText='About'

    >
        <Meta
            title='About'
            description='Learn more about what the new consensus is and who we are.'
            type='website'
            image={featureImage}
        />
        <Section>
            <Content>
                <h2>What is New Consensus?</h2>
                <div css={css`
                    display: inline-block;
                    padding-top: 2rem;
                    padding-bottom: 2rem;
                    margin-left: auto;
                    margin-right: auto;
                `}>
                    <Video src="https://www.youtube.com/embed/iirqNnKHTTg" />
                </div>
                <p>
                    New Consensus is a think tank that works on plans to directly tackle the largest problems facing humanity. We aim to solve problems like climate change, economic stagnation, racial and rural wealth gaps, and more by proposing solutions modeled after mass economic mobilizations of the past. To do this, we draw on successful examples from not only America's own history, but also advanced economies around the world,
                </p>
                <p>
                    Our guiding principle at New Consensus is that it <em>is possible</em> to create the best world we can conceive of. A world where everyone can live free, prosperous lives. Humanity has everything it needs to build that world in a single generation: billions of creative, hard working people, technology that already can allow us to make a comfortable living safely and sustainably, and unlimited energy from the sun that we can now harness to power that technology.
                </p>
                <p>
                    The obstacles to getting there are political, not technical. Many special interests fight to keep change and progress from being actualized, and our political leadership tend to be beholden to those interests. An equally-powerful blocker is the reigning consensus, or “the Washington Consensus," that drives the dominant thinking in economics, government, technology, labor and business. Over a period when multiple existential threats to life as we know it have emerged into plain view, the Washington Consensus has proven woefully inadequate to face the challenges in front of us and has convinced our political leaders that their role should be on the sidelines.
                </p>
                <p>
                    The faults with the Washington Consensus have become apparent, however, as problems like COVID-19 and climate change have gone unanswered in America. A new consensus is rising that isn't afraid to think as big as the problems we face. It is driven by a new generation of thinkers and leaders who recognize that governments and other public institutions have played a critical role every time a national economy has renewed and reinvented itself—not only by setting rules, but also by setting goals; not only by building infrastructure, but also by investing in new industries; not only by protecting rights, but also by materially correcting historic injustices.
                </p>
                <p>
                    New consensus thinkers are exploring how government and other public institutions can lead the transition to a green economy, close wealth and income gaps between groups, spearhead innovation and research, kick-start new high wage industries, and more.
                </p>
                <p>
                    Our goal at New Consensus is to foster this network of academics, creators, activists, leaders and entrepreneurs and make the new consensus the standard operating system for national economies around the world.
                </p>
                <p>
                    Check out the our <Link href='/library' passHref><a>reading list</a></Link>to learn about some of the voices of the new consensus.
                </p>
                <h2>Our Story</h2>
                <p>
                    The elections of 2016 showed that the American people see the possibility for real change. In order to make that change a reality, New Consensus was formed as a team of experienced organizers and policy wonks. We turn progressive ideas into policy, working at three key stages to:
                </p>
                <ul>
                    <li>Develop in-depth policy proposals and plans (like the Green New Deal) to support economic development and transformation;</li>
                    <li>Organize a broad coalition of climate experts, economists, business leaders, union and labor leaders, policy leaders, and other experts around an emerging new consensus in support of economic development and transformation; and</li>
                    <li>Produce educational material to popularize and build broad public and political support for this new consensus.</li>
                </ul>
                <h2>Team</h2>
                {data.map(({ name, email, twitterHandle, contentHtml }) => (
                    <TeamMember
                        key={name}
                        name={name}
                        email={email}
                        twitterHandle={twitterHandle}
                    >
                        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
                    </TeamMember>
                ))}
                <h2>Contact Us</h2>
                <p>
                    E-mail us at <a href='mailto:contact@newconensus.com'>contact@newconsensus.com</a>!
                </p>
            </Content>
        </Section>
    </Layout>
)

export default About


export async function getStaticProps() {
    const data = await getSortedData('staff', 'name')
    return {
        props: {
            data
        }
    }
}