/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'
import Link from 'next/link'
import { colors } from '../styles'

const Button = styled('a')`
    color: ${props => props.color};
    border: 1px solid ${props => props.color};
    display: inline-block;
    font-family: D-DIN-Exp,sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 15px;
    letter-spacing: 2px;
    background: linear-gradient(to right, ${props => props.color} 50%, transparent 50%);
    background-size: 200% 100%;
    background-position:right bottom;
    text-decoration: none;
    padding: 12px 20px;
    position: relative;
    transition: all .3s;
    cursor: pointer;
    &:hover {
        color: ${props => props.hoverColor};
        background-position:left bottom;
    }
`
export const LinkButton = (props) => (
    <Link href={props.href} passHref>
        <Button {...props}>
            {props.children}
        </Button>
    </Link>
)

const InputButton = Button.withComponent('input')

export const SubmitButton = (props) => (
    <InputButton
        type='submit'
        css={css`
            background: transparent;
            &:hover {
                color: ${props.hoverColor};
                background-color: ${props.color};
            }
        `}
        {...props}
    />
)

export const SocialMediaButton = ({ type, href }) => (
    <a href={href}
        css={css`
            display: inline-block;
            text-decoration: none;
            width: 50px;
            height: 50px;
            border: none;
            border-radius: 25px;
            margin: 0;
            color: transparent;
            text-indent: -9999px;
            background: ${colors['black']} no-repeat 50% 50%;
            background-image: url(/images/${type}-icon.png);
            &:hover {
                background-color: ${colors['red']}
            }
        `}
    />)

