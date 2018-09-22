import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from "gatsby"

const Header = (props) => (
  <header className="header">
    <div className="header__inner">
      <div className="header__center">
        <div className="ufo--placeholder"></div>
        <h1 className="header__title">{ props.title || props.data.site.siteMetadata.defaultTitle }</h1>
        <span className="header__subtitle">{ props.subtitle || props.data.site.siteMetadata.defaultDescription }</span>
        <button
          className="readmore__button"
          onClick={props.readMoreOnClick}
        >
          Read more
          <svg className="readmore__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 11"><g fill="none" fillRule="evenodd"><g fill="#FFF" fillRule="nonzero"><g><path d="M16.8 2.923l-7.825 7.875c-.134.135-.292.202-.475.202s-.34-.067-.475-.202L.2 2.923C.067 2.788 0 2.627 0 2.44c0-.19.067-.35.2-.484L1.95.202C2.086.067 2.244 0 2.427 0c.182 0 .34.067.474.202l5.6 5.643L14.1.202c.133-.135.292-.202.474-.202.183 0 .34.067.475.202l1.75 1.754c.133.134.2.295.2.483 0 .187-.067.348-.2.483z" /></g></g></g></svg>
        </button>
      </div>
      <div className="header__readmore">

      </div>
    </div>
  </header>
)

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  readMoreOnClick: PropTypes.func.isRequired,
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        defaultTitle: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default (props) => (
  <StaticQuery
    query={graphql`
      query HeaderQuery {
        site {
          siteMetadata {
            defaultTitle
            defaultDescription
          }
        }
      }
    `}
    render={data => <Header data={data} {...props} />}
  />
)
