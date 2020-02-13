/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
import React from 'react';
import LabelUi from 'src/LabelUi';
import { withKnobs } from '../../.storybook/helper';

/**
 * Main story
 * */
export default {
  title: 'LabelUi',
  decorators: withKnobs,
};

/**
 * Stories
 * */
export const DefaultView = () => <LabelUi label="Label" />;
