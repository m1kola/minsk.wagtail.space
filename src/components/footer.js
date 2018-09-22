import React from 'react'
import PropTypes from 'prop-types'

import UFOPlaceholder from './ufo--placeholder'

const Footer = (props) => (
    <footer className="footer">
        <div className="footer__inner">
            <div className="fourdigits-flag"></div>
            <UFOPlaceholder moveUFO={props.moveUFO} style={{
                top: 50,
                left: 100,
            }} />
        </div>
    </footer>
)

Footer.propTypes = {
    moveUFO: PropTypes.func.isRequired,
}

export default Footer
