import React, { Component } from 'react';
import './Hero.scss';

const Hero = ({ title, body }) => {
    return (
        <div class="hero">
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    );
};

Hero.defaultProps = {
    title: 'this is a titlke',
    body: 'this is some body copy'
};

export default Hero;
