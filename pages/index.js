/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import Layout from '../shared/components/layout'

const Home = () => (  
    <Layout 
        featureImage={'/images/feature-banner.jpeg'}
        featureBoxInfo={{
            title: 'What is the Green New Deal?',
            description: 'How can we stop climate breakdown and ensure economic growth for all? The Green New Deal uses policy and spending tools to confront the most important problems facing America.',
            url: '/green-new-deal'
        }}
    >        
        <div css={css`
            width: 400px;
            height: 800px;
            background-color: #ccc
        `}/>
    </Layout>
)

export default Home
