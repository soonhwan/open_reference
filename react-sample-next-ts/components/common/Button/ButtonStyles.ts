import styled, { css } from 'styled-components';
import mixin from 'styles/utils'

interface IProps {
  className: string;
  mode: string;
}

const getStyle = (props: any) => {
  return css`
    ${mixin.flex({ display : 'inline-flex' })}

    &[disabled], &.disabled {
      opacity: 0.5;
    }

    svg + span {
      margin-left: 4px;
    }

    /* ${props => {
      switch (props.mode) {
        case "btn-st1":
          return css`
            background-color: red;
          `;
        case "btn-st2":
          return css`
            background-color: gray;
          `;
        case "btn-st3":
          return css`
            background-color: blue;
          `;
      }
    }} */
  `; 
}

export const ButtonWrap = styled.button<IProps>` ${props => getStyle(props)} `;
export const LinkWrap = styled.a<IProps>` ${props => getStyle(props)} `;

