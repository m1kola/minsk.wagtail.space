import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import Helmet from 'react-helmet'

// Favicons
import appleTouchIcon from '../assets/img/favicons/apple-touch-icon.png'
import favicon32 from '../assets/img/favicons/favicon-32x32.png'
import favicon16 from '../assets/img/favicons/favicon-16x16.png'

// Layout images
import wagtailUfo from '../assets/img/wagtail-ufo.svg'
import planet1 from '../assets/img/planet1.svg'
import planet2 from '../assets/img/planet2.svg'
import planet3 from '../assets/img/planet3.svg'
import planet4 from '../assets/img/planet4.svg'
import planet5 from '../assets/img/planet5.svg'
import planet6 from '../assets/img/planet6.svg'
import rocket from '../assets/img/rocket.svg'

import '../assets/scss/main.scss'


const Layout = props => {
  const { location, children, data } = props
  const absoluteURL = props.data.site.siteMetadata.siteUrl + location.pathname

  return (
    <div className="root">
      <Helmet
        defaultTitle={data.site.siteMetadata.defaultTitle}
        titleTemplate={'%s | ' + data.site.siteMetadata.defaultTitle}
      >
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={data.site.siteMetadata.socialMedia.twitter} />
        <meta name="twitter:creator" content={data.site.siteMetadata.socialMedia.twitter} />
        <meta name="twitter:title" content={data.site.siteMetadata.defaultTitle} />
        <meta name="twitter:description" content={data.site.siteMetadata.defaultDescription} />

        <meta property="og:title" content={data.site.siteMetadata.defaultTitle} />
        <meta property="og:description" content={data.site.siteMetadata.defaultDescription} />
        <meta property="og:url" content={absoluteURL} />
        <meta property="og:type" content="website" />

        <meta name="description" content={data.site.siteMetadata.defaultDescription} />

        <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
        <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
        <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />

        <meta name="theme-color" content="#27292f" />
      </Helmet>

      <div className="ufo"><img src={wagtailUfo} alt="UFO" /></div>
      <img src={planet1} className="planet planet--earth" />
      <img src={planet2} className="planet planet--rings" />
      <img src={planet3} className="planet planet--red" />
      <img src={planet4} className="planet planet--behindred" />
      <img src={rocket} className="rocket" />
      <img src={planet5} className="planet planet--blue" />
      <img src={planet6} className="planet planet--darkblue" />

      {children}
    </div>
  )
}


export default (props) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            siteUrl
            defaultTitle
            defaultDescription
            socialMedia {
              twitter
            }
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
)
