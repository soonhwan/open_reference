import styled, { css } from 'styled-components'
import mixin from 'styles/utils'

interface IProps {
  className: string;
  mode: string;
}

export const ProductListWrap = styled.div<IProps>`
  .list {
    ${mixin.flex({ wrap: 'wrap', align: 'flex-start', justify: 'space-between' })}
    margin-top: 8px;  
  }

  .pl-item {
    position: relative;
    width: 49.8%;
    margin-top: 60px;
    
    &:nth-child(-n+2) {
      margin-top: 0;
    }

    &:nth-child(-n+10) .rank {
      background-color: #000;
    }

    .btn-like {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 1;
    }

    .rank {
      display: inline-block;
      width: 30px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      background-color: #7b7b7b;
      color: #fff;
      font-size: 14px;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }
  }

  .pli-info {
    display: block;
    position: relative;
    z-index: 0;

    .info {
      display: block;
      padding: 12px 6px 0 12px;

      .label-base {
        margin-left: 3px;

        &:first-child {
          margin-left: 0;
        }
      }
      
      .title {
        display: block;
        font-family: "ProximaNova-bold";
        font-size: 13px;
        color: #000;
        font-weight: 600;
        ${mixin.ellipsis(1)}
      }

      .front {
        display: block;
        margin-top: 8px;
        font-size: 12px;
        color: #7b7b7b;
        ${mixin.ellipsis(1)}
      }

      .detail {
        display: block;
        margin-top: 4px;
        font-size: 12px;
        color: #7b7b7b;
        ${mixin.ellipsis(1)}
      }

      .price {
        ${mixin.flex({ justify: 'flex-start' })}
        margin-top: 10px;
        line-height: 16px;

        strong {
          font-size: 15px;
          color: #000;
        }

        span {
          font-size: 11px;
          color: #9d9d9d;
          text-decoration: line-through;
          margin-left: 4px;

        }

        em {
          font-family: "ProximaNova-bold";
          font-size: 13px;
          color: #fa5500;
          font-weight: 600;
          margin-left: 4px;
        }
      }

      .stats {
        ${mixin.flex({ justify: 'flex-start' })}
        margin-top: 16px;

        > span {
          ${mixin.flex({ justify: 'flex-start' })}
          height: 12px;

          &+ span {
            margin-left: 8px;
            padding-left: 8px;
            border-left: 1px solid #eaeaea;
          }

          svg {
            width: 12px;
            height: 12px;
            margin-right: 4px;
          }

          .cnt {
            font-size: 12px;
            color: #7b7b7b;
          }
        }

        .review {
          .cnt {
            margin-left: 4px;
          }

          em {
            font-size: 12px;
            color: #7b7b7b;
          }
        }

        .like {
          svg path {
            fill: #000 !important;
          }
        }
      }

      .tag {
        display: block;
        margin-top: 12px;
      }

      .labels {
        display: block;
        margin-top: 3px;
      }

    }
  }
`;