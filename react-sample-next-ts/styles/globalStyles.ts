import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /* ------------- reset */
  html,body,div,span,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,abbr,address,cite,code,del,dfn,em,img,ins,kbd,q,samp,small,strong,sub,sup,var,b,i,dl,dt,dd,ol,ul,li,
  fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,figcaption,figure,footer,header,menu,nav,section,summary,time,mark,audio,video{margin:0;padding:0;}
  table{border:0;border-spacing:0;border-collapse:collapse;table-layout:fixed;}
  ul,ol,li,dl,dd,dt{list-style:none;}
  img,fieldset,iframe{border:0;}
  img {max-width:100%;vertical-align:middle;}
  textarea{resize:none;}
  input,select,textarea,button{font-size:100%;vertical-align:middle;outline:none;-webkit-appearance:none;-webkit-border-radius:0px;}
  h1,h2,h3,h4,h5,h6{font-size:100%;}
  address,caption,cite,code,dfn,em,var{font-style:normal;font-weight:normal;}
  caption{overflow:hidden;margin-top:-1px;padding:0;width:1px;height:1px;font-size:0;line-height:0;}
  blockquote,q{quotes:none;} 
  blockquote:before,blockquote:after,q:before,q:after{content:"";content:none;} 
  body{-webkit-text-size-adjust:none;-webkit-font-smoothing: antialiased;}
  /* box-sizing */
  *,*:before,*:after{-webkit-box-sizing:border-box;box-sizing: border-box;}
  details summary::-webkit-details-marker{display:none;}
  /* base - input */
  input:checked[type="checkbox"]{background-color:#666;-webkit-appearance:checkbox;} 
  button,input[type="button"]{border:0;background-color:transparent;padding:0;cursor:pointer;}
  input[type="search"]::-webkit-search-cancel-button{-webkit-appearance:none;} 
  input[type="radio"] {-webkit-appearance:radio;}
  input[type="checkbox"] {-webkit-appearance:checkbox;}
  input[type="text"]::-ms-clear,
  input[type="password"]::-ms-clear {display: none;}
  select::-ms-expand {display: none;}
  /* placeholder */
  ::-webkit-input-placeholder {color:#999;}
  :-moz-placeholder {color:#999;}
  ::-moz-placeholder {color:#999;}
  :-ms-input-placeholder {color: #999 !important;}
  ::-ms-input-placeholder {color:#999;}
  ::placeholder {color:#999;}
  /* base - a */
  a,a:link,a:visited,a:hover,a:focus,a:active{text-decoration:none;}

  /* ------------- utils */
  .a11y {overflow:hidden;position:absolute;clip:rect(0 0 0 0);width:1px;height:1px;margin:-1px;border:0;padding:0;}
  /* skip_nav */
  .nav-skip{position:absolute;top:0;left:0;width:100%;z-index:9999;}
  .nav-skip a{position:absolute;display:block;width:100%;left:0;text-align:center;top:-10000px;font-size:1em;}
  .nav-skip a:hover,.nav-skip a:focus,.nav-skip a:active {position:absolute;top:0;padding:5px 0;font-weight:bold;color:#000;background:#fff;}
  /* etc */
  .ellipsis {display:block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;} 
  .ellipsis2 {display:block;text-overflow:ellipsis;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;word-wrap:break-word;} 
  .no-scroll body {overflow: hidden;position: fixed;width: 100%;}

  /* ------------- layout */
  body,input,select,textarea,button {
    font:15px/1.4 ${({ theme }) => theme.fontFamily};
    color: #000;
    font-weight: 400; 
    line-height: 100%;
  }

  #root {
    width:100%;
    margin:0 auto;
    overflow:hidden;
    min-width: 280px;
  } 

  /* ------------- common format */
  .c-point1 { color: #fa5500; }
  .c-point2 { color: #a4a4a4; }
  
`;