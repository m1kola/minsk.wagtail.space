import React from 'react'
import PropTypes from 'prop-types'

const UFOPlaceholder = (props) => {
    let style = {}
    if (props) {
        style = {
            position: 'absolute',
            ...props,
        }
    }

    return (
        <div className="ufo--placeholder" style={style}></div>
    )
}

UFOPlaceholder.propTypes = {
    top: PropTypes.number,
    left: PropTypes.number,
    right: PropTypes.number,
    bottom: PropTypes.number,
}

export default UFOPlaceholder
