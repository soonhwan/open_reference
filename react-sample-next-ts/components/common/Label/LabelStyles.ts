import styled, { css } from 'styled-components';
import mixin from 'styles/utils'
import utils from 'utils'

interface IProps {
  className: string;
  mode: string;
}

export const LabelWrap = styled.span<IProps>` 
  ${mixin.flex({ display : 'inline-flex' })}
  svg + span {
    margin-left: 4px;
  }
  
  font-size: 10px;
  color: #7b7b7b;
  background-color: #fff;
  padding: 5px 5px 4px 5px;
  border-radius: 1px;
  line-height: 8px;
  border: 1px solid #eaeaea;

  ${props => {
    const cName = props.className;
    switch (true) {
      case utils.setSearchStr(cName, 'label-tag'):
        return css`
          color: #fff;

          &.black {
            border-color: #000;
            background: #000;
          }

          &.orange {
            border-color: #fa5500;
            background: #fa5500;
          }

          &.gray {
            border-color: #c4c4c4;
            background: #c4c4c4;
          }
        `;
    }
  }}
`;

