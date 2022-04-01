import styled, { css } from 'styled-components';
import mixin from 'styles/utils'

interface IProps {
  type?: string;
}

export const IconWrap = styled.span<IProps>`
  ${mixin.flex()}

  &:after {
    content: "";
    display: inline-block;
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
  
    ${props => {
      switch (props.type) {
        case 'search':
          return css`
            width: 32px;
            height: 32px;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 32 32'%3E%3Cpath style='fill:transparent' d='M0 0h32v32H0z'/%3E%3Cpath data-name='Union 64' d='m8978.351 132.35 5 5zm-13.7-5.749a7.949 7.949 0 1 1 7.949 7.949 7.951 7.951 0 0 1-7.948-7.95z' transform='translate(-8958.053 -111.35)' style='fill:none;stroke:%23000;stroke-width:1.3px'/%3E%3C/svg%3E%0A");
          `;
        case 'ddderrr':
          return css`
            width: 20px;
            height: 20px;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 32 32'%3E%3Cpath style='fill:transparent' d='M0 0h32v32H0z'/%3E%3Cpath data-name='Union 64' d='m8978.351 132.35 5 5zm-13.7-5.749a7.949 7.949 0 1 1 7.949 7.949 7.951 7.951 0 0 1-7.948-7.95z' transform='translate(-8958.053 -111.35)' style='fill:none;stroke:%23000;stroke-width:1.3px'/%3E%3C/svg%3E%0A");
          `;
      }
    }}
  }

`;
