/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Content, Section } from '../shared/components/content-layout'
import Layout from '../shared/components/layout'

const PressBlock = ({ url, publication, date, description }) => (
    <p>
        <a href={url}>
            <em>{publication}</em>, <strong>{date}</strong>
        </a>: "{description}"
    </p>
)

const Press = () => (
    <Layout
        featureImage={'/images/press-banner.jpg'}
        featureText='Press'
    >
        <Section>
            <Content>
                <p>
                    <em>Notable news and commentary featuring New Consensus. For media inquiries, please contact <a href='press@newconsensus.com'>press@newconsensus.com</a>.</em>
                </p>
                <PressBlock
                    url='https://www.fastcompany.com/90365788/the-green-new-deal-could-change-the-way-america-builds-heres-how'
                    publication='Fast Company'
                    date='June 24, 2019'
                    description='The Green New Deal could change the way America builds—here’s how'
                />
            </Content>
        </Section>
    </Layout>
)

export default Press