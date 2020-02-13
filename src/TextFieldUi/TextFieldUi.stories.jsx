/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
import React from 'react';
import TextFieldUi from 'src/TextFieldUi';
import { withKnobs } from '../../.storybook/helper';

/**
 * Main story
 * */
export default {
  title: 'TextFieldUi',
  decorators: withKnobs,
};

/**
 * Stories
 * */
export const DefaultView = () => {
  return (
    <TextFieldUi
      name="firstname"
      placeholder="Placeholder"
      htmlFor="firstname"
    />
  );
};

export const HoverState = () => {
  return (
    <TextFieldUi
      name="firstname"
      placeholder="Placeholder"
      htmlFor="firstname"
      state="hover"
    />
  );
};
