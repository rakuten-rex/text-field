// eslint-disable-next-line import/no-extraneous-dependencies
import { color } from '@storybook/addon-knobs';

export default function ThemeProps() {
  return {
    themeHelperDefaultText: color(
      'Default Helper Text Color',
      '#686868',
      'Theme Default'
    ),
    themeHelperHoverText: color(
      'Hover Helper Text Color',
      '#4D4D4D',
      'Theme Hover'
    ),
    themeHelperActiveText: color(
      'Active Helper Text Color',
      '#333333',
      'Theme Active'
    ),
    themeHelperDisabledText: color(
      'Disabled Helper Text Color',
      '#686868',
      'Theme Disabled'
    ),
    themeHelperErrorText: color(
      'Error Helper Text Color',
      '#9B00EC',
      'Theme Error'
    ),
    themeHelperValidText: color(
      'Valid Helper Text Color',
      '#0085C7',
      'Theme Valid'
    ),
  };
}
