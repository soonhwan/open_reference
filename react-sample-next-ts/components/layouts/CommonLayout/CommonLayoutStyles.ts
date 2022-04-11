import styled from 'styled-components'

interface IProps {
  className?: string;
}

export const CommonLayoutWrap = styled.div<IProps>`
  /* .scroll-track {
    position: fixed;
    background-color: red;
    color: #fff;
    width: 100%;
    font-size: 20px;
    line-height: 22px;
    z-index: 40;
    top: 200px;
  } */

  &.is-fix-header {
    #header .inner-header {
      position: fixed;
      top: 0;
    }  

    &.is-scrollUp {
      #header .inner-header {
        transform: translateY(-100%);
      }
    }

    &.is-scrollDown {
      .category-nav.main-st {
        top: 50px;
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