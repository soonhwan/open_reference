import { css, keyframes } from "styled-components";

const mixin: any = {};

mixin.fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

mixin.pixelToRem = (size: number) => `${size / 16}rem`;

mixin.a11y = () => {
  return css`
    overflow: hidden;
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
  `;
};

mixin.ellipsis = (line: number = 1) => {
  return css`
    display: -webkit-box;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: ${line};
    -webkit-box-orient: vertical;
    word-wrap: break-word;
  `;
};

mixin.flex = (direction = "row", align = "center", justify = "center") => {
  return css`
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
  `;
};

export default mixin;
