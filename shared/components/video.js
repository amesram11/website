/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { breakpoints } from '../styles'
const Video = (({src, width, height}) => (
    <div css={css`
        width: 336px;
        height: 189px;
        @media (min-width: ${breakpoints['tablet']}) {
            width: 720px;
            height: 405px;
        }
        @media (min-width: ${breakpoints['desktop']}) {
            width: ${width || '720px'};
            height: ${height || '405px'};
        }
    `}>
        <iframe
            width="100%"
            height="100%"
            src={src}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        />
    </div>
))

export default Video