/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import Layout from '../shared/components/layout'
import Link from 'next/link'
import { breakpoints, colors } from '../shared/styles'
import { Section, Strong, H3, HR, P, A, UL, LI, SingleColumnContent} from '../shared/components/tags'
import { SocialMediaButton } from '../shared/components/buttons'

const LibraryBlock = ({ title, imageUrl, purchaseUrl, right, children}) => (
    <div css={css`
        border-top: 1px solid ${colors['lightGray']};
        margin: 30px 0 0;
    `}>        
        <div css={css`
            display: grid;
            grid-template-columns: ${right ? 'auto 200px' : '200px auto'};            
            grid-column-gap: 15px;            
            grid-template-areas: 
                'header header'
                ${right ? '\'description image\'' : '\'image description\''};
            @media(max-width: ${breakpoints['tablet']}) {
                grid-template-columns: 1fr;                
                grid-template-areas:
                    'header'
                    'image'
                    'description';
            }
        `}>
            <div css={css`
                grid-area: header;
                @media(max-width: ${breakpoints['tablet']}) {
                    text-align: center;                    
                }
            `}>
                <H3>{title}</H3>
            </div>
            <div css={css`
                grid-area: image;
                @media(max-width: ${breakpoints['tablet']}) {
                    text-align: center;
                    margin-bottom: 30px;
                }
            `}>
                <img 
                    css={css`
                        width: 200px;
                        height: 300px;
                    `} 
                    src={imageUrl}
                />
                <div>
                    <A href={purchaseUrl}>
                        Purchase at IndieBound
                    </A>
                </div>
            </div>
            <div css={css`
                grid-area: description
            `}>
                <P>
                    {children}
                </P>
            </div>            
        </div>
    </div>    
)

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