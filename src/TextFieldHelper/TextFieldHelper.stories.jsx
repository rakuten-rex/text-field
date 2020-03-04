/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import TextFieldHelper from 'src/TextFieldHelper';
import TexiFieldCommonProps from '../TextFieldUi/props';
import TextFieldThemeProps from '../TextFieldUi/themeProps';
import HelperCommonProps from '../HelperUi/props';
import HelperThemeProps from '../HelperUi/themeProps';
import { cssVarsToLegacy, withKnobs } from '../../.storybook/helper';

/**
 * Main story
 * */
export default {
  title: 'Text Field Helper',
  decorators: withKnobs,
};

/**
 * Stories
 * */
export const DefaultView = () => {
  return (
    <TextFieldHelper
      id="age"
      name="firstname"
      placeholder="Placeholder"
      htmlFor="firstname"
      helper="Helper Text"
      labelId="labelId"
    />
  );
};

export const Disabled = () => {
  return (
    <TextFieldHelper
      id="age"
      name="firstname"
      placeholder="Placeholder"
      htmlFor="firstname"
      helper="Helper Text"
      labelId="labelId"
      disabled
    />
  );
};

export const FocusAndActiveState = () => {
  return (
    <TextFieldHelper
      id="age"
      name="firstname"
      placeholder="Placeholder"
      htmlFor="firstname"
      helper="Helper Text"
      labelId="labelId"
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
  const { helper } = HelperCommonProps();

  return (
    <TextFieldHelper
      className={className}
      name={name}
      placeholder={placeholder}
      htmlFor={htmlFor}
      state={state}
      helper={helper}
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
  } = TextFieldThemeProps();
  const {
    themeHelperDefaultText,
    themeHelperDisabledText,
    themeHelperHoverText,
    themeHelperActiveText,
  } = HelperThemeProps();

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
    '--rex-text-field-helper-theme-text': themeHelperDefaultText,
    '--rex-text-field-helper-theme-hover-text': themeHelperHoverText,
    '--rex-text-field-helper-theme-active-text': themeHelperActiveText,
    '--rex-text-field-helper-theme-disabled-text': themeHelperDisabledText,
  };

  return {
    customStyle,
    customStyleHtml: cssVarsToLegacy(customStyle, TextFieldHelper),
  };
}

export const WithThemeReactAndCSSVars = () => {
  const { customStyle } = Theme();
  const disabled = boolean('Disabled', false, 'Theme Disabled');

  return (
    <TextFieldHelper
      style={customStyle}
      id="age"
      name="firstname"
      placeholder="Placeholder"
      htmlFor="firstname"
      helper="Helper Text"
      labelId="labelId"
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
      <TextFieldHelper
        id="age"
        name="firstname"
        placeholder="Placeholder"
        htmlFor="firstname"
        helper="Helper Text"
        labelId="labelId"
        disabled={disabled}
      />
    </>
  );
};
