import styled, { css } from 'styled-components'
import mixin from 'styles/utils'

interface IProps {
  className: string;
  mode: string;
}

export const ProductListWrap = styled.div<IProps>`
  .list {
    ${mixin.flex({ wrap: 'wrap', align: 'flex-start', justify: 'space-between' })}
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .item {
    position: relative;
    width: 49.8%;
    margin-top: 60px;
    
    &:nth-child(-n+2) {
      margin-top: 0;
    }

    .btn-heart {
      width: 16px;
      height: 16px;
      position: absolute;
      top: 10px;
      right: 10px;
      z-index: 1;
    }

    .rank {
      display: inline-block;
      width: 30px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      background-color: #000;
      color: #fff;
      font-size: 14px;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }
  }

  .area-click {
    display: block;
    position: relative;
    z-index: 0;
    
    .thumb {
      display: inline-block;
      overflow: hidden;
    }
  }
`;