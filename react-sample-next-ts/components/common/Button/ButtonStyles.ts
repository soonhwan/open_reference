import styled, { css } from 'styled-components';
import mixin from 'styles/utils'

interface IProps {
  className: string;
}

const getStyle = () => {
  return css`
    display: inline-block;

    &.btn-st1 {
      padding: 20px;
    }
  `; 
}

export const ButtonWrap = styled.button<IProps>`
  ${getStyle()}
`;

export const LinkWrap = styled.a<IProps>`
  ${getStyle()}
`;

