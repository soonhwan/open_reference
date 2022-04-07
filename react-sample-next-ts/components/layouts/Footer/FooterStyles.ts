import styled from 'styled-components'

export const FooterWrap = styled.footer`
  .inner-footer {
    margin-top: 3.75rem; 
    padding-bottom: 50px; 
    background-color: #f1f1f1;
  }

  .nav-util { 
    font-size: 0; 
    background: #aaaaaa; 

    li { 
      display: inline-block; 
      width: 25%; 
      text-align: center; 
      position: relative; 

      a { 
        display: block; 
        color: #ffffff; 
        font-size: 0.875rem; 
        height: 2.5rem; 
        line-height: 2.375rem; 
        letter-spacing: -0.28px; 

        &:before {
          content: ''; 
          display: block; 
          width: 1px; 
          height: 0.75rem; 
          background-color: #ffffff; 
          position: absolute; 
          top: 50%; 
          right: 0; 
          margin-top: -0.375rem;
        }
      }

      &:last-child a:before { 
        display: none; 
      }
    }
  }

  .address { 
    text-align: left; 
    padding: 1.25rem 0.9375rem 2.125rem 1.25rem; 

    p { 
      color: #777777; 
      font-size: 0.75rem; 
      line-height: 1.25rem; 

      a { 
        color: #777777; 
        vertical-align: top; 
      }

      .link { 
        text-decoration: none; 
      }
    }
  }

  .nav-terms { 
    font-size: 0; 
    margin: 1.125rem 0; 

    li { 
      display: inline-block; 
      position: relative; 
      padding-right: 1.3125rem; 
      margin-right: 1.25rem; 

      &:before { 
        content: ''; 
        display: block; 
        width: 1px; 
        height: 0.625rem; 
        margin: auto; 
        bottom: 0; 
        background-color: #ccc; 
        position: absolute; 
        top: 0; 
        right: 0; 
      }

      &:last-child { 
        margin-right: 0; 
        padding-right: 0; 
        
        &:before { 
          display: none; 
        }
      }

      a { 
        font-size: 0.6875rem; 
        color: #333; 
      }
    }

    + p { 
      font-size: 0.6875rem; 
    }
  }

  &.product { 
    padding-bottom: 3.75rem; 
  }

  &.iPhoneXapp { 
    padding-bottom: 80px; 
  }
`;