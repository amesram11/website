/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import Layout from '../shared/components/layout'
import {Section, Column, Row, H1, P} from '../shared/components/tags'
import Button from '../shared/components/button'
import {breakpoints} from '../shared/styles'

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
            margin-right: auto;
            margin-left: auto;
            width: 100%;
            max-width: 540px;
            margin-top: 30px;
            @media(min-width: ${breakpoints['phone']}) {
                max-width: 540px;
            }
            @media(min-width: ${breakpoints['tablet']}) {
                max-width: 720px;
            }
            @media(min-width: ${breakpoints['desktop']}) {
                max-width: 960px;
            }
            @media(min-width: ${breakpoints['large-desktop']}) {
                max-width: 1140px;
            }
        `}>
            <div css={css`            
                display: grid;
                width: 100%;
                grid-template-columns: repeat(12, 1fr);
                grid-template-rows: 1fr 1fr;  
                grid-column-gap: 30px;
                grid-row-gap: 4rem;
                @media (min-width: ${breakpoints['desktop']}) {
                    grid-row-gap: 6rem;
                    padding-top: 6rem;
                }
                padding-left: 15px;
                padding-right: 15px;
                padding-top: 4rem;                     
            `}>
                <div css={css`
                    grid-column-start: 2;
                    grid-column-end: 7;
                    grid-row-start: 1;
                    grid-row-end: 1;    
                    text-align: right;       
                `}>
                    <H1>
                        A new consensus is emerging.
                    </H1>
                    <P>
                        Drawing on successful examples from America's own history, as well as advanced economies around the world, new consensus thinkers are rediscovering how government can catalyze the transition to a green economy, close racial and regional wealth and income gaps, spearhead innovation and research, kickstart new high-wage industries, and more.
                    </P>
                    <Button href='/about' color={'#DB382F'} hoverColor={'#fff'}>About Us ⟶</Button>    
                </div>
                <div css={css`
                    grid-column-start: 7;
                    grid-column-end: 13;
                    grid-row-start: 1;
                    grid-row-end: 1;
                    text-align: center;
                `}>
                    <img css={css`
                        width: 422px;
                        height: 422px;
                    `} src='/images/worldview.png' />      
                </div>        
            </div>
        </div>
    </Layout>
)

export default Home
