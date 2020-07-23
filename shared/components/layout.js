/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import { breakpoints, navBarHeight, colors } from '../styles'
import { push as BurgerMenu } from 'react-burger-menu'
import Link from 'next/link'
import {A, P, H1, H2, Section, Row} from './tags'
import {LinkButton, SubmitButton, SocialMediaButton} from './buttons'

const burgerStyles = {
    bmBurgerButton: {
        top: '20px',
        right: '20px',
        position: 'fixed',
        width: '30px',
        height: '25px',
    },
    bmBurgerBars: {
        background: colors['white'],
        height: '3px'
    },
    bmBurgerBarsHover: {
        background: colors['white']
    },
    bmCrossButton: {
        height: '30px',
        width: '30px'
    },
    bmCross: {
        background: colors['white']
    },
    bmMenuWrap: {
        position: 'fixed',
        height: '100%',
        top: '0px'
    },
    bmMenu: {
        background: colors['black'],
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em',
        textAlign: 'center'
    },
    bmMorphShape: {
        fill: colors['black']
    },
    bmItemList: {
        color: colors['lightGray'],
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
    background-color: ${colors['red']};   
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
    label: 'About',
}, {
    label: 'Contact Us',
}]    

function labelToURL(label) {
    return '/' + label.toLowerCase().replace(/\s/g, '-')
}

/* React components for the layout */

const DesktopMenu = styled('div')`
    ${menuStyles}
    height: ${navBarHeight.desktop};    
    @media (max-width: ${breakpoints['desktop']}) {
        display: none;
    }
`

const MobileMenu = styled('div')`
    ${menuStyles}
    background-color: ${colors['red']};   
    height: ${navBarHeight.mobile};
    @media (min-width: ${breakpoints['desktop']}) {
        display: none;
    }
`

const Logo = styled('div')`
    display: block;
    margin-left: 2.5em;
    margin-right: 2.5em;
    border: none;
    background: url("/images/logo-white.png") no-repeat 50% 50%;
    background-size: 100%;
    color: rgba(255, 255, 255, 0);
    width: 150px;
    height: 66px;
    bottom: -6px;
    position: relative;
    @media (min-width: ${breakpoints['desktop']}) {
        width: 209px;
        height: 92px;
        bottom: -22px;
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
            background-color: ${colors['white']};
            width: 220px;
            visibility: ${show ? 'visible' : 'hidden'};
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
                border-bottom: 10px solid ${colors['white']};
            }
        `}>
            {subMenu.map((menuItem) => (
                    <Link href={labelToURL(menuItem.label)} passHref>
                        <A 
                            css={css`
                                color: ${colors['black']};
                                &:hover {
                                    color: ${colors['black']};
                                    background: ${colors['lighterGray']};
                                }
                                display: block;
                                padding: 12px 20px;
                                border: none;                        
                                text-decoration: none;                                
                                font-size: 14px;                      
                    `   }>
                            {menuItem.label}
                        </A>
                    </Link>                
            ))}
        </div>
    )
}

const MenuItem = ({label, url, hoverHandler}) => {
    return (
        <Link href={url} passHref>
            <a
                css={css`                    
                    text-transform: uppercase;
                    text-decoration: none;                   
                    color: ${colors['white']};                    
                    font-size: 19px;                                           
                    border-bottom: 5px solid transparent;
                    &:hover {
                        border-bottom: 5px solid ${colors['white']};
                    }
            `} onMouseEnter={hoverHandler}>
                {label}
            </a>
        </Link>
    )
}

const MobileSubmenuItem = ({label}) => {    
    return (
        <Link href={labelToURL(label)} passHref>
            <a
                css={css`
                    text-decoration: none;     
                    display: block;              
                    color: ${colors['white']};                    
                    font-size: 16px; 
                    margin-top: 15px;                                        
            `}>
                {label}
            </a>
        </Link>
    )
}

const MobileMenuItem = ({label, url, subMenu}) => {
    return (
        <div css={css`
            padding: 0 12px;
            margin: 0 0 35px;
        `}>
            <MenuItem
                label={label}
                url={url}
            />
            {subMenu ? subMenu.map((item) => <MobileSubmenuItem label={item.label} />) : null}
        </div>
    )
}

const Header = ({featureImage, children}) => (
    <header css={css`
        min-height: 250px;
        width: 100%;
        background-size: cover;
        background-image: url(${featureImage});
        @media (min-width: ${breakpoints['desktop']}) {
            min-height: calc(95vh - ${navBarHeight.desktop});            
        }  
        display: flex;              
    `}>
        {children}
    </header>
)

class DesktopMenuItem extends React.Component {
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
                <MenuItem 
                    label={this.props.label}
                    url={this.props.url}
                    hoverHandler={this.handleMouseEnter}
                />
                {this.props.subMenu ? <DropdownMenu subMenu={this.props.subMenu} show={this.state.showDropdown}/> : null}
            </div>
        )
    }
}

const FeatureBox = ({title, description, url}) => (
    <div css={css`
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
        width: 100%;
    `}>
        <div css={css`
            width: 100%;
            padding: 30px;             
            color: ${colors['white']};    
            background-color: ${colors['black']};   
            @media(min-width: ${breakpoints['tablet']}) {                
                padding-left: 120px;
                padding-right: 120px;
            } 
            @media(min-width: ${breakpoints['desktop']}) {
                width: 420px;
                padding-left: 60px;
                padding-right: 60px;
            }
        `}>
            <hr css={css`
                height: 5px;
                background: ${colors['white']};
                margin-bottom: 30px;
            `}/>
            <H2>{title}</H2>
            <P css={css`
                color: ${colors['lighterGray']};
            `}>{description}</P>
            <LinkButton href={url} color={colors['white']} hoverColor={colors['black']}>Learn More ⟶</LinkButton>
        </div>
    </div>
)

