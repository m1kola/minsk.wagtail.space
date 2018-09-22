import React from 'react'
import PropTypes from 'prop-types'
import VisibilitySensor from 'react-visibility-sensor'

class UFOPlaceholder extends React.Component {
    constructor(props) {
        super(props);
        this.selfRef = React.createRef();
    }

    moveUFOHere() {
        const {x, y} = this.selfRef.current.getBoundingClientRect()
        this.props.moveUFO(x, window.pageYOffset + y)
    }

    render() {
        let style = {}
        if (this.props.style) {
            style = {
                position: 'absolute',
                ...this.props.style,
            }
        }

        return (
            <VisibilitySensor onChange={(isVisible) => isVisible && this.moveUFOHere()}>
                <div ref={this.selfRef} className="ufo--placeholder" style={style}></div>
            </VisibilitySensor>
        )
    }
}

UFOPlaceholder.propTypes = {
    moveUFO: PropTypes.func.isRequired,
    style: PropTypes.shape({
        top: PropTypes.number,
        left: PropTypes.number,
        right: PropTypes.number,
        bottom: PropTypes.number,
    }),
}

export default UFOPlaceholder
