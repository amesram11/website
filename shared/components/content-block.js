/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { breakpoints, colors } from '../styles'
import { H3, P } from './tags'

export default function ContentBlock({ titleBlock, imageBlock, right, children}) {
    return (
        <div css={css`
            border-top: 1px solid ${colors['lightGray']};
            margin: 30px 0 0;
        `}>        
            <div css={css`
                display: grid;
                grid-template-columns: ${right ? 'auto 200px' : '200px auto'};            
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
                    <H3>{titleBlock}</H3>
                </div>
                <div css={css`
                    grid-area: image;
                    @media(max-width: ${breakpoints['tablet']}) {
                        text-align: center;
                        margin-bottom: 30px;
                    }
                `}>
                        {imageBlock}                    
                </div>
                <div css={css`
                    grid-area: description
                `}>
                    <P>
                        {children}
                    </P>
                </div>            
            </div>
        </div>    
    )
}
