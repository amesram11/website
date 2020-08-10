import Head from 'next/head'
import { withRouter } from 'next/router'

const logo = '/images/favicon.png'
const baseUrl = 'https://newconsensus.com'
const Meta = ({ title, description, type, image, extraTags, router}) => {
    let cardImage = image || logo
    let otherTags = null
    if (extraTags) {
        otherTags = Object.keys(extraTags).map((name) => (
            <meta name={name} key={name} content={extraTags[name]} />
        ))
    }

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="og:title" property="og:title" content={title} />
            <meta name="og:type" content={type || 'website'}/>
            <meta name="og:image" content={cardImage}/>
            <meta name="og:locale" content="en_US" />
            <meta name="og:description" property="og:description" content={description} />
            <meta name="og:site_name" content="New Consensus" />
            <meta name="og:url" content={baseUrl + router.pathname} />
            <meta name="twitter:card" content='summary' />
            <meta name="twitter:site" content="New Consensus" />
            <meta name="twitter:title" content={title } />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={cardImage} />
            {otherTags}
            <link rel="icon" type="image/png" href={logo} />
            <link rel="apple-touch-icon" href={logo} />
        </Head>
    )
}
export default withRouter(Meta)