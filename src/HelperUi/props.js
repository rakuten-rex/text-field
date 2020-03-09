// eslint-disable-next-line import/no-extraneous-dependencies
import { text, select, boolean } from '@storybook/addon-knobs';

export function StateProps() {
  const options = {
    Default: null,
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
    helper: text('Helper Text', 'Helper Text'),
    disabled: boolean('Disabled', false),
    state,
  };
}
