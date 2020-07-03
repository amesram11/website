/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import { mobileBreakpoint } from './styles'
import { slide as BurgerMenu } from 'react-burger-menu'

const MenuBar = styled('div')`
    font-family: 'D-DIN', sans-serif;
    font-weight: bold;
    font-size: 15px;
    background-color: #DB382F;
    z-index: 10;
    height: 64px;
    @media (min-width:${mobileBreakpoint}) {
        height: 95px;
    }
`

const DesktopMenu = styled('ul')`
    text-align: center;
    padding: 30px;
    margin-left: 0;
    margn-right: 0;
    @media (min-width: 992px) {
        padding: 0;
    }
`
const MenuItem = ({ children }) => {
    return (
        <li css={css`
            text-transform: uppercase;
            padding: 0 12px;
            margin: 0 0 20px;
            @media (min-width: 992px) {
                margin: 0
            }
            display: inline-block;       
        `}>
            <a css={css`
                display: inline-block;
                color: #fff;
                text-decoration: none;
                padding: 0;
                border-bottom: 5px solid transparent;
            `}>
                {children}
            </a>
        </li>
    )
}

const Logo = styled('div')`
    display: block;
    width: 150px;
    height: 66px;
    margin: 0 auto;
    border: none;
    background: url("/images/logo-white.png") no-repeat 50% 50%;
    background-size: 100%;
    color: rgba(255, 255, 255, 0);
    position: relative;
    bottom: -6px;
    @media (min-width: ${mobileBreakpoint}) {
        width: 209px;
        height: 92px;
        bottom: -22px;
    }
`

export default function Layout({ children }) {
    return (
        <div>
            <MenuBar>
                <DesktopMenu>
                    <MenuItem>About</MenuItem>
                    <MenuItem>Press</MenuItem>
                    <MenuItem>Library</MenuItem>
                    <MenuItem>Projects</MenuItem>
                    <MenuItem>Blog</MenuItem>
                </DesktopMenu>
            </MenuBar>
            {children}
        </div>
    )
}