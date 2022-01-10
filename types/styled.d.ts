// import original module declarations
import 'styled-components';
import { ThemeType } from '../src/Theme'

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {};
}
