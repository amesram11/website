/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { breakpoints, colors } from '../styles'

export default function ContentBlock({ titleBlock, imageBlock, right, children}) {
    return (
        <div css={css`
            border-top: 1px solid ${colors['lightGray']};
            margin: 30px 0 0;
        `}>
            <div css={css`
                display: grid;
                grid-template-columns: ${right ? `auto max-content` : `max-content auto`};
                grid-column-gap: 15px;
                grid-template-areas:
                    'header header'
                    ${right ? '\'description image\'' : '\'image description\''};
                @media(max-width: ${breakpoints['tablet']}) {
                    grid-template-columns: 1fr;
                    grid-template-areas:
                        'header'
                        'image'
                        'description';
                }
            `}>
                <div css={css`
                    grid-area: header;
                    @media(max-width: ${breakpoints['tablet']}) {
                        text-align: center;
                    }
                `}>
                    <h3>{titleBlock}</h3>
                </div>
                <div css={css`
                    grid-area: image;
                    @media(max-width: ${breakpoints['tablet']}) {
                        margin-left: auto;
                        margin-right: auto;
                        margin-bottom: 30px;
                    }
                `}>
                        {imageBlock}
                </div>
                <div css={css`
                    grid-area: description
                `}>
                    <p>
                        {children}
                    </p>
                </div>
            </div>
        </div>
    )
}
