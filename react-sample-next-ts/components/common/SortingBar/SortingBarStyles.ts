import styled, { css } from 'styled-components'
import mixin from 'styles/utils'

interface IProps {
  className: string;
  mode: string;
}

export const SortingBarWrap = styled.div`
  margin-top: 12px;
  padding: 12px 20px;
  ${mixin.flex({ justify: 'space-between' })}

  .txt {
    color: #9d9d9d;
    font-size: 13px;

    em {
      font-size: 14px;
    }
  }
`;