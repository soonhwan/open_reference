import styled from 'styled-components'
import mixin from 'styles/utils'

export const HeaderWrap = styled.header`
  position: relative;
  height: 50px;
  z-index: 1;
  
  .inner-header {
    height: inherit;
    padding: 0 14px 0 10px;
    ${mixin.flex({ justify : 'space-between'})}
  
    .btn-cart {
      position: relative;

      .count {
        position: absolute;
        right: 50%;
        top: 50%;
        transform: translate(20px, -4px);
      }
    }
  
    .area-right {
      .btn-base {
        margin-left: 8px;
      }
    }
  }
`;