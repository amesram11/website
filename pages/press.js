/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Content, Section } from '../shared/components/content-layout'
import Date from '../shared/components/date'
import Layout from '../shared/components/layout'
import Meta from '../shared/components/meta'
import { getSortedData } from '../shared/data'

const PressBlock = ({ url, publication, date, title }) => (
    <p>
        <a href={url}>
            <em>{publication}</em>, <strong><Date dateString={date} /></strong>
        </a>: "{title}"
    </p>
)

const description = 'Notable news and commentary featuring New Consensus.'
const featureImage = '/images/press-banner.jpg'

const Press = ({ data }) => (
    <Layout
        featureImage={featureImage}
        featureText='Press'
    >
        <Meta
            title='Press'
            description={description}
            type='website'
            image={featureImage}
        />
        <Section>
            <Content>
                <p>
                    <em>{description} For media inquiries, please contact <a href='press@newconsensus.com'>press@newconsensus.com</a>.</em>
                </p>
                {data.map(({ url, publication, date, title }) => (
                    <PressBlock
                        key={title}
                        url={url}
                        publication={publication}
                        date={date}
                        title={title}
                    />
                ))}

            </Content>
        </Section>
    </Layout>
)

export default Press

export async function getStaticProps() {
    const data = await getSortedData('press', 'date', true)
    return {
        props: {
            data
        }
    }
}