/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import ContentBlock from '../shared/components/content-block'
import { Content, Section } from '../shared/components/content-layout'
import Layout from '../shared/components/layout'
import Meta from '../shared/components/meta'
import { getSortedData } from '../shared/data'

const LibraryBlock = ({ title, imageUrl, purchaseUrl, right, children}) => {
    let imageBlock = (
        <div>
            <img
                css={css`
                    width: 200px;
                    height: 300px;
                    display: block;
                    margin-bottom: 15px;
                `}
                src={imageUrl}
            />
            <a href={purchaseUrl}>
                Purchase at IndieBound
            </a>
        </div>
    )

    return (
        <ContentBlock
            right={right}
            titleBlock={title}
            imageBlock={imageBlock}
        >
            {children}
        </ContentBlock>
    )
}

const description = 'If you’ve found your way to this reading list you may be thinking, “I’m on board; I just need more details!” Or you may be thinking, “I’m not convinced, but I want to know more.” This reading list will set you on your way.'
const featureImage = '/images/library-banner.jpg'

const Library = ({ data }) => {
    let odd = false
    return (
        <Layout
            featureImage={featureImage}
            featureText='Library'
        >
             <Meta
                title='Library'
                description={description}
                type='website'
                image={featureImage}
            />
            <Section>
                <Content>
                    <p>
                        If you’ve found your way to this reading list you may be thinking, “I’m on board; I just need more details!” Or you may be thinking, “I’m not convinced, but I want to know more.” This reading list will set you on your way.
                    </p>
                    <p>
                        We have assembled here works by economists, historians, bankers, and more, all of whom take a fresh look at economic growth, sustainability, and equity, as well as successful efforts to confront problems on a national, regional, and even global scale. No one of these books captures the new consensus in its entirety; many perspectives—and, even more crucially, many kinds of evidence—are necessary in order to envision and build a future we can all live with.
                    </p>
                    {data.map(({ title, thumbnail, purchaseUrl, contentHtml }) => {
                        odd = !odd
                        return (
                            <LibraryBlock
                                key={title}
                                right={odd}
                                title={title}
                                imageUrl={thumbnail}
                                purchaseUrl={purchaseUrl}
                            >
                                <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
                            </LibraryBlock>
                        )}
                    )}
                    <hr />
                    <h3>And more...</h3>
                    <p>Get a deeper overview of the emerging consensus from a whole range of economists – including:</p>
                    <ul>
                        <li>The Failure of Austerity: Rethinking Fiscal Policy (Stephanie Kelton)</li>
                        <li>Understanding Money and Macroeconomic Policy (L. Randall Wray and Yeva Nersisyan)</li>
                        <li>The Costs of Short-termism (Andrew Haldane)</li>
                        <li>Innovative Enterprise and the Theory of the Firm (William Lazonick)</li>
                        <li>Innovation, the State and Patient Capital (Mariana Mazzucato)</li>
                        <li>Investment-led Growth: A Solution to the European Crisis (Stephany Griffith-Jones and Giovanni Cozzi)</li>
                        <li>Inequality and Economic Growth (Joseph Stiglitz)</li>
                        <li>The Paradoxes of Privatisation and Public Service Outsourcing (Colin Crouch)</li>
                        <li>Decarbonisation: Innovation and the Economics of Climate Change (Dimitri Zenghelis)</li>
                        <li>Capitalism, Technology and a Green Global Golden Age: The Role of History in Helping to Shape the Future (Carlota Perez)</li>
                    </ul>
                </Content>
            </Section>
        </Layout>
    )
}

export default Library

export async function getStaticProps() {
    const data = await getSortedData('books', 'order')
    return {
        props: {
            data
        }
    }
}