import React, { Component } from 'react';
import './Home.scss';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';

class Home extends Component {
    render() {
        const { colour, title } = this.props;
        return (
            <div>
                <Header />
                <Hero title="Home page" body="this is the home page" />
            </div>
        );
    }
}

export default Home;
