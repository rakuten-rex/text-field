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
    helper: text('Helper Text', 'Helper Text'),
    state: select('State', options, null, 'State Options'),
    disabled: boolean('Disabled', false),
  };
}
