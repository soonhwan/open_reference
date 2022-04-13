import styled from 'styled-components'

export const BtnHistoryWrap = styled.div`
  position: absolute;
  bottom: -9999em;
  right: 1.25rem;
  opacity: 0;
  visibility: hidden;
  
  transition: opacity 0.3s, visibility 0.3s;

  &.is-show {
    bottom: 124px;
    opacity: 1;
    visibility: visible;
  }
`;