/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
import React, { useRef, useEffect } from 'react';
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
export const Default = () => {
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

export const DisabledState = () => {
  return (
    <TextFieldUi
      name="firstname"
      placeholder="Placeholder"
      htmlFor="firstname"
      disabled
    />
  );
};

export const ErrorState = () => {
  return (
    <TextFieldUi
      name="firstname"
      placeholder="Placeholder"
      htmlFor="firstname"
      state="error"
    />
  );
};

export const ValidState = () => {
  return (
    <TextFieldUi
      name="firstname"
      placeholder="Placeholder"
      htmlFor="firstname"
      state="valid"
    />
  );
};

export const RequiredState = () => {
  return (
    <TextFieldUi
      name="firstname"
      placeholder="Placeholder"
      htmlFor="firstname"
      state="valid"
      required
    />
  );
};

export const WithDefaultValue = () => {
  return (
    <TextFieldUi
      name="firstname"
      placeholder="Placeholder"
      htmlFor="firstname"
      value="Default Value"
    />
  );
};

export const WithCustomizedRefDefaultFocus = () => {
  const ownRef = useRef();

  useEffect(() => ownRef.current && ownRef.current.focus());

  return (
    <TextFieldUi
      name="firstname"
      placeholder="Placeholder"
      htmlFor="firstname"
      inputRef={ownRef}
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
    defaultValue,
    required,
  } = TexiFieldCommonProps();

  return (
    <TextFieldUi
      className={className}
      name={name}
      placeholder={placeholder}
      htmlFor={htmlFor}
      state={state}
      disabled={disabled}
      value={defaultValue}
      required={required}
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
    themeErrorIconColor,
    themeValidBorder,
    themeValidPlaceholder,
    themeValidText,
    themeValidIconColor,
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
    '--rex-text-field-theme-error-icon-color': themeErrorIconColor,
    '--rex-text-field-theme-valid-text': themeValidText,
    '--rex-text-field-theme-valid-border': themeValidBorder,
    '--rex-text-field-theme-valid-placeholder': themeValidPlaceholder,
    '--rex-text-field-theme-valid-icon-color': themeValidIconColor,
  };

  return {
    customStyle,
    customStyleHtml: cssVarsToLegacy(customStyle, TextFieldUi),
  };
}

export const ReactTheme = () => {
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

export const ReactThemeAllStates = () => {
  const { customStyle } = Theme();

  return (
    <table>
      <tbody>
        <tr>
          <td>
            <TextFieldUi
              style={customStyle}
              name="firstname"
              placeholder="Default"
              htmlFor="firstname_01"
            />
          </td>
          <td>
            <TextFieldUi
              style={customStyle}
              name="firstname"
              placeholder="Hover"
              htmlFor="firstname_02"
              state="hover"
            />
          </td>
          <td>
            <TextFieldUi
              style={customStyle}
              name="firstname"
              placeholder="Focus/Active"
              htmlFor="firstname_03"
              state="active"
            />
          </td>
          <td>
            <TextFieldUi
              style={customStyle}
              name="firstname"
              placeholder="Disabled"
              htmlFor="firstname_04"
              disabled
            />
          </td>
          <td>
            <TextFieldUi
              style={customStyle}
              name="firstname"
              placeholder="Error"
              htmlFor="firstname_05"
              state="error"
            />
          </td>
          <td>
            <TextFieldUi
              style={customStyle}
              name="firstname"
              placeholder="Valid"
              htmlFor="firstname_06"
              state="valid"
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export const HTMLTheme = () => {
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

export const HTMLThemeAllStates = () => {
  const { customStyleHtml } = Theme();

  return (
    <>
      <style>{customStyleHtml}</style>
      <table>
        <tbody>
          <tr>
            <td>
              <TextFieldUi
                name="firstname"
                placeholder="Default"
                htmlFor="firstname_01"
              />
            </td>
            <td>
              <TextFieldUi
                name="firstname"
                placeholder="Hover"
                htmlFor="firstname_02"
                state="hover"
              />
            </td>
            <td>
              <TextFieldUi
                name="firstname"
                placeholder="Focus/Active"
                htmlFor="firstname_03"
                state="active"
              />
            </td>
            <td>
              <TextFieldUi
                name="firstname"
                placeholder="Disabled"
                htmlFor="firstname_04"
                disabled
              />
            </td>
            <td>
              <TextFieldUi
                name="firstname"
                placeholder="Error"
                htmlFor="firstname_05"
                state="error"
              />
            </td>
            <td>
              <TextFieldUi
                name="firstname"
                placeholder="Valid"
                htmlFor="firstname_06"
                state="valid"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
