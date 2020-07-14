/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import { mobileBreakpoint } from './styles'
import { push as BurgerMenu } from 'react-burger-menu'

const menuStyles = css`
    background-color: #DB382F;   
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const DesktopMenu = styled('div')`
    ${menuStyles}
    height: 95px;
    @media (max-width: ${mobileBreakpoint}) {
        display: none;
    }
`

const MobileMenu = styled('div')`
    ${menuStyles}
    background-color: #DB382F;   
    height: 64px;
    @media (min-width: ${mobileBreakpoint}) {
        display: none;
    }
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
    @media (max-width: ${mobileBreakpoint}) {
        width: 150px;
        height: 66px;
        bottom: -6px;
    }
`

const burgerStyles = {
    bmBurgerButton: {
        top: '20px',
        right: '20px',
        position: 'fixed',
        width: '30px',
        height: '25px',
    },
    bmBurgerBars: {
      background: '#fff',
      height: '3px'
    },
    bmBurgerBarsHover: {
      background: '#fff'
    },
    bmCrossButton: {
      height: '30px',
      width: '30px'
    },
    bmCross: {
      background: '#fff'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
      top: '0px'
    },
    bmMenu: {
      background: '#373a47',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'inline-block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)',
      width: '100%',
      height: '100%'
    }
  }

export default function Layout({ children }) {
    return (
        <div id="container">
            <div css={css`
                @media (min-width: ${mobileBreakpoint}) {
                    display: none;
                }
            `}>
                <BurgerMenu styles={burgerStyles}  pageWrapId={"content"} outerContainerId={"container"} right>
                    <a id="home" className="menu-item" href="/">Home</a>
                </BurgerMenu>
            </div>
            <div id="content">
                <MobileMenu>
                    <Logo></Logo>
                </MobileMenu>
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
        </div>
    )
}