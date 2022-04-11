import styled, { css } from 'styled-components'
import mixin from 'styles/utils'
import utils from 'utils'

interface IProps {
  className: string;
}

export const CategoryNavWrap = styled.div<IProps>`
  position: sticky;
  top:0;
  z-index: 10;
  transition: top 0.3s;
  overflow: hidden;
  border-bottom: 1px solid #f5f5f5;
  
${props => 
  utils.setSearchStr(props.className, 'main-st') && (() => {
    return css`
      .list { 
        height: 45px; 
        background-color: #fff; 
    
        .swiper-slide { 
          width: auto; 
          padding: 0 0.6875rem; 
    
          &:first-child { padding-left: 1.25rem; }
          :last-child { padding-right: 1.25rem; }
    
          .btn {
            ${mixin.flex}
            font-family: "ProximaNova-Bold"; 
            font-size: 0.875rem; 
            white-space: nowrap; 
            position: relative; 
            color: #000;
            height: 100%;
          }

          &.dot .btn:before { 
              content: "";
              display: block;
              width: 0.25rem;
              height: 0.25rem;
              border-radius: 50%;
              background-color: #fa5500;
              position: absolute;
              top: 1rem;
              left: -0.375rem; 
            }
    
          &.active .btn:after { 
            content: "";
            display: block;
            width: 100%;
            height: 2px;
            background: #000;
            position: absolute;
            bottom: 0;
            left: 0; 
          }
        }
      }
    `;
  })
}


`;