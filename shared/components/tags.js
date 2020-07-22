/** @jsx jsx */
import styled from '@emotion/styled'
import { jsx, css } from '@emotion/core'
import {breakpoints} from '../styles'

export const A = styled('a')`
    display: inline-block;
    color: #000000;
    text-decoration: none;
    border-bottom: 1px solid #DB382F;
    &:focus, &:hover {
        color: #DB382F;
        text-decoration: none;
    }
`

export const Strong = styled('strong')`
    font-weight: bold;
`

export const Section = styled('section')`
    padding: 4rem 0;
    @media (min-width: ${breakpoints['desktop']}) {
        padding: 6rem 0;
    }    
`

export const Row = styled('div')`
    
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
        max-width: 960px;
    }
    @media(min-width: ${breakpoints['large-desktop']}) {
        max-width: 1140px;
    }
`

export const Column = styled('div')`
    margin-left: 15px;
    margin-right: 15px;    
    flex: 0 0 50%;
    max-width: 50%;
`

const headerStyle = css`
    font-family: 'SourceSerifPro';
    font-weight: 900;
    margin: 0 0 1rem;
    letter-spacing: 0;
`

export const H1 = styled('h1')`
    ${headerStyle}
    font-size: 36px;
    line-height: 42px;
    @media (min-width: ${breakpoints['desktop']}) {
        font-size: 48px;
        line-height: 52px;
    }
`

export const H2 = styled('h2')`
    ${headerStyle}
    font-size: 30px;
    line-height: 38px;    
    @media (min-width: ${breakpoints['desktop']}) {
        font-size: 32px;
        line-height: 40px;
    }
`

export const H3 = styled('h3')`
    ${headerStyle}
    font-size: 24px;
    line-height: 30px;
    margin: 0 0 1rem;
    font-weight: bold;
`

export const P = styled('p')`
    font-family: 'D-DIN-Exp', sans-serif;
    font-size: 19px;
    line-height: 30px;
    margin: 0 0 1rem;
    font-weight: lighter;
    color: #494949;
    margin: 0 0 1rem;
`

export const Label = styled('label')`
    font-family: 'D-DIN-Exp', sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 15px;
    letter-spacing: 2px;
    color: #000000;
`

export const Footer = styled('footer')`
    padding: 5rem 0;
    font-family: 'D-DIN';
    font-stretch: expanded;
    font-size: 14px;
`