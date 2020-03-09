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
      'Default Placeholder Text Color',
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
    themeDisabledBorder: color(
      'Disabled Border Color',
      '#DFDFDF',
      'Theme Disabled'
    ),
    themeDisabledPlaceholder: color(
      'Disabled Placeholder Text Color',
      '#898989',
      'Theme Disabled'
    ),
    themeDisabledText: color(
      'Disabled Text Color',
      '#898989',
      'Theme Disabled'
    ),
    themeErrorBorder: color('Error Border Color', '#8C0000', 'Theme Error'),
    themeErrorPlaceholder: color(
      'Error Placeholder Color',
      '#8C0000',
      'Theme Error'
    ),
    themeErrorText: color('Error Text Color', '#333', 'Theme Error'),
    themeValidBorder: color('Valid Border Color', '#8C0000', 'Theme Valid'),
    themeValidPlaceholder: color(
      'Valid Placeholder Color',
      '#8C0000',
      'Theme Valid'
    ),
    themeValidText: color('Valid Text Color', '#333', 'Theme Valid'),
  };
}
