import styled, { css } from 'styled-components'
import mixin from 'styles/utils'

interface IProps {
  className: string;
  mode: string;
}

export const CategorySortingBarWrap = styled.div<IProps>`
  padding: 20px 0 16px 0;
  border-bottom: 1px solid #f5f5f5;

  .area-sorting {
    text-align: center;

    .label .txt {
      font-size: 14px;
      font-weight: bold;
    }
  }

  .category-bar {
    margin-top: 16px;
  }
`;