/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import Layout from '../shared/components/layout'
import Link from 'next/link'
import { breakpoints, colors } from '../shared/styles'
import { Section, Strong, H3, HR, P, A, UL, LI, SingleColumnContent} from '../shared/components/tags'
import ContentBlockWithImage from '../shared/components/content-block'

const LibraryBlock = ({ title, imageUrl, purchaseUrl, right, children}) => {
    let imageBlock = (
        <div>
            <img 
                css={css`
                    width: 200px;
                    height: 300px;
                `} 
                src={imageUrl}
            />
            <A href={purchaseUrl}>
                Purchase at IndieBound
            </A>
        </div>
    )

    return (
        <ContentBlockWithImage
            right={right}
            titleBlock={title}
            imageBlock={imageBlock}
        >
            {children}
        </ContentBlockWithImage>
    )
}

const Library = () => (
    <Layout
        featureImage={'/images/library-banner.jpg'}
        featureText='Library'
    >
        <Section>            
            <SingleColumnContent>
                <P>
                    If you’ve found your way to this reading list you may be thinking, “I’m on board; I just need more details!” Or you may be thinking, “I’m not convinced, but I want to know more.” This reading list will set you on your way. 
                </P>
                <P>
                    We have assembled here works by economists, historians, bankers, and more, all of whom take a fresh look at economic growth, sustainability, and equity, as well as successful efforts to confront problems on a national, regional, and even global scale. No one of these books captures the new consensus in its entirety; many perspectives—and, even more crucially, many kinds of evidence—are necessary in order to envision and build a future we can all live with.
                </P>
                <LibraryBlock
                    right
                    title='Bad Samaritans'
                    imageUrl='/images/bad-samaritans.jpg'
                    purchaseUrl='https://www.indiebound.org/book/9781596913998'>
                        <Strong>First, get yourself de-programmed with Bad Samaritans.</Strong> This is the best, globally-oriented account of how economic progress really happens. Ha-Joon Chang has written some great new books (see below), but Bad Samaritans is the book to start with: it tells the full story of how the rich countries got rich. It wasn’t through individual innovations or brilliant investment or “letting the market be free,” but by trying as societies—by building institutions such as national investment banks, non-profit savings bank networks, state-owned or state-backed industries, infrastructure and education designed to promote industrial development, and so on.  It’s not just history, either; Chang shows how all the countries today making economic and social progress are still using those kinds of institutions.
                </LibraryBlock>

            </SingleColumnContent>
        </Section>
    </Layout>
)

export default Library