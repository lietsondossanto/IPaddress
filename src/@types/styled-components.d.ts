import theme from './../styles/Theme';

type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    colors: {
      background: string
      text: string
      textBold: string
      primary: string
      secondary: string
      black: string
      white: string
    },
  }
}
