import styled from 'styled-components'

export const FooterWrap = styled.footer`
  margin-top: 3.75rem; padding-bottom: 50px; background-color: #f1f1f1;

  .footer_btn { font-size: 0; background: #aaaaaa; }

  .footer_btn li { display: inline-block; width: 25%; text-align: center; position: relative; }

  .footer_btn li a { display: block; color: #ffffff; font-size: 0.875rem; height: 2.5rem; line-height: 2.375rem; letter-spacing: -0.28px; }

  .footer_btn li a:before { content: ''; display: block; width: 1px; height: 0.75rem; background-color: #ffffff; position: absolute; top: 50%; right: 0; margin-top: -0.375rem; }

  .footer_btn li:last-child a:before { display: none; }

  .address { text-align: left; padding: 1.25rem 0.9375rem 2.125rem 1.25rem; }

  .address p { color: #777777; font-size: 0.75rem; line-height: 1.25rem; }

  .address p a { color: #777777; vertical-align: top; }

  .address p .link { text-decoration: none; }

  .address .btn_wrap { font-size: 0; margin: 1.125rem 0; }

  .address .btn_wrap li { display: inline-block; position: relative; padding-right: 1.3125rem; margin-right: 1.25rem; }

  .address .btn_wrap li:before { content: ''; display: block; width: 1px; height: 0.625rem; margin: auto; bottom: 0; background-color: #ccc; position: absolute; top: 0; right: 0; }

  .address .btn_wrap li:last-child { margin-right: 0; padding-right: 0; }

  .address .btn_wrap li:last-child:before { display: none; }

  .address .btn_wrap li a { font-size: 0.6875rem; color: #333; }

  .address .btn_wrap li a.bold { font-family: "ProximaNova-Semibold", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "맑은 고딕", sans-serif; font-weight: 500; }

  .address .btn_wrap + p { font-size: 0.6875rem; }

  &.product { padding-bottom: 3.75rem; }

  &.iPhoneXapp { padding-bottom: 80px; }
`;