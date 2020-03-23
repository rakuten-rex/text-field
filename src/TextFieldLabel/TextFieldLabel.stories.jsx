/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
import React from 'react';
import TextFieldLabel from 'src/TextFieldLabel';
import { boolean } from '@storybook/addon-knobs';
import { cssVarsToLegacy, withKnobs } from '../../.storybook/helper';
import TextFieldThemeProps from '../TextFieldUi/themeProps';
import TexiFieldCommonProps, { StateProps } from '../TextFieldUi/props';
import LabelThemeProps from '../LabelUi/themeProps';
import LabelCommonProps from '../LabelUi/props';

/**
 * Main story
 * */
export default {
  title: 'TextFieldLabel',
  decorators: withKnobs,
};

/**
 * Stories
 * */
export const Default = () => {
  return (
    <TextFieldLabel
      id="age"
      name="firstname"
      placeholder="Placeholder"
      htmlFor="firstname"
      label="Label"
      labelId="labelId"
    />
  );
};

export const HoverState = () => {
  return (
    <TextFieldLabel
      id="age"
      name="firstname"
      placeholder="Placeholder"
      htmlFor="firstname"
      label="Label"
      labelId="labelId"
      state="hover"
    />
  );
};

export const FocusAndActiveState = () => {
  return (
    <TextFieldLabel
      id="age"
      name="firstname"
      placeholder="Placeholder"
      htmlFor="firstname"
      label="Label"
      labelId="labelId"
      state="active"
    />
  );
};

export const DisabledState = () => {
  return (
    <TextFieldLabel
      id="age"
      name="firstname"
      placeholder="Placeholder"
      htmlFor="firstname"
      label="Label"
      labelId="labelId"
      disabled
    />
  );
};

export const ErrorState = () => {
  return (
    <TextFieldLabel
      id="age"
      name="firstname"
      placeholder="Placeholder"
      htmlFor="firstname"
      label="Label"
      labelId="labelId"
      state="error"
    />
  );
};

export const ValidState = () => {
  return (
    <TextFieldLabel
      id="age"
      name="firstname"
      placeholder="Placeholder"
      htmlFor="firstname"
      label="Label"
      labelId="labelId"
      state="valid"
    />
  );
};

export const RequiredState = () => {
  return (
    <TextFieldLabel
      id="age"
      name="firstname"
      placeholder="Placeholder"
      htmlFor="firstname"
      label="Label"
      labelId="labelId"
      required
    />
  );
};

export const WithDefaultValue = () => {
  return (
    <TextFieldLabel
      id="age"
      name="firstname"
      placeholder="Placeholder"
      htmlFor="firstname"
      label="Label"
      labelId="labelId"
      value="Default Value"
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
    required,
  } = TexiFieldCommonProps();
  const { label, labelId } = LabelCommonProps();

  return (
    <TextFieldLabel
      className={className}
      name={name}
      placeholder={placeholder}
      htmlFor={htmlFor}
      state={state}
      label={label}
      disabled={disabled}
      labelId={labelId}
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
    themeValidBorder,
    themeValidPlaceholder,
    themeValidText,
  } = TextFieldThemeProps();
  const {
    themeLabelDefaultText,
    themeLabelDisabledText,
    themeLabelHoverText,
    themeLabelActiveText,
    themeLabelErrorText,
    themeLabelValidText,
  } = LabelThemeProps();

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
    '--rex-text-field-label-theme-text': themeLabelDefaultText,
    '--rex-text-field-label-theme-disabled-text': themeLabelDisabledText,
    '--rex-text-field-label-theme-hover-text': themeLabelHoverText,
    '--rex-text-field-label-theme-active-text': themeLabelActiveText,
    '--rex-text-field-label-theme-error-text': themeLabelErrorText,
    '--rex-text-field-label-theme-valid-text': themeLabelValidText,
  };

  return {
    customStyle,
    customStyleHtml: cssVarsToLegacy(customStyle, TextFieldLabel),
  };
}

export const ReactTheme = () => {
  const { customStyle } = Theme();
  const disabled = boolean('Disabled', false, 'Theme Disabled');
  const { state } = StateProps();

  return (
    <TextFieldLabel
      style={customStyle}
      id="age"
      name="firstname"
      placeholder="Placeholder"
      htmlFor="firstname"
      label="Label"
      labelId="labelId"
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
            <TextFieldLabel
              style={customStyle}
              id="age_01"
              name="firstname"
              placeholder="Default"
              htmlFor="firstname_01"
              label="Label"
              labelId="labelId_01"
            />
          </td>
          <td>
            <TextFieldLabel
              style={customStyle}
              id="age_02"
              name="firstname"
              placeholder="Hover"
              htmlFor="firstname_02"
              label="Label"
              labelId="labelId_02"
              state="hover"
            />
          </td>
          <td>
            <TextFieldLabel
              style={customStyle}
              id="age_03"
              name="firstname"
              placeholder="Focus/Active"
              htmlFor="firstname_03"
              label="Label"
              labelId="labelId_03"
              state="active"
            />
          </td>
          <td>
            <TextFieldLabel
              style={customStyle}
              id="age_04"
              name="firstname"
              placeholder="Disabled"
              htmlFor="firstname_04"
              label="Label"
              labelId="labelId_04"
              disabled
            />
          </td>
          <td>
            <TextFieldLabel
              style={customStyle}
              id="age_05"
              name="firstname"
              placeholder="Error"
              htmlFor="firstname_05"
              label="Label"
              labelId="labelId_05"
              state="error"
            />
          </td>
          <td>
            <TextFieldLabel
              style={customStyle}
              id="age_06"
              name="firstname"
              placeholder="Valid"
              htmlFor="firstname_06"
              label="Label"
              labelId="labelId_06"
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
      <TextFieldLabel
        id="age"
        name="firstname"
        placeholder="Placeholder"
        htmlFor="firstname"
        label="Label"
        labelId="labelId"
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
              <TextFieldLabel
                id="age_01"
                name="firstname"
                placeholder="Default"
                htmlFor="firstname_01"
                label="Label"
                labelId="labelId_01"
              />
            </td>
            <td>
              <TextFieldLabel
                id="age_02"
                name="firstname"
                placeholder="Hover"
                htmlFor="firstname_02"
                label="Label"
                labelId="labelId_02"
                state="hover"
              />
            </td>
            <td>
              <TextFieldLabel
                id="age_03"
                name="firstname"
                placeholder="Focus/Active"
                htmlFor="firstname_03"
                label="Label"
                labelId="labelId_03"
                state="active"
              />
            </td>
            <td>
              <TextFieldLabel
                id="age_04"
                name="firstname"
                placeholder="Disabled"
                htmlFor="firstname_04"
                label="Label"
                labelId="labelId_04"
                disabled
              />
            </td>
            <td>
              <TextFieldLabel
                id="age_05"
                name="firstname"
                placeholder="Error"
                htmlFor="firstname_05"
                label="Label"
                labelId="labelId_05"
                state="error"
              />
            </td>
            <td>
              <TextFieldLabel
                id="age_06"
                name="firstname"
                placeholder="Valid"
                htmlFor="firstname_06"
                label="Label"
                labelId="labelId_06"
                state="valid"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
