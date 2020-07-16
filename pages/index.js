/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import Layout from '../components/layout'

const Header = styled('div')`
  height: 80vh;
  background-size: cover;
  background-image: url("/images/feature-banner.jpeg")
`

const Home = () => (  
  <Layout>
    <Header></Header>
  </Layout>
)

export default Home
