// eslint-disable-next-line import/no-extraneous-dependencies
import { text, select, boolean } from '@storybook/addon-knobs';

export function StateProps() {
  const options = {
    Default: null,
    Hover: 'hover',
    Active: 'active',
    Error: 'error',
    Valid: 'valid',
  };

  return {
    state: select('State', options, null, 'State Options'),
  };
}

export default function CommonProps() {
  const { state } = StateProps();

  return {
    label: text('Label Text', 'Label'),
    htmlFor: text('HtmlFor / Input ID', 'rex-label-ui'),
    disabled: boolean('Disabled', false),
    labelId: text('Label ID', 'label-id'),
    state,
  };
}
