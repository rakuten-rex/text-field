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
      '#A2006A',
      'Theme Hover'
    ),
    themeLabelActiveText: color(
      'Active Label Text Color',
      '#830056',
      'Theme Active'
    ),
    themeLabelDisabledText: color(
      'Disabled Label Text Color',
      '#686868',
      'Theme Disabled'
    ),
    themeLabelErrorText: color(
      'Error Label Text Color',
      '#9B00EC',
      'Theme Error'
    ),
    themeLabelValidText: color(
      'Valid Label Text Color',
      '#0085C7',
      'Theme Valid'
    ),
  };
}
