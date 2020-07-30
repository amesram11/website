/** @jsx jsx */
import styled from '@emotion/styled'
import { breakpoints } from '../styles'

export default Grid = styled('div')`
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