import { addParameters } from '@storybook/react';
import { create } from '@storybook/theming';


// https://storybook.js.org/docs/configurations/theming/
const theme = create({
  base: 'light',
  brandTitle: 'Github',
  url: 'https://github.com/milkmidi/vue-examples',
});

// https://storybook.js.org/docs/configurations/options-parameter/
// Customize the UI a bit
addParameters({
  options: {
    theme,
    showPanel: true,
    panelPosition: 'bottom',
  },
});
