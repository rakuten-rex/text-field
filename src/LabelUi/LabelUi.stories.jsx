/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
import React from 'react';
import LabelUi from 'src/LabelUi';
import { cssVarsToLegacy, withKnobs } from '../../.storybook/helper';
import ThemeProps from './themeProps';

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

export const FocusAndActiveState = () => (
  <LabelUi label="Label" state="active" />
);

/**
 * Custom Theme support
 * */

function Theme() {
  const { themeLabelDefaultText } = ThemeProps();

  const customStyle = {
    '--rex-text-field-label-theme-text': themeLabelDefaultText,
  };

  return {
    customStyle,
    customStyleHtml: cssVarsToLegacy(customStyle, LabelUi),
  };
}

export const WithThemeReactAndCSSVars = () => {
  const { customStyle } = Theme();

  return <LabelUi style={customStyle} label="Label" />;
};

export const WithThemeHTMLAndLegacyCSS = () => {
  const { customStyleHtml } = Theme();

  return (
    <>
      <style>{customStyleHtml}</style>
      <LabelUi label="Label" />
    </>
  );
};
