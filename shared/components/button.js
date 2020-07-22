/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Link from 'next/link'

export default function Button({href, color, hoverColor, children}) {
    return (<Link href={href} passHref>
        <a css={css`
            color: ${color};
            border: 1px solid ${color};
            display: inline-block;
            font-family: D-DIN-Exp,sans-serif;
            font-weight: 400;
            text-transform: uppercase;
            font-size: 15px;
            letter-spacing: 2px;
            background: ${hoverColor};
            background: linear-gradient(to right, ${color} 50%, ${hoverColor} 50%);
            background-size: 200% 100%;
            background-position:right bottom;
            text-decoration: none;    
            padding: 12px 20px;
            position: relative;    
            transition: all .3s;
            &:hover {
                color: ${hoverColor};
                background-position:left bottom;
            }
        `}
        >
            {children}
        </a>
    </Link>)
}