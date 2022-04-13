import styled from 'styled-components'

interface IProps {
  className?: string;
}

export const MainLayoutWrap = styled.div<IProps>`
  .category-bar.header-nav {
    position: sticky;
    top:0;
    z-index: 10;
  }
  
`;