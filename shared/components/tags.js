/** @jsx jsx */
import styled from '@emotion/styled'
import { jsx, css } from '@emotion/core'
import { breakpoints, colors } from '../styles'

export const A = styled('a')`
    display: inline-block;
    color: ${colors['black']};
    text-decoration: none;
    border-bottom: 1px solid ${colors['red']};
    &:focus, &:hover {
        color: ${colors['red']};
        text-decoration: none;
    }
`

export const HR = styled('hr')`
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, .1);
`

export const Strong = styled('strong')`
    font-weight: bold;
`

export const Section = styled('section')`
    width: 100%;
    padding: 2rem 15px 2rem 15px;
    @media(min-width: ${breakpoints['desktop']}) {        
        padding: 3rem 15px 3rem 15px;
    }
`

export const BigSection = styled(Section)`
    padding: 4rem 15px 4rem 15px;
    @media(min-width: ${breakpoints['desktop']}) {
        padding: 6rem 15px 6rem 15px;
    }
`

export const TwelveColumnGrid = styled('div')`
    width: 100%:
    grid-template-columns: 1fr;
    display: grid;
    grid-column-gap: 30px;    
    margin-right: auto;
    margin-left: auto;        
    width: 100%;    
    max-width: 540px;
    @media(min-width: ${breakpoints['phone']}) {        
        max-width: 540px;
    }
    @media(min-width: ${breakpoints['tablet']}) {        
        max-width: 720px;
    }
    @media(min-width: ${breakpoints['desktop']}) {
        grid-template-columns: repeat(12, 1fr);
        max-width: 960px;                
    }
    @media(min-width: ${breakpoints['large-desktop']}) {
        max-width: 1140px;        
    }  
`

export const SingleColumnContent = styled('div')`
    margin-right: auto;
    margin-left: auto;    
    max-width: 540px;
    @media(min-width: ${breakpoints['phone']}) {        
        max-width: 540px;
    }
    @media(min-width: ${breakpoints['tablet']}) {        
        max-width: 720px;
    }
`

const headerStyle = css`
    font-family: 'SourceSerifPro';
    font-weight: 900;
    letter-spacing: 0;
`

export const H1 = styled('h1')`
    ${headerStyle}
    margin: 0 0 2rem;
    font-size: 36px;
    line-height: 42px;
    @media (min-width: ${breakpoints['desktop']}) {
        font-size: 48px;
        line-height: 52px;
    }
`

export const H2 = styled('h2')`
    ${headerStyle}
    margin: 0 0 1rem;
    font-size: 36px;
    line-height: 42px;
    @media (min-width: ${breakpoints['desktop']}) {
        font-size: 48px;
        line-height: 52px;
    }
`

export const H3 = styled('h3')`
    ${headerStyle}
    margin: 3rem 0 1rem 0;
    font-size: 24px;
    line-height: 30px;
    font-weight: bold;
`

export const P = styled('p')`
    font-family: 'D-DIN-Exp', sans-serif;
    font-size: 19px;
    line-height: 30px;
    margin: 0 0 1rem;
    font-weight: lighter;
    color: ${colors['gray']};
    margin: 0 0 1rem;
`

export const Label = styled('label')`
    font-family: 'D-DIN-Exp', sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 15px;
    letter-spacing: 2px;
    color: ${colors['black']};
`

export const Footer = styled('footer')`
    padding: 5rem 0;
    font-family: 'D-DIN';
    font-stretch: expanded;
    font-size: 14px;
`

export const UL = styled('ul')`
    font-family: D-DIN-Exp,sans-serif;
    font-size: 19px;
    line-height: 30px;
    margin: 0 0 1rem;
    font-weight: lighter;
    color: #494949;
    list-style: none;
    padding-inline-start: 40px;
`

export const LI = styled('li')`
    margin: 0 0 1rem;
    display: list-item;
    &:before {
        content: "\\2022";
        color: ${colors['red']};
        font-size: 24px;
        font-weight: 700;
        display: inline-block;
        width: 40px;
        margin-left: -40px;
    }
`