/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
import React from 'react';
import { select, boolean } from '@storybook/addon-knobs';
import HelperUi from 'src/HelperUi';
import CommonProps from './props';
import ThemeProps from '../TextFieldUi/themeProps';
import { cssVarsToLegacy, withKnobs } from '../../.storybook/helper';

/**
 * Main story
 * */
export default {
  title: 'Helper UI',
  decorators: withKnobs,
};

/**
 * Stories
 * */
export const Default = () => {
  return <HelperUi helper="Helper Text" />;
};

export const Disabled = () => {
  return <HelperUi helper="Helper Text" disabled />;
};

export const ErrorState = () => {
  return <HelperUi helper="Helper Text" state="error" />;
};

export const ValidState = () => {
  return <HelperUi helper="Helper Text" state="valid" />;
};

export const ActiveState = () => {
  return <HelperUi helper="Helper Text" state="active" />;
};

export const WithDynamicProps = () => {
  const { helper, state, disabled } = CommonProps();

  return <HelperUi helper={helper} state={state} disabled={disabled} />;
};

/**
 * Custom Theme support
 * */

function Theme() {
  const {
    themeHelperDefaultText,
    themeHelperDisabledText,
    themeHelperHoverText,
    themeHelperActiveText,
  } = ThemeProps();

  const customStyle = {
    '--rex-text-field-helper-theme-text': themeHelperDefaultText,
    '--rex-text-field-helper-theme-disabled-text': themeHelperDisabledText,
    '--rex-text-field-helper-theme-hover-text': themeHelperHoverText,
    // '--rex-text-field-helper-theme-error-text': themeHelperErrorText,
    // '--rex-text-field-helper-theme-valid-text': themeHelperValidText,
    '--rex-text-field-helper-theme-active-text': themeHelperActiveText,
  };

  return {
    customStyle,
    customStyleHtml: cssVarsToLegacy(customStyle, HelperUi),
  };
}

export const WithThemeReactAndCSSVars = () => {
  const { customStyle } = Theme();
  const options = {
    Default: null,
    Active: 'active',
  };
  const state = select('State', options, 'null', 'Theme Props');
  const disabled = boolean('Disabled', false, 'Theme Props');

  return (
    <HelperUi
      helper="Helper Text"
      state={state}
      style={customStyle}
      disabled={disabled}
    />
  );
};

export const WithThemeHTMLAndLegacyCSS = () => {
  const { customStyleHtml } = Theme();
  const options = {
    Default: null,
    Active: 'active',
  };
  const state = select('State', options, 'null', 'Theme Props');
  const disabled = boolean('Disabled', false, 'Theme Props');

  return (
    <>
      <style>{customStyleHtml}</style>
      <HelperUi helper="Helper Text" state={state} disabled={disabled} />
    </>
  );
};
