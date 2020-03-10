// eslint-disable-next-line import/no-extraneous-dependencies
import { color } from '@storybook/addon-knobs';

export default function ThemeProps() {
  return {
    themeLabelDefaultText: color(
      'Default Label Text Color',
      '#CB0085',
      'Theme Default'
    ),
    themeLabelHoverText: color(
      'Hover Label Text Color',
      '#FF41BE',
      'Theme Hover'
    ),
    themeLabelActiveText: color(
      'Active Label Text Color',
      '#5A003C',
      'Theme Active'
    ),
    themeLabelDisabledText: color(
      'Disabled Label Text Color',
      '#FFE9F8',
      'Theme Disabled'
    ),
    themeLabelErrorText: color(
      'Error Label Text Color',
      '#DF0101',
      'Theme Error'
    ),
    themeLabelValidText: color(
      'Valid Label Text Color',
      '#047205',
      'Theme Valid'
    ),
  };
}
