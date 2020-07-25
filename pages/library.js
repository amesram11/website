/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import Layout from '../shared/components/layout'
import Link from 'next/link'
import { breakpoints } from '../shared/styles'
import { Section, Strong, H3, HR, P, A, UL, LI, SingleColumnContent} from '../shared/components/tags'
import { SocialMediaButton } from '../shared/components/buttons'

const LibraryBlock = ({ title, imageUrl, description, purchaseLink }) => ()

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
            </SingleColumnContent>
        </Section>
    </Layout>
)

export default Library