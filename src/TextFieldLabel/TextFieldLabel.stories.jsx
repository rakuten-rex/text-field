/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, color, select } from '@storybook/addon-knobs';
import TextFieldLabel from 'src/TextFieldLabel';
import { cssVarsToLegacy, withKnobs } from '../../.storybook/helper';

/**
 * Main story
 * */
export default {
  title: 'TextFieldLabel',
  decorators: withKnobs,
};

/**
 * Stories
 * */
export const DefaultView = () => {
  return (
    <TextFieldLabel
      name="firstname"
      placeholder="Placeholder"
      htmlFor="firstname"
      label="Label"
    />
  );
};