const SignupBox = () => (
    <Section css={css`
        background-color: ${colors['red']};
        color: ${colors['white']};
    `}>
        <Row css={css`
            grid-template-areas:
                'a'
                'b';
            @media (min-width: ${breakpoints['desktop']}) {
                grid-template-columns: repeat(12, 1fr);
                grid-template-areas: 
                '. . a a a . b b b b b b'; 
        `}>
            <div css={css`
                grid-area: a;                
                @media(min-width: ${breakpoints['desktop']}) {
                    text-align: right;                              
                }
            `}>
                <H2>We can't afford to keep the status quo.</H2>
            </div>
            <div css={css`
                grid-area: b;
                margin-top: 3rem;              
            `}>
            <P
                css={css`
                    color: ${colors['white']};
                    font-size: 16px;
                    line-height: 26px;
                    font-weight: 400;
                `}
            >Get updates from the New Consensus</P>
            <SubscribeForm color={colors['white']} backgroundColor={colors['red']} />        
            </div>
        </Row>
    </Section>
)

class SubscribeForm extends React.Component {
    constructor(props) {
        super(props);        
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        value: ''
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label css={css`
                    font-family: 'D-DIN-Exp', sans-serif;
                    font-weight: bold;
                    text-transform: uppercase;
                    font-size: 15px;
                    letter-spacing: 2px;  
                    margin: 0 0.5rem 0 0;
                    color: ${this.props.color}                
                `}>
                    Email <br />
                    <input 
                        css={css`
                            border: none;
                            border-bottom: 1px solid ${colors['white']};
                            background: transparent;
                            outline: none;
                            font-size: 15px;
                            line-height: 44px;
                            color: ${this.props.color}                         
                        `}
                        type="email" 
                        value={this.state.value} 
                        onChange={this.handleChange} 
                        required 
                    />
                </label>
                <SubmitButton value="Subscribe" color={this.props.color} hoverColor={this.props.backgroundColor} />
            </form>
        );
    }
}

const Footer = () => (    
    <Section css={
        css`
            font-size: 14px;
            font-family: D-DIN;
            font-stretch: expanded;
            padding: 5rem 0;
            @media (min-width: ${breakpoints['desktop']}) {
                padding: 5rem 0;
            }
        `
    }>
        <Row css={css`
            grid-template-columns: repeat(12, 1fr);
            margin-bottom: 1.5rem;
            grid-template-areas: 
            'a a a a b b b b c c c c';
        `}>
            <div css={css`
                grid-area: a;                             
            `}>
                © New Consensus 2019<br />
                <A href='/privacy-policy'>
                    Privacy Policy
                </A>
            </div>
            <div css={css`
                grid-area: b;
                text-align: center;                          
            `}>
                <SocialMediaButton type='facebook' />
                <SocialMediaButton type='twitter' />
            </div>
            <div css={css`
                grid-area: c; 
                text-align: right;                            
            `}>
                <LinkButton href='/' color={colors['red']} hoverColor={colors['white']}>
                Donate ⟶
                </LinkButton>
            </div>
        </Row>
    </Section>    
)


export default function Layout({ featureImage, featureBoxInfo, featureText, children }) {    
    let desktopNav = menuItems.map((item) => <DesktopMenuItem 
        key={'desktop' + item.label} 
        url={labelToURL(item.label)} 
        label={item.label} 
        subMenu={item.subMenu}/>
    )
    desktopNav.splice(3, 0, <Logo key="logo" />)
        
    const mobileNav = menuItems.map((item) => <MobileMenuItem
        key={'mobile-' + item.label}
        label={item.label}
        url={labelToURL(item.label)}
        subMenu={item.subMenu}/>)
        
    return (
        <div 
            id="container"
        >
            <div css={css`
                @media (min-width: ${breakpoints['desktop']}) {
                    display: none;
                }
            `}>
                <BurgerMenu styles={burgerStyles}  pageWrapId={"content"} outerContainerId={"container"} right>
                    {mobileNav}
                </BurgerMenu>
            </div>
            <div id="content">
                <MobileMenu>
                    <Logo />
                </MobileMenu>
                <DesktopMenu
                    css={css`
                        font-weight: 400;
                    `}
                >
                    {desktopNav}
                </DesktopMenu>
                <div css={css`
                    @media(max-width:${breakpoints['desktop']}) {
                        display: none;
                    }
                `}>
                    <Header featureImage={featureImage}>
                        {featureText ? <div>{featureText}</div> : null}                    
                        {featureBoxInfo ? <FeatureBox {...featureBoxInfo} /> : null}
                    </Header>
                </div>

                <div css={css`
                    @media(min-width:${breakpoints['desktop']}) {
                        display: none;
                    }
                `}>
                    <Header featureImage={featureImage}>
                        {featureText ? <div>{featureText}</div> : null}                                            
                    </Header>
                    {featureBoxInfo ? <FeatureBox {...featureBoxInfo} /> : null}
                </div>
                {children}
                <SignupBox />
                <Footer />
            </div>
        </div>
    )
}