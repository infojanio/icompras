import { extendTheme } from 'native-base'

export const THEME = extendTheme({
  colors: {
    YELLOW_DARK: '#C47F17',
    YELLOW: '#DBAC2C',

    PURPLE_DARK: '#4B2995',
    PURPLE: '#8047F8',
    PURPLE_LIGHT: '#EBE5F9',

    GRAY100: '#272221',
    GRAY200: '#403937',
    GRAY300: '#574F4D',
    GRAY400: '#8D8686',
    GRAY500: '#D7D5D5',
    GRAY600: '#E6E5E5',
    GRAY700: '#EDEDED',
    GRAY800: '#F3F2F2',
    GRAY900: '#FAFAFA',
    WHITE: '#FFFFFF',

    RED_DARK: '#C44117',
    RED: '#E8BAAB',
    RED_LIGHT: '#F2DFD8',
    green: {
      700: '#00875F',
      500: '#00B37E',
    },
    gray: {
      700: '#121214',
      600: '#202024',
      500: '#29292E',
      400: '#323238',
      300: '#7C7C8A',
      200: '#C4C4CC',
      100: '#E1E1E6',
    },
    white: '#FFFFFF',
    red: {
      500: '#F75A68',
    },
  },
  fonts: {
    heading: 'Roboto_700Bold',
    body: 'Roboto_400Regular',
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
  },
  sizes: {
    14: 56,
    33: 148,
  },
  fontFamily: {
    Baloo2: {
      BOLD: 'Baloo2_700Bold',
    },
    Roboto: {
      REGULAR: 'Roboto_400Regular',
      BOLD: 'Roboto_700Bold',
    },
  },
  fontSize: {
    TITLE: {
      XL: 36,
      LG: 24,
      MD: 20,
      SM: 16,
      XS: 14,
    },
    TEXT: {
      LG: 20,
      MD: 16,
      SM: 14,
      BUTTON: 14,
      XS: 12,
      TAG: 10,
    },
  },
})
