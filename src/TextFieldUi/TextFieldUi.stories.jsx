/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
import React from 'react';
import TextFieldUi from 'src/TextFieldUi';
import { boolean } from '@storybook/addon-knobs';
import { cssVarsToLegacy, withKnobs } from '../../.storybook/helper';
import ThemeProps from './themeProps';

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

export const Disabled = () => {
  return (
    <TextFieldUi
      name="firstname"
      placeholder="Placeholder"
      htmlFor="firstname"
      disabled
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
    themeHoverBorder,
    themeHoverPlaceholder,
    themeHoverText,
    themeActiveBorder,
    themeActivePlaceholder,
    themeActiveText,
    themeDisabledBorder,
    themeDisabledPlaceholder,
    themeDisabledText,
  } = ThemeProps();

  const customStyle = {
    '--rex-text-field-theme-text': themeDefaultText,
    '--rex-text-field-theme-border': themeDefaultBorder,
    '--rex-text-field-theme-placeholder': themeDefaultPlaceholder,
    '--rex-text-field-theme-hover-text': themeHoverText,
    '--rex-text-field-theme-hover-border': themeHoverBorder,
    '--rex-text-field-theme-hover-placeholder': themeHoverPlaceholder,
    '--rex-text-field-theme-active-text': themeActiveText,
    '--rex-text-field-theme-active-border': themeActiveBorder,
    '--rex-text-field-theme-active-placeholder': themeActivePlaceholder,
    '--rex-text-field-theme-disabled-border': themeDisabledBorder,
    '--rex-text-field-theme-disabled-placeholder': themeDisabledPlaceholder,
    '--rex-text-field-theme-disabled-text': themeDisabledText,
  };

  return {
    customStyle,
    customStyleHtml: cssVarsToLegacy(customStyle, TextFieldUi),
  };
}

export const WithThemeReactAndCSSVars = () => {
  const { customStyle } = Theme();
  const disabled = boolean('Disabled', false, 'Theme Disabled');

  return (
    <TextFieldUi
      style={customStyle}
      name="firstname"
      placeholder="Placeholder"
      htmlFor="firstname"
      disabled={disabled}
    />
  );
};

export const WithThemeHTMLAndLegacyCSS = () => {
  const { customStyleHtml } = Theme();
  const disabled = boolean('Disabled', false, 'Theme Disabled');

  return (
    <>
      <style>{customStyleHtml}</style>
      <TextFieldUi
        name="firstname"
        placeholder="Placeholder"
        htmlFor="firstname"
        disabled={disabled}
      />
    </>
  );
};
