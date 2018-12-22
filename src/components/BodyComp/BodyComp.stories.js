import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import BodyComp from './BodyComp.js';
import { withKnobs, select } from '@storybook/addon-knobs';
import withPropsCombinations from 'react-storybook-addon-props-combinations';

const stories = storiesOf('Components', module);

stories.addDecorator(withKnobs);

stories.add(
    'Standard usage',
    withPropsCombinations(
        // provide your component
        BodyComp,
        // and an object with the shape
        // {propName: arrayOfPossiblevalues}
        {
            colour: ['red', 'blue'],
            title: ['button 1']
        },
        {
            CombinationRenderer: ({ Component, props, options }) => (
                <Component {...props} />
            )
        }
    )
);
