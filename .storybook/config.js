import {
    configure
} from '@storybook/react';

import {
    setDefaults
} from 'react-storybook-addon-props-combinations';

const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

setDefaults({
    // overwrite global defaults here
})

configure(loadStories, module);
