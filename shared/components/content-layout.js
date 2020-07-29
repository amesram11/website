/** @jsx jsx */
import styled from '@emotion/styled'
import { breakpoints } from '../styles'

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

export const Grid = styled('div')`
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

export const Content = styled('div')`
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