/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'
import Link from 'next/link'
import { push as BurgerMenu } from 'react-burger-menu'
import { breakpoints, colors, navBarHeight } from '../styles'
import { LinkButton, SocialMediaButton, SubmitButton } from './buttons'
import { BigSection, Grid, Section } from './content-layout'

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

const menuItems = [{
    label: 'Blog'
}, {
    label: 'Projects',
    subMenu: [{
        label: 'Biotechnology and the Green New Deal',
        url: '/projects/biotechnology-and-the-green-new-deal'
    },
    {
        label: 'Pandemic Economics',
        url: '/projects/pandemic-economics'
    }, {
        label: 'Green New Deal',
        url: '/projects/green-new-deal'
    }]
}, {
    label: 'Library'
}, {
    label: 'Press'
}, {
    label: 'About',
}, {
    label: 'Donate',
}]

function menuItemtoURL(menuItem) {
    return menuItem.url || '/' + menuItem.label.toLowerCase().replace(/\s/g, '-')
}

/* React components for the layout */

const menuStyles = css`
    background-color: ${colors['red']};
    display: flex;
    flex-direction: row;
    align-items: center;
`
const DesktopMenu = styled('div')`
    ${menuStyles}
    justify-content: space-around;
    height: ${navBarHeight.desktop};
    @media (max-width: ${breakpoints['desktop']}) {
        display: none;
    }
`

const DesktopMenuSection = styled('div')`
    ${menuStyles}
    height: 100%;
    flex: 1;
`

const MobileMenu = styled('div')`
    ${menuStyles}
    justify-content: center;
    height: ${navBarHeight.mobile};
    @media (min-width: ${breakpoints['desktop']}) {
        display: none;
    }
`

const Logo = () => (
    <Link href='/' passHref>
        <a css={
            css`
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
        `} />
    </Link>
)

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
            margin-top: ${show ? '80px' : '90px'};
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
                    <Link
                        href={menuItemtoURL(menuItem)}
                        key={menuItem.label}
                    passHref>
                        <a
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
                        </a>
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
                        color: ${colors['white']};
                        border-bottom: 5px solid ${colors['white']};
                    }
            `} onMouseEnter={hoverHandler}>
                {label}
            </a>
        </Link>
    )
}

const MobileSubmenuItem = ({label, url}) => {
    return (
        <Link href={url} passHref>
            <a
                css={css`
                    border: none;
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

const MobileMenuItem = ({label, url, key, subMenu}) => {
    return (
        <div css={css`
            padding: 0 12px;
            margin: 0 0 35px;
        `}>
            <MenuItem
                label={label}
                url={url}
            />
            {subMenu ? subMenu.map((item) => <MobileSubmenuItem key={'mobile-' + item.label} label={item.label} url={menuItemtoURL(item)} />) : null}
        </div>
    )
}

