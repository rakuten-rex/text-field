/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import TextFieldLabelHelper from 'src/TextFieldLabelHelper';
import TexiFieldCommonProps, { StateProps } from '../TextFieldUi/props';
import TextFieldThemeProps from '../TextFieldUi/themeProps';
import LabelCommonProps from '../LabelUi/props';
import LabelThemeProps from '../LabelUi/themeProps';
import HelperCommonProps from '../HelperUi/props';
import HelperThemeProps from '../HelperUi/themeProps';
import { cssVarsToLegacy, withKnobs } from '../../.storybook/helper';

/**
 * Main story
 * */
export default {
  title: 'Text Field Label Helper',
  decorators: withKnobs,
};

/**
 * Stories
 * */
export const Default = () => {
  return (
    <TextFieldLabelHelper
      id="age"
      name="firstname"
      placeholder="Placeholder"
      htmlFor="firstname"
      label="Label"
      labelId="labelId"
      helper="Helper Text"
    />
  );
};

export const HoverState = () => {
  return (
    <TextFieldLabelHelper
      id="age"
      name="firstname"
      placeholder="Placeholder"
      htmlFor="firstname"
      label="Label"
      labelId="labelId"
      helper="Helper Text"
      state="hover"
    />
  );
};

export const FocusAndActiveState = () => {
  return (
    <TextFieldLabelHelper
      id="age"
      name="firstname"
      placeholder="Placeholder"
      htmlFor="firstname"
      label="Label"
      labelId="labelId"
      helper="Helper Text"
      state="active"
    />
  );
};

export const DisabledState = () => {
  return (
    <TextFieldLabelHelper
      id="age"
      name="firstname"
      placeholder="Placeholder"
      htmlFor="firstname"
      label="Label"
      labelId="labelId"
      helper="Helper Text"
      disabled
    />
  );
};

export const ErrorState = () => {
  return (
    <TextFieldLabelHelper
      id="age"
      name="firstname"
      placeholder="Placeholder"
      htmlFor="firstname"
      label="Label"
      labelId="labelId"
      helper="Helper Text"
      state="error"
    />
  );
};

export const ValidState = () => {
  return (
    <TextFieldLabelHelper
      id="age"
      name="firstname"
      placeholder="Placeholder"
      htmlFor="firstname"
      label="Label"
      labelId="labelId"
      helper="Helper Text"
      state="valid"
    />
  );
};

