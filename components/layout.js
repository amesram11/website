/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import { mobileBreakpoint } from './styles'
import { slide as BurgerMenu } from 'react-burger-menu'

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
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#fff'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%'
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
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }

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
            <MobileMenu>
                <Logo></Logo>
                <BurgerMenu styles={burgerStyles} right>
                    <a id="home" className="menu-item" href="/">Home</a>
                </BurgerMenu>  
            </MobileMenu>        
            {children}
        </div>
    )
}