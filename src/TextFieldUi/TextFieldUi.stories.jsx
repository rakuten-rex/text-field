/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
import React from 'react';
import TextFieldUi from 'src/TextFieldUi';
import { boolean } from '@storybook/addon-knobs';
import { cssVarsToLegacy, withKnobs } from '../../.storybook/helper';
import ThemeProps from './themeProps';
import TexiFieldCommonProps, { StateProps } from './props';

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

export const Error = () => {
  return (
    <TextFieldUi
      name="firstname"
      placeholder="Placeholder"
      htmlFor="firstname"
      state="error"
    />
  );
};

export const Valid = () => {
  return (
    <TextFieldUi
      name="firstname"
      placeholder="Placeholder"
      htmlFor="firstname"
      state="valid"
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

export const WithDynamicProps = () => {
  const {
    name,
    placeholder,
    htmlFor,
    state,
    disabled,
    className,
  } = TexiFieldCommonProps();

  return (
    <TextFieldUi
      className={className}
      name={name}
      placeholder={placeholder}
      htmlFor={htmlFor}
      state={state}
      disabled={disabled}
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
    themeErrorBorder,
    themeErrorPlaceholder,
    themeErrorText,
    themeValidBorder,
    themeValidPlaceholder,
    themeValidText,
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
    '--rex-text-field-theme-error-text': themeErrorText,
    '--rex-text-field-theme-error-border': themeErrorBorder,
    '--rex-text-field-theme-error-placeholder': themeErrorPlaceholder,
    '--rex-text-field-theme-valid-text': themeValidText,
    '--rex-text-field-theme-valid-border': themeValidBorder,
    '--rex-text-field-theme-valid-placeholder': themeValidPlaceholder,
  };

  return {
    customStyle,
    customStyleHtml: cssVarsToLegacy(customStyle, TextFieldUi),
  };
}

export const WithThemeReactAndCSSVars = () => {
  const { customStyle } = Theme();
  const disabled = boolean('Disabled', false, 'Theme Disabled');
  const { state } = StateProps();

  return (
    <TextFieldUi
      style={customStyle}
      name="firstname"
      placeholder="Placeholder"
      htmlFor="firstname"
      disabled={disabled}
      state={state}
    />
  );
};

export const WithThemeHTMLAndLegacyCSS = () => {
  const { customStyleHtml } = Theme();
  const disabled = boolean('Disabled', false, 'Theme Disabled');
  const { state } = StateProps();

  return (
    <>
      <style>{customStyleHtml}</style>
      <TextFieldUi
        name="firstname"
        placeholder="Placeholder"
        htmlFor="firstname"
        disabled={disabled}
        state={state}
      />
    </>
  );
};