export const WithDefaultValue = () => {
  return (
    <TextFieldLabelHelper
      id="age"
      name="firstname"
      placeholder="Placeholder"
      htmlFor="firstname"
      label="Label"
      labelId="labelId"
      helper="Helper Text"
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
  } = TexiFieldCommonProps();
  const { label, labelId } = LabelCommonProps();
  const { helper } = HelperCommonProps();

  return (
    <TextFieldLabelHelper
      className={className}
      name={name}
      placeholder={placeholder}
      htmlFor={htmlFor}
      state={state}
      label={label}
      helper={helper}
      disabled={disabled}
      labelId={labelId}
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
  const {
    themeHelperDefaultText,
    themeHelperDisabledText,
    themeHelperHoverText,
    themeHelperActiveText,
    themeHelperErrorText,
    themeHelperValidText,
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
    '--rex-text-field-theme-error-text': themeErrorText,
    '--rex-text-field-theme-error-border': themeErrorBorder,
    '--rex-text-field-theme-error-placeholder': themeErrorPlaceholder,
    '--rex-text-field-theme-valid-text': themeValidText,
    '--rex-text-field-theme-valid-border': themeValidBorder,
    '--rex-text-field-theme-valid-placeholder': themeValidPlaceholder,
    '--rex-text-field-label-theme-text': themeLabelDefaultText,
    '--rex-text-field-label-theme-hover-text': themeLabelHoverText,
    '--rex-text-field-label-theme-active-text': themeLabelActiveText,
    '--rex-text-field-label-theme-error-text': themeLabelErrorText,
    '--rex-text-field-label-theme-valid-text': themeLabelValidText,
    '--rex-text-field-label-theme-disabled-text': themeLabelDisabledText,
    '--rex-text-field-helper-theme-text': themeHelperDefaultText,
    '--rex-text-field-helper-theme-hover-text': themeHelperHoverText,
    '--rex-text-field-helper-theme-active-text': themeHelperActiveText,
    '--rex-text-field-helper-theme-error-text': themeHelperErrorText,
    '--rex-text-field-helper-theme-valid-text': themeHelperValidText,
    '--rex-text-field-helper-theme-disabled-text': themeHelperDisabledText,
  };

  return {
    customStyle,
    customStyleHtml: cssVarsToLegacy(customStyle, TextFieldLabelHelper),
  };
}

export const ReactTheme = () => {
  const { customStyle } = Theme();
  const disabled = boolean('Disabled', false, 'Theme Disabled');
  const { state } = StateProps();

  return (
    <TextFieldLabelHelper
      style={customStyle}
      id="age"
      name="firstname"
      placeholder="Placeholder"
      htmlFor="firstname"
      label="Label"
      labelId="labelId"
      helper="Helper Text"
      disabled={disabled}
      state={state}
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
            <TextFieldLabelHelper
              style={customStyle}
              id="age_01"
              name="firstname"
              placeholder="Default"
              htmlFor="firstname_01"
              label="Label"
              labelId="labelId_01"
              helper="Helper Text"
            />
          </td>
          <td>
            <TextFieldLabelHelper
              style={customStyle}
              id="age_02"
              name="firstname"
              placeholder="Hover"
              htmlFor="firstname_02"
              label="Label"
              labelId="labelId_02"
              helper="Helper Text"
              state="hover"
            />
          </td>
          <td>
            <TextFieldLabelHelper
              style={customStyle}
              id="age_03"
              name="firstname"
              placeholder="Focus/Active"
              htmlFor="firstname_03"
              label="Label"
              labelId="labelId_03"
              helper="Helper Text"
              state="active"
            />
          </td>
          <td>
            <TextFieldLabelHelper
              style={customStyle}
              id="age_04"
              name="firstname"
              placeholder="Disabled"
              htmlFor="firstname_04"
              label="Label"
              labelId="labelId_04"
              helper="Helper Text"
              disabled
            />
          </td>
          <td>
            <TextFieldLabelHelper
              style={customStyle}
              id="age_05"
              name="firstname"
              placeholder="Error"
              htmlFor="firstname_05"
              label="Label"
              labelId="labelId_05"
              helper="Helper Text"
              state="error"
            />
          </td>
          <td>
            <TextFieldLabelHelper
              style={customStyle}
              id="age_06"
              name="firstname"
              placeholder="Valid"
              htmlFor="firstname_06"
              label="Label"
              labelId="labelId_06"
              helper="Helper Text"
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
      <TextFieldLabelHelper
        id="age"
        name="firstname"
        placeholder="Placeholder"
        htmlFor="firstname"
        label="Label"
        labelId="labelId"
        helper="Helper Text"
        disabled={disabled}
        state={state}
      />
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
              <TextFieldLabelHelper
                id="age_01"
                name="firstname"
                placeholder="Default"
                htmlFor="firstname_01"
                label="Label"
                labelId="labelId_01"
                helper="Helper Text"
              />
            </td>
            <td>
              <TextFieldLabelHelper
                id="age_02"
                name="firstname"
                placeholder="Hover"
                htmlFor="firstname_02"
                label="Label"
                labelId="labelId_02"
                helper="Helper Text"
                state="hover"
              />
            </td>
            <td>
              <TextFieldLabelHelper
                id="age_03"
                name="firstname"
                placeholder="Focus/Active"
                htmlFor="firstname_03"
                label="Label"
                labelId="labelId_03"
                helper="Helper Text"
                state="active"
              />
            </td>
            <td>
              <TextFieldLabelHelper
                id="age_04"
                name="firstname"
                placeholder="Disabled"
                htmlFor="firstname_04"
                label="Label"
                labelId="labelId_04"
                helper="Helper Text"
                disabled
              />
            </td>
            <td>
              <TextFieldLabelHelper
                id="age_05"
                name="firstname"
                placeholder="Error"
                htmlFor="firstname_05"
                label="Label"
                labelId="labelId_05"
                helper="Helper Text"
                state="error"
              />
            </td>
            <td>
              <TextFieldLabelHelper
                id="age_06"
                name="firstname"
                placeholder="Valid"
                htmlFor="firstname_06"
                label="Label"
                labelId="labelId_06"
                helper="Helper Text"
                state="valid"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
