import React from 'react';

import { action } from '@storybook/addon-actions';

import Switch from '.';

export default {
  title: 'Switch',
};


export function basic() {
  return <Switch onChange={action('onChange')} />;
}

export function checked() {
  return <Switch checked onChange={action('onChange')} />;
}
