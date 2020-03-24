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
      '#EF0AA1',
      'Theme Default'
    ),
    themeDefaultText: color('Default Text Color', '#A2006A', 'Theme Default'),
    themeHoverBorder: color('Hover Border Color', '#A2006A', 'Theme Hover'),
    themeHoverPlaceholder: color(
      'Hover Placeholder Color',
      '#CB0085',
      'Theme Hover'
    ),
    themeHoverText: color('Hover Text Color', '#830056', 'Theme Hover'),
    themeActiveBorder: color('Active Border Color', '#830056', 'Theme Active'),
    themeActivePlaceholder: color(
      'Active Placeholder Color',
      '#A2006A',
      'Theme Active'
    ),
    themeActiveText: color('Active Text Color', '#5A003C', 'Theme Active'),
    themeDisabledBorder: color(
      'Disabled Border Color',
      '#686868',
      'Theme Disabled'
    ),
    themeDisabledPlaceholder: color(
      'Disabled Placeholder Text Color',
      '#828282',
      'Theme Disabled'
    ),
    themeDisabledText: color(
      'Disabled Text Color',
      '#4D4D4D',
      'Theme Disabled'
    ),
    themeErrorBorder: color('Error Border Color', '#9B00EC', 'Theme Error'),
    themeErrorPlaceholder: color(
      'Error Placeholder Color',
      '#B62AFF',
      'Theme Error'
    ),
    themeErrorText: color('Error Text Color', '#7D00BE', 'Theme Error'),
    themeValidBorder: color('Valid Border Color', '#0085C7', 'Theme Valid'),
    themeValidPlaceholder: color(
      'Valid Placeholder Color',
      '#00A0F0',
      'Theme Valid'
    ),
    themeValidText: color('Valid Text Color', '#006A9E', 'Theme Valid'),
  };
}
