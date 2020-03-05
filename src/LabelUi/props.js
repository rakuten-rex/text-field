// eslint-disable-next-line import/no-extraneous-dependencies
import { text, select, boolean } from '@storybook/addon-knobs';

export default function CommonProps() {
  const options = {
    Default: null,
    Active: 'active',
    Error: 'error',
    Valid: 'valid',
  };

  return {
    label: text('Label Text', 'Label'),
    htmlFor: text('HtmlFor / Input ID', 'rex-label-ui'),
    state: select('State', options, null, 'State Options'),
    disabled: boolean('Disabled', false),
    labelId: text('Label ID', 'label-id'),
  };
}
