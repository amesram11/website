/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import Link from 'next/link'

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
    
