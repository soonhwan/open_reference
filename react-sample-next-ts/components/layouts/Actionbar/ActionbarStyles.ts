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
    
    .actionbar-main {
      ${mixin.flex}
      
      nav {
        width: calc(100% - 115px);
        
        ul {
          background-color: #fff;
          height: 50px;
          padding-left: 10px;
          border-top: 1px solid #f5f5f5;
          ${mixin.flex}

          li {
            flex: 1;
            margin-left: 10px;
                    
            .btn-base {
              width: 100%;
            }
          }
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
      
      &.is-men {
        nav ul {
          background-color: #000;
          border-top: 1px solid #000;

          li .btn-base svg * {
            stroke: #fff !important;
          }
        }

        .area-btn {
          background: url("/images/bg_actionbar_black.svg") 0 0 no-repeat;
        }  
      }

      nav ul li.active .btn-base svg * {
        stroke: #fa5500 !important;
      }
    }
  }
`;