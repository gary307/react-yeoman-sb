import React, { Component } from 'react';
import './<%= className %>.scss';

class <%= title %> extends Component {
    render() {
        const { colour, title } = this.props;
        return (
            <div className="<%= className %>">
                <h1><%= title %></h1>
            </div>
        );
    }
}

export default <%= title %>;

