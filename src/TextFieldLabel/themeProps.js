/* eslint-disable import/no-extraneous-dependencies */
import { color } from '@storybook/addon-knobs';

export default function ThemeProps() {
  return {
    themeDefaultBorder: color(
      'Default Border Color',
      '#CB0085',
      'Theme Default'
    ),
    themeDefaultPlaceholder: color(
      'Default Placeholder Color',
      '#FF79D1',
      'Theme Default'
    ),
    themeDefaultText: color('Default Text Color', '#333', 'Theme Default'),
    themeHoverBorder: color('Hover Border Color', '#FF41BE', 'Theme Hover'),
    themeHoverPlaceholder: color(
      'Hover Placeholder Color',
      '#FFACE3',
      'Theme Hover'
    ),
    themeHoverText: color('Hover Text Color', '#333', 'Theme Hover'),
    themeActiveBorder: color('Active Border Color', '#8C0000', 'Theme Active'),
    themeActivePlaceholder: color(
      'Active Placeholder Color',
      '#8C0000',
      'Theme Active'
    ),
    themeActiveText: color('Active Text Color', '#333', 'Theme Active'),
  };
}
