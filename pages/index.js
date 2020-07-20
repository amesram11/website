/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import Layout from '../shared/components/layout'
import {Section, H1, P} from '../shared/components/tags'
import Button from '../shared/components/button'

const Home = () => (  
    <Layout 
        featureImage={'/images/feature-banner.jpeg'}
        featureBoxInfo={{
            title: 'What is the Green New Deal?',
            description: 'How can we stop climate breakdown and ensure economic growth for all? The Green New Deal uses policy and spending tools to confront the most important problems facing America.',
            url: '/green-new-deal'
        }}
    >        
        <Section>
            <H1>
                A new consensus is emerging.
            </H1>
            <P>
                Drawing on successful examples from America's own history, as well as advanced economies around the world, new consensus thinkers are rediscovering how government can catalyze the transition to a green economy, close racial and regional wealth and income gaps, spearhead innovation and research, kickstart new high-wage industries, and more.
            </P>
            <Button href='/about'>About Us ⟶</Button>
        </Section>
    </Layout>
)

export default Home
