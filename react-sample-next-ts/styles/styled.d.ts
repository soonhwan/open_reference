import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fontFamily: string;
    media: {
      xxl: string;
    };
  }
}