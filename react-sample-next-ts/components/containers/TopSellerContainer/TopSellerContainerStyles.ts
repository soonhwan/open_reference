import styled from 'styled-components'
import mixin from 'styles/utils'

export const TopSellerContainerWrap = styled.div`
  .area-category {
    padding: 20px 0 16px 0;
    border-bottom: 1px solid #f5f5f5;

    .ac-sorting {
      text-align: center;

      .label .txt {
        font-size: 14px;
        font-weight: bold;
      }
    }

    .category-bar {
      margin-top: 16px;
    }
  }

  .area-sorting {
    margin-top: 12px;
    padding: 12px 20px;
    ${mixin.flex({ justify: 'space-between' })}

    .time {
      color: #aaa;
      font-size: 13px;

      em {
        font-size: 14px;
      }
    }
  }
`;