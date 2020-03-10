/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import HelperUi from 'src/HelperUi';
import CommonProps, { StateProps } from './props';
import ThemeProps from './themeProps';
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

export const FocusAndActiveState = () => {
  return <HelperUi helper="Helper Text" state="active" />;
};

export const DisabledState = () => {
  return <HelperUi helper="Helper Text" disabled />;
};

export const ErrorState = () => {
  return <HelperUi helper="Helper Text" state="error" />;
};

export const ValidState = () => {
  return <HelperUi helper="Helper Text" state="valid" />;
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
    themeHelperErrorText,
    themeHelperValidText,
  } = ThemeProps();

  const customStyle = {
    '--rex-text-field-helper-theme-text': themeHelperDefaultText,
    '--rex-text-field-helper-theme-disabled-text': themeHelperDisabledText,
    '--rex-text-field-helper-theme-hover-text': themeHelperHoverText,
    '--rex-text-field-helper-theme-error-text': themeHelperErrorText,
    '--rex-text-field-helper-theme-valid-text': themeHelperValidText,
    '--rex-text-field-helper-theme-active-text': themeHelperActiveText,
  };

  return {
    customStyle,
    customStyleHtml: cssVarsToLegacy(customStyle, HelperUi),
  };
}

export const ReactTheme = () => {
  const { customStyle } = Theme();
  const { state } = StateProps();
  const disabled = boolean('Disabled', false, 'Theme Disabled');

  return (
    <HelperUi
      helper="Helper Text"
      state={state}
      style={customStyle}
      disabled={disabled}
    />
  );
};

export const ReactThemeAndAllStates = () => {
  const { customStyle } = Theme();

  return (
    <table>
      <tbody>
        <tr>
          <td>
            <HelperUi style={customStyle} helper="Default" />
          </td>
          <td>
            <HelperUi
              style={customStyle}
              helper="Focus/Active"
              state="active"
            />
          </td>
          <td>
            <HelperUi style={customStyle} helper="Disabled" disabled />
          </td>
          <td>
            <HelperUi style={customStyle} helper="Error" state="error" />
          </td>
          <td>
            <HelperUi style={customStyle} helper="Valid" state="valid" />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export const HTMLTheme = () => {
  const { customStyleHtml } = Theme();
  const { state } = StateProps();
  const disabled = boolean('Disabled', false, 'Theme Disabled');

  return (
    <>
      <style>{customStyleHtml}</style>
      <HelperUi helper="Helper Text" state={state} disabled={disabled} />
    </>
  );
};

export const HTMLThemeAndAllStates = () => {
  const { customStyleHtml } = Theme();

  return (
    <>
      <style>{customStyleHtml}</style>
      <table>
        <tbody>
          <tr>
            <td>
              <HelperUi helper="Default" />
            </td>
            <td>
              <HelperUi helper="Focus/Active" state="active" />
            </td>
            <td>
              <HelperUi helper="Disabled" disabled />
            </td>
            <td>
              <HelperUi helper="Error" state="error" />
            </td>
            <td>
              <HelperUi helper="Valid" state="valid" />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
