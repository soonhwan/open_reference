import styled, { css } from 'styled-components';
import utils from 'utils'

interface IProps {
  className: string;
  mode: string;
}

export const ThumbnailWrap = styled.span<IProps>`
  position: relative;
  display: block;
  overflow: hidden;
  width: 100%;

  .img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${props => {
    const cName = props.className;
    switch (true) {
      case utils.setSearchStr(cName, 'thumb-product'):
        return css`
          padding-top: 133.6898395721925%;
        `;
      case utils.setSearchStr(cName, 'thumb-category-nav'):
        return css`
          width: 60px;
          height: 60px;
        `;
    }
  }}
  

  
`;