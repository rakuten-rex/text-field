/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
import React from 'react';
import TextFieldLabel from 'src/TextFieldLabel';
import { withKnobs } from '../../.storybook/helper';

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
      id="age"
      name="firstname"
      placeholder="Placeholder"
      htmlFor="firstname"
      label="Label"
      labelId="labelId"
    />
  );
};

export const FocusAndActiveState = () => {
  return (
    <TextFieldLabel
      id="age"
      name="firstname"
      placeholder="Placeholder"
      htmlFor="firstname"
      label="Label"
      labelId="labelId"
      state="active"
    />
  );
};