const Header = ({featureImage, children, initSize}) => (
    <header css={css`
        min-height: 250px;
        width: 100%;
        background:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${featureImage});
        background-repeat: no-repeat;
        background-size: cover;
        @media (min-width: ${breakpoints['desktop']}) {
            min-height: calc(${initSize}vh - ${navBarHeight.desktop});
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
                padding: 35px 12px 0px 12px;
                position: relative;
                vertical-align: middle;
                text-align: center;
                height: 100%;
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
        <h1 css={css`
            margin-bottom: 1rem;
        `}>
            {title}
        </h1>
        <p css={css`
            color: ${colors['lighterGray']};
        `}>{description}</p>
        <LinkButton href={url} color={colors['white']} hoverColor={colors['black']}>Learn More ⟶</LinkButton>
    </div>
)

const SignupBox = () => (
    <BigSection css={css`
        background-color: ${colors['red']};
        color: ${colors['white']};
`}>
        <Grid css={css`
            grid-template-areas:
                'a'
                'b';
            @media (min-width: ${breakpoints['desktop']}) {
                grid-template-areas:
                '. . a a a . b b b b b b';
            }
        `}>
            <div css={css`
                grid-area: a;
                @media(min-width: ${breakpoints['desktop']}) {
                    text-align: right;
                }
            `}>
                <h1 css={css`
                    margin-bottom: 1rem;
                `}>
                    We can't afford to keep the status quo.
                </h1>
            </div>
            <div css={css`
                grid-area: b;
                margin-top: 3rem;
            `}>
            <p
                css={css`
                    color: ${colors['white']};
                    font-size: 16px;
                    line-height: 26px;
                    font-weight: 400;
                `}
            >Get updates from the New Consensus</p>
            <SubscribeForm color={colors['white']} backgroundColor={colors['red']} />
            </div>
        </Grid>
    </BigSection>
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
                    color: ${this.props.color};
                    margin: 0 0.5rem 0 0;
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
    <Section css={css`
        font-size: 14px;
        font-family: D-DIN;
        font-stretch: expanded;
        padding: 5rem 15px 5rem 15px;
        @media (min-width: ${breakpoints['desktop']}) {
            padding: 5rem 15px 5rem 15px;
        }
`}>
        <Grid
            css={css`
                text-align: center;
                grid-template-areas:
                    'b'
                    'a'
                    'c';
                @media (min-width: ${breakpoints['desktop']}) {
                    grid-template-areas:
                        'a a a a b b b b c c c c';
                }
        `}>
            <div css={css`
                grid-area: a;
                margin-bottom: 1.5rem;
                @media(min-width: ${breakpoints['desktop']}) {
                    text-align: left;
                }
            `}>
                © New Consensus 2019<br />
                <a href='/privacy-policy'>
                    Privacy Policy
                </a>
            </div>
            <div css={css`
                grid-area: b;
                margin-bottom: 1.5rem;
            `}>
                <div css={css`
                    display: inline-block;
                    margin-left: 15px;
                `}>
                    <SocialMediaButton
                        type='twitter'
                        href='https://twitter.com/newconsensus/'
                    />
                </div>
            </div>
            <div css={css`
                grid-area: c;
                margin-bottom: 1.5rem;
                @media(min-width: ${breakpoints['desktop']}) {
                    text-align: right;
                }
            `}>
                <LinkButton href='/donate' color={colors['red']} hoverColor={colors['white']}>
                    Donate ⟶
                </LinkButton>
            </div>
        </Grid>
    </Section>
)


export default function Layout({ featureImage, featureBoxInfo, featureText, tall, children }) {
    let desktopNav = menuItems.map((item) => <DesktopMenuItem
        key={'desktop' + item.label}
        url={menuItemtoURL(item)}
        label={item.label}
        subMenu={item.subMenu}/>
    )

    let desktopNavLeft = desktopNav.slice(0, 3)
    let desktopNavRight = desktopNav.slice(3)

    const mobileNav = menuItems.map((item) => <MobileMenuItem
        key={'mobile-' + item.label}
        label={item.label}
        url={menuItemtoURL(item)}
        subMenu={item.subMenu}/>
    )

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
                <DesktopMenu>
                    <DesktopMenuSection css={css`
                        justify-content: flex-end
                    `}>
                        {desktopNavLeft}
                    </DesktopMenuSection>
                    <DesktopMenuSection css={css`
                        justify-content: center
                    `}>
                        <Logo />
                    </DesktopMenuSection>
                    <DesktopMenuSection css={css`
                        justify-content: flex-start
                    `}>
                        {desktopNavRight}
                    </DesktopMenuSection>
                </DesktopMenu>
                {featureImage && (
                    <Header featureImage={featureImage} initSize={tall ? 95 : 60}>
                        {featureText && (
                            <h1
                                css={css`
                                    width: 100%;
                                    display: flex;
                                    flex-direction: column;
                                    justify-content: center;
                                    align-items: center;
                                    color: ${colors['white']}
                                `}>
                                {featureText}
                            </h1>
                        )}
                        {featureBoxInfo && (
                            <div css={css`
                                display: flex;
                                flex-direction: column;
                                justify-content: flex-end;
                                align-items: flex-end;
                                width: 100%;
                                @media(max-width:${breakpoints['desktop']}) {
                                    display: none;
                                }
                            `}>
                                <FeatureBox {...featureBoxInfo} />
                            </div>
                        )}
                    </Header>
                )}
                {featureBoxInfo && (
                    <div css={css`
                        margin-top: -2rem;
                        @media(min-width:${breakpoints['desktop']}) {
                            display: none;
                        }
                    `}>
                        <FeatureBox {...featureBoxInfo} />
                    </div>
                )}
                {children}
                <SignupBox />
                <Footer />
            </div>
        </div>
    )
}