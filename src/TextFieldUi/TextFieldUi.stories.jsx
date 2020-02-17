/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
import React from 'react';
import TextFieldUi from 'src/TextFieldUi';
import { cssVarsToLegacy, withKnobs } from '../../.storybook/helper';
import ThemeProps from '../TextFieldLabel/themeProps';

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

export const FocusAndActiveState = () => {
  return (
    <TextFieldUi
      name="firstname"
      placeholder="Placeholder"
      htmlFor="firstname"
      state="active"
    />
  );
};

/**
 * Custom Theme support
 * */

function Theme() {
  const {
    themeDefaultBorder,
    themeDefaultPlaceholder,
    themeDefaultText,
    themeActiveBorder,
    themeActivePlaceholder,
    themeActiveText,
  } = ThemeProps();

  const customStyle = {
    '--rex-text-field-theme-border': themeDefaultBorder,
    '--rex-text-field-theme-placeholder': themeDefaultPlaceholder,
    '--rex-text-field-theme-text': themeDefaultText,
    '--rex-text-field-theme-active-text': themeActiveText,
    '--rex-text-field-theme-active-border': themeActiveBorder,
    '--rex-text-field-theme-active-placeholder': themeActivePlaceholder,
  };

  return {
    customStyle,
    customStyleHtml: cssVarsToLegacy(customStyle, TextFieldUi),
  };
}

export const WithThemeReactAndCSSVars = () => {
  const { customStyle } = Theme();

  return (
    <TextFieldUi
      style={customStyle}
      id="age"
      name="firstname"
      placeholder="Placeholder"
      htmlFor="firstname"
      label="Label"
      labelId="labelId"
    />
  );
};

export const WithThemeHTMLAndLegacyCSS = () => {
  const { customStyleHtml } = Theme();

  return (
    <>
      <style>{customStyleHtml}</style>
      <TextFieldUi
        id="age"
        name="firstname"
        placeholder="Placeholder"
        htmlFor="firstname"
        label="Label"
        labelId="labelId"
      />
    </>
  );
};
