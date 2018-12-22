import { Route, Links } from 'react-router-dom';
import React, { Component } from 'react';
import Home from './views/Home/Home';

// const pages = require.context('./', true, /\.js$/);

// function loadPages() {
//     pages.keys().forEach(filename => pages(filename));
// }

// console.log('pages', pages());

class Routing extends Component {
    render() {
        return (
            <div>
                <Route path="/" component={Home} />
            </div>
        );
    }
}

export default Routing;
