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
  };
}
