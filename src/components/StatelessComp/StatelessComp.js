import React, { Component } from 'react';
import './statelessComp.scss';

class StatelessComp extends Component {
    render() {
        const { colour, title } = this.props;
        return (
            <div className="statelessComp">
                <h1>StatelessComp</h1>
            </div>
        );
    }
}

export default StatelessComp;
