import React, { Component } from 'react';
import './Header.scss';
import PropTypes from 'prop-types';

export class Header extends Component {
    render() {
        return (
            <div
                className="rta-header"
                style={{
                    backgroundColor: this.props.backgroundColor,
                    color: this.props.color
                }}
            >
                <h1>React testing app</h1>
            </div>
        );
    }
}

Header.propTypes = {
    /** background Color of header */
    backgroundColor: PropTypes.string.required,

    /** background Color of header */
    color: PropTypes.string
};

Header.defaultProps = {
    backgroundColor: 'black',
    color: 'white'
};

export default Header;
