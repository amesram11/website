/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Link from 'next/link'

export default function Button({href, children}) {
    return (<Link href={href} passHref>
        <a css={css`
            color: #fff;
            border: 1px solid #fff;
            display: inline-block;
            font-family: D-DIN-Exp,sans-serif;
            font-weight: 400;
            text-transform: uppercase;
            font-size: 15px;
            letter-spacing: 2px;
            background: #000;
            background: linear-gradient(to right, #fff 50%, #000 50%);
            background-size: 200% 100%;
            background-position:right bottom;
            text-decoration: none;    
            padding: 12px 20px;
            position: relative;    
            transition: all .3s;
            &:hover {
                color: #000;
                background-position:left bottom;
            }
        `}
        >
            {children}
        </a>
    </Link>)
}