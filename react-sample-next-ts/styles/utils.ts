import { css, keyframes } from 'styled-components'

const mixin: any = {};

//keyframes
mixin.fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

//utils
mixin.pixelToRem = (size: string, standard: number = 16 ) => size.split(' ').map(v => `${v / standard}rem`).join(' ');

mixin.getSizeBox = (w: number, h: number) => `width: ${w}px; height: ${h}px;`; 

//css
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

mixin.flex = ({ display = 'flex', direction = 'row', wrap = 'nowrap', align = 'center', justify = 'center' }) => {
  return css`
    display: ${display};
    flex-direction: ${direction};
    flex-wrap: ${wrap};
    justify-content: ${justify};
    align-items: ${align};
  `;
};

export default mixin;
