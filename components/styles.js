import { keyframes, css, Global } from '@emotion/core'
import styled from '@emotion/styled'

export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        padding: 3rem 1rem;
        margin: 0;
        background: papayawhip;
        min-height: 100%;
        font-family: Helvetica, Arial, sans-serif;
        font-size: 24px;
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
        src: url("/fonts/D-DINExp-It.otf") format("opentype");
      }
    `}
  />
)

export const mobileBreakpoint = '992px';