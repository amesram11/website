/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Layout from '../shared/components/layout'
import { Section, Row, P } from '../shared/components/tags'
import { breakpoints, colors } from '../shared/styles'

const GreenNewDeal = () => (
    <Layout
        featureImage={'/images/gnd-banner.png'}
        featureText='The Green New Deal'
    >   
        <Section css={css`
            @media(min-width: ${breakpoints['tablet']}) {
                margin-top: -110px;
                padding: 0;
            }          
        `}>
            <Row css={css`
                @media (max-width: ${breakpoints['desktop']}) {
                    grid-template-areas: 
                        'a'
                }
                @media (min-width: ${breakpoints['desktop']}) {
                    grid-template-areas: 
                        '. . a a a a a a a a . .';                               
                }                
            `}>
                <Row css={css`
                    background-color: ${colors['black']};
                    min-height: 154px;
                    grid-area: a;
                    @media (max-width: ${breakpoints['desktop']}) {
                        grid-template-areas: 
                            'x'
                            'y'
                    }
                    @media (min-width: ${breakpoints['desktop']}) {
                        grid-template-areas: 
                            'x x x x x x y y y y y y';                               
                    }
                `}>
                    <div css={css`
                        grid-area: x;
                        padding: 1.5rem;
                    `}>
                        <a css={css`
                            display: inline-block;
                            color: #fff;
                            margin-right: 30px;
                            border: none;
                        `}>
                            <img css={css`  
                                height: 120px;
                                display: inline-block;
                                margin-right: 20px;
                            `} src='/images/gnd-14-pager-thumb.png' />
                        </a>
                    </div>
                    <div css={css`                        
                        grid-area: y;
                        padding: 1.5rem;
                    `}>
                        <a css={css`
                            display: inline-block;
                            color: #fff;
                            margin-right: 30px;
                            border: none;
                        `}>
                            <img css={css`  
                                height: 120px;
                                display: inline-block;
                                margin-right: 20px;
                            `}
                            src='/images/gnd-2-pager-thumb.png' />
                        </a>
                    </div>
                </Row>
            </Row>
        </Section>
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
                `}><P>
                New Consensus works to develop and promote the Green New Deal, a World War Two-scale mobilization to fix America’s most pressing economic and environmental problems. We advise progressive leaders and organizations on both the background  and implementation of a sweeping economic mobilization to build a clean and just economy.

Guiding Vision
The Green New Deal will be the most ambitious and transformative national project since Franklin Roosevelt’s original New Deal and World War II economic mobilizations.

The Green New Deal includes investments not only in communities and public infrastructure, but also in private industry to enable a sweeping transformation of our entire economy – with the public receiving appropriate ownership stakes and return on its investments.

The plan calls on and enables our whole society to participate in a single great national aim: the rapid transition to a forward-looking society of broad opportunity, equal justice, productive prosperity, and environmental sustainability.

Goals
The Green New Deal has five main goals:

achieve net-zero greenhouse gas emissions through a fair and just transition for all communities and workers;
create millions of high-quality, high-wage jobs; and ensure prosperity and economic security for all people of the United States;
invest in the infrastructure and industry of the United States to sustainably meet the challenges of the 21st century;
secure clean air and water, climate and community resilience, healthy food, access to nature, and a sustainable environment for all;
promote justice and equity by stopping current, preventing future, and repairing the historic oppression of frontline and vulnerable communities.
A national mobilization of the size and scale of the Green New Deal presents an unprecedented opportunity to not only combat the climate crisis, but also to eliminate poverty in the United States and to make wealth, prosperity, and security available to every person who participates in the transition. Thus, the goals of the Green New Deal represent both what is needed to effectively address climate change and what is needed to transform our current economy to one that is just, prosperous, and sustainable for all Americans.

Projects
The Green New Deal brings together into one coherent whole a multitude of interlocking, complementary, and critically necessary projects, including:

Replacing or upgrading every U.S. building to achieve maximal energy efficiency, water efficiency, safety, and durability. Properly designed, this project will create millions of new high-wage jobs across every community and will be designed to foster local ownership, with the work being led by local firms, organizations, and co-ops. The project must also make startup capital available to people who want to form new firms and co-ops, and take care to invest especially in communities that have been denied capital and development for generations;
Meeting 100 percent of our power demand through clean, renewable, and zero-emission energy sources by dramatically expanding and upgrading existing renewable power sources and deploying new capacity. This will be possible only with massive public investments into domestic wind turbine and solar cell industries, among others;
Making massive investments into U.S. manufacturing industries to remove pollution and greenhouse gas emissions. Because these investments generate incalculable public benefits not capturable by private profits, only the public can rationally undertake them;
Overhauling U.S. transportation systems to eliminate pollution and greenhouse gas emissions, by investing in zero-emission vehicle infrastructure and manufacturing, as well as clean, affordable, and accessible public transit and high-speed rail.
Financing the Green New Deal
The Green New Deal will be funded as all other ambitious American projects— frompublic works to bank bailouts, and from wars to and tax cuts—have been: through carefully targeted, Congressionally authorized spending. As the post-2008 consensus among serious economists and financiers affirms, this does not require “new taxes” unless inflation emerges. And since (a) well over $5 trillion in tax cuts and war expenditures in recent years have not triggered inflation, (b) the Fed is still struggling to get inflation consistently up to its 2% target, and (c) the Green New Deal will produce new goods and services to keep pace with and absorb new expenditures, there is no more reason to let fear about financing halt progress here than there was to let it halt wars or tax cuts.

It should also be noted that unlike wars and tax cuts, many Green New Deal investments will be compensated, be it through equity stakes, interest payments, or other appropriate returns on investments. These will of course act in counter-inflationary fashion. Similarly, the new prosperity that the Green New Deal will bring to scores of millions of Americans below the top of the income and wealth distributions will rapidly grow the nation’s tax base, vastly expanding federal revenue even without raising marginal tax rates.

Furthermore, the question of how to pay for the Green New Deal must take into account the tremendous costs of inaction. We know scientifically that a plan of the scope and scale of the Green New Deal is the only thing that will stave off irreversible climate catastrophe and, with it, tremendous economic loss. Thus, we must ask not only what the Green New Deal will cost, but also what costs it will avert – especially in light of the growth and prosperity it will create.

Forward Together
The New Deal and the Second World War economic mobilizations were imperfect. Though they brought broad progress and improvements to American life, they were also marred by compromises made with conservative politicians to obtain Congressional cooperation. Injustice cannot be the price we pay for a green economy. Green New Deal projects must be designed from the start to ensure justice and equity for all.

The Green New Deal is Possible and Practical
As a country of 325 million people, with the world’s largest and most advanced industrial economy, the United States has every necessary tool at its disposal to achieve the goals of the Green New Deal. For too many decades, fear and complacency have kept our leaders from fulfilling the promise of America to its people. The result is malaise and stagnation, with wealth concentrating ever more densely at the top, poverty overwhelming the bottom, and insecurity menacing the middle. Meanwhile, climate change threatens humanity and most forms of life with extinction. All we’ve awaited throughout this decline is good faith, clear vision, and passionate leadership.

The faith, vision, and passion are here. We shall move forward.
                </P></div>
            </Row>
        </Section>
    </Layout>
)

export default GreenNewDeal;