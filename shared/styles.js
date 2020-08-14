import { css, Global } from '@emotion/core'

export const breakpoints = {
    'phone': '375px',
    'tablet': '768px',
    'desktop': '992px',
    'large-desktop': '1200px'
}

export const colors = {
    red: '#db382f',
    white: '#fff',
    lighterGray: '#ccc',
    lightGray: '#b8b7ad',
    gray: '#494949',
    darkGray: '#212529',
    black: '#000'
  }

export const navBarHeight = {
    desktop: '95px',
    mobile: '64px'
}

const headerStyle = css`
    font-family: 'SourceSerifPro';
    font-weight: 900;
    letter-spacing: 0;
`

export const globalStyles = (
    <Global
        styles={css`
            html,body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,input,textarea,p,blockquote,th,td {
              margin:0;
              padding:0;
            }

            body {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
              font-size: 1rem;
              font-weight: 400;
              line-height: 1.5;
              color: ${colors['darkGray']};
              text-align: left;
              background-color: ${colors['white']};
            }

            html {
              font-family: sans-serif;
              line-height: 1.15;
            }

            *,
            *::before,
            *::after {
              box-sizing: border-box;
            }

            @font-face {
              font-family: SourceSerifPro;
              src: url("/fonts/SourceSerifPro-Regular.otf") format("opentype");
            }

            @font-face {
              font-family: SourceSerifPro;
              font-weight: bold;
              src: url("/fonts/SourceSerifPro-Bold.otf") format("opentype");
            }

            @font-face {
              font-family: SourceSerifPro;
              font-style: italic;
              src: url("/fonts/SourceSerifPro-It.otf") format("opentype");
            }

            @font-face {
              font-family: SourceSerifPro;
              font-weight: bold;
              font-style: italic;
              src: url("/fonts/SourceSerifPro-BoldIt.otf") format("opentype");
            }

            @font-face {
              font-family: SourceSerifPro;
              font-weight: 900;
              src: url("/fonts/SourceSerifPro-Black.otf") format("opentype");
            }

            @font-face {
              font-family: SourceSerifPro;
              font-weight: 900;
              font-style: italic;
              src: url("/fonts/SourceSerifPro-BlackIt.otf") format("opentype");
            }

            @font-face {
              font-family: D-DIN;
              src: url("/fonts/D-DIN.otf") format("opentype");
            }

            @font-face {
              font-family: D-DIN;
              font-weight: bold;
              src: url("/fonts/D-DIN-Bold.otf") format("opentype");
            }

            @font-face {
              font-family: D-DIN;
              font-style: italic;
              src: url("/fonts/D-DIN-It.otf") format("opentype");
            }

            @font-face {
              font-family: D-DIN-Exp;
              src: url("/fonts/D-DINExp.otf") format("opentype");
            }

            @font-face {
              font-family: D-DIN-Exp;
              font-weight: bold;
              src: url("/fonts/D-DINExp-Bold.otf") format("opentype");
            }

            @font-face {
              font-family: D-DIN-Exp;
              font-style: italic;
              src: url("/fonts/D-DINExp-Italic.otf") format("opentype");
            }

            a {
                display: inline-block;
                color: ${colors['black']};
                text-decoration: none;
                border-bottom: 1px solid ${colors['red']};
                &:focus, &:hover {
                    color: ${colors['red']};
                    text-decoration: none;
                }
            }

            hr {
                margin-top: 1rem;
                margin-bottom: 1rem;
                border: 0;
                border-top: 1px solid rgba(0, 0, 0, .1);
            }

            strong {
                font-weight: bold;
            }

            h1 {
                ${headerStyle}
                margin: 0rem 0 2rem;
                font-size: 36px;
                line-height: 42px;
                @media (min-width: ${breakpoints['desktop']}) {
                    font-size: 48px;
                    line-height: 52px;
                }
            }

            h2 {
                ${headerStyle}
                margin: 3rem 0 1rem;
                font-size: 30px;
                line-height: 36px;
            }

            h3 {
                ${headerStyle}
                margin: 3rem 0 1rem 0;
                font-size: 24px;
                line-height: 30px;
                font-weight: bold;
            }

            h4 {
                ${headerStyle}
                margin: 2rem 0 1rem 0;
                font-size: 18px;
                line-height: 24px;
                font-weight: bold;
            }

            p {
                font-family: 'D-DIN-Exp', sans-serif;
                font-size: 19px;
                line-height: 30px;
                margin: 0 0 1rem;
                font-weight: lighter;
                color: ${colors['gray']};
                margin: 0 0 1rem;
            }

            label {
                font-family: 'D-DIN-Exp', sans-serif;
                font-weight: bold;
                text-transform: uppercase;
                font-size: 15px;
                letter-spacing: 2px;
                color: ${colors['black']};
            }

            ul {
                font-family: D-DIN-Exp,sans-serif;
                font-size: 19px;
                line-height: 30px;
                margin: 0 0 1rem;
                font-weight: lighter;
                color: #494949;
                list-style: none;
                padding-inline-start: 40px;
            }

            li {
                margin: 0 0 1rem;
                display: list-item;
                &:before {
                    content: "\\2022";
                    color: ${colors['red']};
                    font-size: 24px;
                    font-weight: 700;
                    display: inline-block;
                    width: 40px;
                    margin-left: -40px;
                }
            }
        }
    `}/>
)