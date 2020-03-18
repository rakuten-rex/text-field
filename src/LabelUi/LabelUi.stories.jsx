/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import LabelUi from 'src/LabelUi';
import CommonProps, { StateProps } from './props';
import ThemeProps from './themeProps';
import { cssVarsToLegacy, withKnobs } from '../../.storybook/helper';

/**
 * Main story
 * */
export default {
  title: 'Label UI',
  decorators: withKnobs,
};

/**
 * Stories
 * */
export const Default = () => {
  return <LabelUi label="Label" />;
};

export const HoverState = () => {
  return <LabelUi label="Label" state="hover" />;
};

export const FocusAndActiveState = () => {
  return <LabelUi label="Label" state="active" />;
};

export const DisabledState = () => {
  return <LabelUi label="Label" disabled />;
};

export const ErrorState = () => {
  return <LabelUi label="Label" state="error" />;
};

export const ValidState = () => {
  return <LabelUi label="Label" state="valid" />;
};

export const WithDynamicProps = () => {
  const { label, htmlFor, state, disabled } = CommonProps();

  return (
    <LabelUi
      label={label}
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
    themeLabelDefaultText,
    themeLabelDisabledText,
    themeLabelHoverText,
    themeLabelActiveText,
    themeLabelErrorText,
    themeLabelValidText,
  } = ThemeProps();

  const customStyle = {
    '--rex-text-field-label-theme-text': themeLabelDefaultText,
    '--rex-text-field-label-theme-disabled-text': themeLabelDisabledText,
    '--rex-text-field-label-theme-hover-text': themeLabelHoverText,
    '--rex-text-field-label-theme-error-text': themeLabelErrorText,
    '--rex-text-field-label-theme-valid-text': themeLabelValidText,
    '--rex-text-field-label-theme-active-text': themeLabelActiveText,
  };

  return {
    customStyle,
    customStyleHtml: cssVarsToLegacy(customStyle, LabelUi),
  };
}

export const ReactTheme = () => {
  const { customStyle } = Theme();
  const { state } = StateProps();
  const disabled = boolean('Disabled', false, 'Theme Disabled');

  return (
    <LabelUi
      label="Label"
      state={state}
      disabled={disabled}
      style={customStyle}
    />
  );
};

export const ReactThemeAllStates = () => {
  const { customStyle } = Theme();

  return (
    <table>
      <tbody>
        <tr>
          <td>
            <LabelUi style={customStyle} label="Default" />
          </td>
          <td>
            <LabelUi style={customStyle} label="Hover" state="hover" />
          </td>
          <td>
            <LabelUi style={customStyle} label="Focus/Active" state="active" />
          </td>
          <td>
            <LabelUi style={customStyle} label="Disabled" disabled />
          </td>
          <td>
            <LabelUi style={customStyle} label="Error" state="error" />
          </td>
          <td>
            <LabelUi style={customStyle} label="Valid" state="valid" />
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
      <LabelUi label="Label" state={state} disabled={disabled} />
    </>
  );
};

export const HTMLThemeAllStates = () => {
  const { customStyleHtml } = Theme();

  return (
    <>
      <style>{customStyleHtml}</style>
      <table>
        <tbody>
          <tr>
            <td>
              <LabelUi label="Default" />
            </td>
            <td>
              <LabelUi label="Hover" state="hover" />
            </td>
            <td>
              <LabelUi label="Focus/Active" state="active" />
            </td>
            <td>
              <LabelUi label="Disabled" disabled />
            </td>
            <td>
              <LabelUi label="Error" state="error" />
            </td>
            <td>
              <LabelUi label="Valid" state="valid" />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
