import styled, { css } from 'styled-components'
import mixin from 'styles/utils'

interface IProps {
  className: string;
  mode: string;
}

export const SelectWrap = styled.div`
  position: relative;
  display: inline-block;
  
  select {
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;

    option {
      font-size: 14px;
    }
  }

  .label {
    ${mixin.flex({ display : 'inline-flex' })}

    .txt {
      display: inline-block;
    }

    .arrow {
      display: inline-block;
    }
  }

  ${props => {
    switch (props.mode) {
      case "sorting":
        return css`
        .label {
          
          .txt {            
            font-size: 13px;
            line-height: 19px;
            color: #000;
          }
          
          .arrow {            
            margin-left: 4px;
            width: 16px;
            height: 16px;
          }
        }
        `;
    }
  }}
`;