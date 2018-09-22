import React from 'react'
import PropTypes from 'prop-types'

import wagtailUfo from '../assets/img/wagtail-ufo.svg'

const UFO = (props) => (
    <div className="ufo" style={{
        opacity: props.top > 0 || props.left > 0 ? 1 : 0,
        transform: `translate(${props.top}px, ${props.left}px)`
    }}>
        <img src={wagtailUfo} alt="UFO" />
    </div>
)

UFO.propTypes = {
    top: PropTypes.number,
    left: PropTypes.number,
}

export default UFO
