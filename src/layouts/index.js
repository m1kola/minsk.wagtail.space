import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'


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
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
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
        </Helmet>
        {header}
        {children()}
      </div>
    )
  }
}

export default Template

export const query = graphql`
  query LayoutTemplate {
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
`
