import {
  BrandVariants,
  Theme,
  createLightTheme,
  createDarkTheme,
} from '@fluentui/react-components';

const myNewTheme: BrandVariants = {
  10: '#020306',
  20: '#101725',
  30: '#142643',
  40: '#15325B',
  50: '#123E74',
  60: '#0A4B8F',
  70: '#1C58A1',
  80: '#3A65A9',
  90: '#5072B1',
  100: '#6480B9',
  110: '#778EC2',
  120: '#899CCA',
  130: '#9BAAD2',
  140: '#ADB9DA',
  150: '#BFC8E2',
  160: '#D1D7EA',
};

export const lightTheme: Theme = {
  ...createLightTheme(myNewTheme),
};

export const darkTheme: Theme = {
  ...createDarkTheme(myNewTheme),
};
