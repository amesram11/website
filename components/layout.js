/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import { mobileBreakpoint } from './styles'
import { push as BurgerMenu } from 'react-burger-menu'
import Link from 'next/link'

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

const menuStyles = css`
    background-color: #DB382F;   
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const menuItems = [{
    label: 'Memos'
}, {
    label: 'Projects',
    subMenu: [{
        label: 'Green New Deal',
    }, {
        label: 'Pandemic Economics'
    }]
}, {
    label: 'Library'
}, {
    label: 'Press'
}, {
    label: 'About'
}, {
    label: 'Donate'
}]    

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

const DropdownMenu = ({subMenu, show}) => {    
    return (
        <div css={css`
            display: block;
            position: absolute;
            z-index: 1000;
            top: 0;
            left: 0;
            text-align: left;
            background-color: #fff;        
            width: 220px;
            margin-top: ${show ? '45px' : '55px'};
            transition: opacity .2s ease-out, margin .4s ease-out;
            padding: 0px 0px 15px 0px;  
            opacity: ${show ? 1.0 : 0.0};            
            background-clip: padding-box;
            border: 1px solid rgba(0,0,0,.15);
            border-radius: 0.25rem;
            &:before {
                content: '';
                width: 0;
                height: 0;
                position: relative;
                top: -27px;
                left: 28px;
                border-left: 10px solid transparent;
                border-right: 10px solid transparent;
                border-bottom: 10px solid #fff;
            }
        `}>
            {subMenu.map((menuItem) => (
                    <Link href={labelToURL(menuItem.label)} passHref>
                        <a 
                            css={css`
                                color: #000;
                                &:hover {
                                    background: #ccc;
                                }
                                display: block;
                                padding: 12px 20px;
                                border: none;                        
                                text-decoration: none;                                
                                font-size: 14px;                      
                    `   }>
                            {menuItem.label}
                        </a>
                    </Link>                
            ))}
        </div>
    )
}

class MenuItem extends React.Component {
    state = {
        showDropdown: false
    }

    handleMouseEnter = () => {
        if (this.props.subMenu)
            this.setState({showDropdown: true})
    }

    handleMouseLeave = () => {
        if (this.props.subMenu)
            this.setState({showDropdown: false})
    }

    render() {
        return (
            <div css={css`
                flex: 0 1 auto;
                padding: 0 12px;
                position: relative;
                height: 100%;
                text-align: center;
                margin-top: 75px;
            `} onMouseLeave={this.handleMouseLeave}>
                <Link href={this.props.url} passHref>
                    <a css={css`
                        text-transform: uppercase;
                        text-decoration: none;                   
                        color: #fff;                    
                        padding: 0;
                        margin: 0;
                        font-size: 19px;                                           
                        border-bottom: 5px solid transparent;
                        &:hover {
                            border-bottom: 5px solid #fff;
                        }
                    `} onMouseEnter={this.handleMouseEnter}>
                        {this.props.label}
                    </a>
                </Link>
                {this.props.subMenu ? <DropdownMenu subMenu={this.props.subMenu} show={this.state.showDropdown}/> : null}
            </div>
        )
    }
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

function labelToURL(label) {
    return label.toLowerCase().replace(' ', '-')
}

export default function Layout({ children }) {
    let desktopNav = menuItems.map((item) => <MenuItem key={item.label} url={labelToURL(item.label)} label={item.label} subMenu={item.subMenu}/>)
    desktopNav.splice(3, 0, <Logo key="logo" />)
    return (
        <div 
            id="container"
        >
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
                <DesktopMenu
                    css={css`
                        font-weight: 400;
                    `}
                >
                    {desktopNav}
                </DesktopMenu> 
                {children}
            </div>
        </div>
    )
}