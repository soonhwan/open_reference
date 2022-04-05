import styled, { css } from 'styled-components';
import mixin from 'styles/utils'
import utils from 'utils'


interface IProps {
  className: string;
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

    /* ${utils.setSearchStr(props.className, 'btn-logo') && (() => {
      return css`
        width: 50px;
        height: 50px;
      `;
    })}

    ${utils.setSearchStr(props.className, 'btn-logo-ds') && (() => {
      return css`
        width: 144px;
        height: 50px;
      `;
    })}

    ${(utils.setSearchStr(props.className, 'btn-serach') || 
      utils.setSearchStr(props.className, 'btn-cart')) && (() => {
        return css`
          width: 32px;
          height: 32px;
        `;
      })} */
  `; 
}

export const ButtonWrap = styled.button<IProps>` ${props => getStyle(props)} `;
export const LinkWrap = styled.a<IProps>` ${props => getStyle(props)} `;

