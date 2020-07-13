/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import { mobileBreakpoint } from './styles'
import { slide as BurgerMenu } from 'react-burger-menu'

const DesktopMenu = styled('div')`
    margin: 0;
    padding: 0;
    background-color: #DB382F;
    height: 95px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
const MenuItem = ({ children }) => {
    return (
        <a css={css`
            text-transform: uppercase;
            color: #fff;
            text-decoration: none;
            padding: 0 12px;
            margin: 0;
            font-size: 19px;
            font-family: 'D-DIN-Exp', sans-serif;
            font-weight: 400;
            display: inline-block;
            flex: 0 1 auto;      
        `}>
            {children}
        </a>
    )
}

const Logo = styled('div')`
    display: block;
    margin-left: 2.5em;
    margin-right: 2.5em;
    border: none;
    background: url("/images/logo-white.png") no-repeat 50% 50%;
    background-size: 100%;
    color: rgba(255, 255, 255, 0);
    position: relative;
    width: 209px;
    height: 92px;
    bottom: -22px;
`

export default function Layout({ children }) {
    return (
        <div>
            <DesktopMenu>
                <MenuItem>Memos</MenuItem>
                <MenuItem>Projects</MenuItem>
                <MenuItem>Library</MenuItem>
                <MenuItem><Logo></Logo></MenuItem>
                <MenuItem>Press</MenuItem>
                <MenuItem>About</MenuItem>
                <MenuItem>Donate</MenuItem>
            </DesktopMenu>            
            {children}
        </div>
    )
}