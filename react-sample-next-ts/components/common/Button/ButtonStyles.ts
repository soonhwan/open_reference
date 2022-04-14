import styled, { css } from 'styled-components';
import mixin from 'styles/utils'
import utils from 'utils'

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

    ${props => {
      const cName = props.className;
      switch (true) {
        case utils.setSearchStr(cName, 'btn-heart'):
          return css`
            &.active {
              path {
                fill: #fa5500 !important;
              }
            }
          `;
      }
    }}
  `; 
}

export const ButtonWrap = styled.button<IProps>` ${props => getStyle(props)} `;
export const LinkWrap = styled.a<IProps>` ${props => getStyle(props)} `;

