import styled from 'styled-components'
import mixin from 'styles/utils'

export const NavSkipWrap = styled.dl`
  &.nav-skip {
    position:absolute;
    top:0;
    left:0;
    width:100%;
    z-index:9999;

    dt {
      ${mixin.a11y()}
    }
    
    a {
      position:absolute;
      display:block;
      width:100%;
      left:0;
      text-align:center;
      top:-10000px;
      font-size:1em;
      
      &:hover, &:focus, &:active {
        position:absolute;
        top:0;
        padding:5px 0;
        font-weight:bold;
        color:#000;
        background:#fff;
      }
    }
  }
`;