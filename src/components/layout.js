import React from 'react'
import { StaticQuery, Link, graphql } from "gatsby"
import Helmet from 'react-helmet'

import appleTouchIcon from '../assets/img/favicons/apple-touch-icon.png'
import favicon32 from '../assets/img/favicons/favicon-32x32.png'
import favicon16 from '../assets/img/favicons/favicon-16x16.png'

import '../assets/scss/main.scss'


class Template extends React.Component {
  render() {
    const { location, children, data } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    const absoluteURL = this.props.data.site.siteMetadata.siteUrl + location.pathname;

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            {data.site.siteMetadata.title}
          </Link>
        </h1>
      )
    } else {
      header = (
      <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            {data.site.siteMetadata.title}
          </Link>
        </h3>
      )
    }

    return (
      <div class="root">
        <Helmet
          defaultTitle={data.site.siteMetadata.title}
          titleTemplate={'%s | ' + data.site.siteMetadata.title}
        >
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content={data.site.siteMetadata.socialMedia.twitter} />
          <meta name="twitter:creator" content={data.site.siteMetadata.socialMedia.twitter} />
          <meta name="twitter:title" content={data.site.siteMetadata.title} />
          <meta name="twitter:description" content={data.site.siteMetadata.description} />

          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:description" content={data.site.siteMetadata.description} />
          <meta property="og:url" content={absoluteURL} />
          <meta property="og:type" content="website" />

          <meta name="description" content={data.site.siteMetadata.description} />

          <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
          <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
          <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />

          <meta name="theme-color" content="#27292f" />
        </Helmet>
        {header}
        {children}
      </div>
    )
  }
}


export default (props) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            siteUrl
            title
            description
            socialMedia {
              twitter
            }
          }
        }
      }
    `}
    render={data => <Template data={data} {...props} />}
  />
)
