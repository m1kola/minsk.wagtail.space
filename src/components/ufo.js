import React from 'react'
import PropTypes from 'prop-types'

import wagtailUfo from '../assets/img/wagtail-ufo.svg'

const UFO = (props) => {
    let style = {}
    if (props.top > 0 || props.left > 0) {
        style = {
            opacity: 1,
            transform: `translate(${props.top}px, ${props.left}px)`
        }
    }

    return (
        <div className="ufo" style={style}>
            <img src={wagtailUfo} alt="UFO" />
        </div>
    )
}

UFO.propTypes = {
    top: PropTypes.number,
    left: PropTypes.number,
}

export default UFO
