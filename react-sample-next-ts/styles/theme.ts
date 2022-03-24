import { DefaultTheme } from 'styled-components';

const deviceSizes = {
  xxl: '1680px',
};

const theme: DefaultTheme = {
  fontFamily: `"ProximaNova-Regular", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "맑은 고딕", sans-serif;`,
  media: {
    xxl: `(max-width: ${deviceSizes.xxl})`,
  },
};

export { theme };