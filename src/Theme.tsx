export type ThemeType = typeof light;

export const light = {
  color: {
    white: '#ffffff',
    black: '#000000',
    base: '#333333'
  },
  fonts: {
    normal: '14px',
  }
}

export const dark: ThemeType = {
  color: {
    white: '#ffffff',
    black: '#000000',
    base: '#333333'
  },
  fonts: {
    normal: '14px',
  }
}

const theme = light;
export default theme;