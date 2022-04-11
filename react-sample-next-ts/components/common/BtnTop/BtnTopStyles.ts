import styled from 'styled-components'

export const BtnTopWrap = styled.div`
  position: absolute;
  bottom: 80px; right: 1.25rem;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;

  &.is-show {
    opacity: 1;
    visibility: visible;
  }
`;