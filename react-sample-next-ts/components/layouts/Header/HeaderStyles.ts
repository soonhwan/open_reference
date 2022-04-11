import styled from 'styled-components'
import mixin from 'styles/utils'

export const HeaderWrap = styled.header`
  position: relative;
  width: 100%;
  height: 50px;
  z-index: 10;
  
  .inner-header {
    width: inherit;
    height: inherit;
    padding: 0 14px 0 10px;
    background-color: #fff;
    transition: transform 0.3s, top 0.3s;
  }
  
  .header-main {
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