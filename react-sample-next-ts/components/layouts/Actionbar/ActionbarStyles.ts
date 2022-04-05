import styled from 'styled-components'
import mixin from 'styles/utils'

interface IProps {
  bg: string;
}

export const ActionbarWrap = styled.div<IProps>`
  position: relative;
  z-index: 1;

  .inner-actionbar {
    position: fixed;
    height: 50px;
    left: 0;
    bottom: 0;
    width: 100%;
    ${mixin.flex}
    
    ul {
      width: calc(100% - 115px);
      height: 50px;
      background-color: #fff;
      padding-left: 10px;
      ${mixin.flex}
      border-top: 1px solid #f5f5f5;

      li {
        flex: 1;
        margin-left: 10px;
                
        .btn-base {
          width: 100%;
        }
      }

      .active .btn-base svg path {
        stroke: #fa5500 !important;
      }
    }
  
    .area-btn {
      width: 115px;
      height: 50px;
      text-align: center;
      background: url("/images/bg_actionbar_white.svg") 0 0 no-repeat;

      .btn-gender {
        transform: translate(7px, -19px);
      }
    }
  }
`;