import React from 'react'
import NotFoundGif from './404.gif'
import Layout from "../components/layout"

const NotFoundPage = props => (
  <Layout location={props.location}>
    <h1>Not found</h1>
    <p>404. Nothing.</p>
    <div>
      <img src={NotFoundGif} alt='White noise'></img>
    </div>
  </Layout>
)

export default NotFoundPage
