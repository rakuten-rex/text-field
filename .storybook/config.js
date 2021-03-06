import { configure, addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import rexTheme from './theme/rexTheme';

addParameters({
  options: {
    theme: rexTheme,
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  backgrounds: [
    { name: 'dark-grey', value: '#686868' },
    { name: 'grey (default)', value: '#f8f8f8', default: true },
    { name: 'light-grey', value: '#fafafa' },
    { name: 'white', value: '#fff' },
  ],
});

// automatically import all files ending in *.stories.js
configure([
  require.context('../src/TextFieldLabel', true, /\.stories\.jsx$/),
  require.context('../src/TextFieldHelper', true, /\.stories\.jsx$/),
  require.context('../src/TextFieldLabelHelper', true, /\.stories\.jsx$/),
  require.context('../src/LabelUi', true, /\.stories\.jsx$/),
  require.context('../src/HelperUi', true, /\.stories\.jsx$/),
  require.context('../src/TextFieldUi', true, /\.stories\.jsx$/),
  require.context('../src', true, /\.stories\.jsx$/, )
], module);
