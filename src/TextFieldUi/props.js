/* eslint-disable import/no-extraneous-dependencies */
import { text, select, boolean } from '@storybook/addon-knobs';

export function StateProps() {
  const options = {
    Default: null,
    Active: 'active',
  };

  return {
    state: select('State', options, null, 'State Options'),
  };
}

export default function CommonProps() {
  const { state } = StateProps();

  return {
    placeholder: text('Placeholder', 'Placeholder'),
    htmlFor: text('HtmlFor / Input ID', 'text-field'),
    disabled: boolean('Disabled', false),
    className: text('Class Name', 'another-class-name'),
    name: text('Name', 'text-field'),
    state,
  };
}
