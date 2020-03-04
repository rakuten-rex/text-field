// eslint-disable-next-line import/no-extraneous-dependencies
import { color } from '@storybook/addon-knobs';

export default function ThemeProps() {
  return {
    themeHelperDefaultText: color(
      'Default Helper Text Color',
      '#606060',
      'Theme Default'
    ),
    themeHelperDisabledText: color(
      'Disabled Helper Text Color',
      '#D1D1D1',
      'Theme Disabled'
    ),
    themeHelperHoverText: color(
      'Hover Helper Text Color',
      '#606060',
      'Theme Hover'
    ),
    themeHelperActiveText: color(
      'Active Helper Text Color',
      '#606060',
      'Theme Active'
    ),
  };
}
