import styled from 'styled-components'

interface IProps {
  className?: string;
}

export const CommonLayoutWrap = styled.div<IProps>`
  .scroll-track {
    position: fixed;
    background-color: red;
    color: #fff;
    width: 100%;
    font-size: 20px;
    line-height: 22px;
    z-index: 40;
    top: 50%;
    transform: translateY(-50%);
  }

  &.is-fix-header {
    #header .inner-header {
      position: fixed;
      top: 0;
    }  

    &.is-scrollUp {
      #header .inner-header {
        top: -50px;
      }
    }
  }

  &.is-scrollUp {
    #actionbar .inner-actionbar {
      transform: translateY(calc(100% + 20px));
    }
  }

  &.is-scrollBottom {
    #actionbar .inner-actionbar {
      transform: translateY(0);
    }
  }
`;