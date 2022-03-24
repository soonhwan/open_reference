import styled from 'styled-components'

export const HeaderWrap = styled.header`
  position: relative; padding: 0 10px; background: #fff; top: 0; left: 0; right: 0; z-index: 11; transition: top 0.3s ease; -webkit-transition: top 0.3s ease; width: 100%; margin: 0; overflow: hidden; transition: all 0.3s;

  a { color: #000; }
  
  &.fixed { position: fixed; }

  &.top-50 { top: -50px; }

  &.shadow { border-bottom: 1px solid #f1f1f1; }

  &.sub { position: fixed; height: 50px; z-index: 35; }

  &.sub h1 { line-height: 54px; }

  &.sub.border { border-bottom: 1px solid #f2f2f2; }

  &.sub .nav_search { right: 50px; }

  &.sub .nav_shoppingbag { right: 10px; }

  &.sub .sub_page_title { display: inline-block; max-width: 10.9375rem; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; vertical-align: top; font-family: "ProximaNova-Semibold", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "맑은 고딕", sans-serif; font-weight: 500; }

  @media (min-width: 360px) { &.sub .sub_page_title { max-width: none; } }

  &.sub.giftBanner { position: relative; }

  &.sub.giftBanner.fixed { position: fixed; top: 0; left: 0; }

  &.product { -webkit-transition: all 0.3s ease; -moz-transition: all 0.3s ease; -ms-transition: all 0.3s ease; -o-transition: all 0.3s ease; transition: all 0.3s ease; }

  &.product.shadow { border-bottom: none; box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1); }

  &.shop { text-align: center; }

  &.shop h1 { display: inline-block; }

  &.shop.dotdot h1 { display: block; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; width: calc(100% - 80px); padding-left: 50px; }

  h1 { text-align: center; font-family: "ProximaNova-Semibold", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "맑은 고딕", sans-serif; font-weight: 500; font-size: 18px; text-transform: uppercase; }

  h1.kr { font-size: 17px; }

  h1 span.heart_ico { font-family: "Noto Sans KR", sans-serif; font-size: 17px; }

  .nav_opener { background: url("//static.wconcept.co.kr/mobile/images/common/btn_gnb_menu_50.png") no-repeat; background-size: cover; width: 40px; height: 50px;  }

  h1.symbol { padding-left: 40px; line-height: 50px; text-align: left; }

  h1.symbol a { display: inline-block; vertical-align: top; }

  h1.symbol img { display: block; height: 50px; }

  h1.bold { font-size: 17px; }

  h1.bold button.open_snb { margin-top: -4px; }

  h1 button.open_snb { display: inline-block; width: 16px; height: 16px; position: relative; background: url("//static.wconcept.co.kr/mobile/images/common/ico_select_category_open_circle_16.png") no-repeat; background-size: cover;  }

  > button, > a { display: block; position: absolute; top: 0; width: 40px; height: 50px; }

  > button img, > a img { display: block; width: 100%; }

  > button.active, > a.active { animation: header_alert 0.5s 1 ease alternate; }

  .nav_alarm { right: 40px; }

  .nav_shoppingbag span,
  .sub-gnb_shoppingbag span { font-size: 11px; font-family: "ProximaNova-Semibold", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "맑은 고딕", sans-serif; font-weight: 500; text-align: center; color: #000; position: absolute; bottom: 13px; left: 0; width: 100%; }

  .sub-gnb { overflow: hidden; position: absolute; top: 0; right: 10px; }

  .sub-gnb > button, .sub-gnb > a { display: block; position: relative; width: 40px; }

  .sub-gnb > button img, .sub-gnb > a img { display: block; width: 100%; }

  .sub-gnb > button.active, .sub-gnb > a.active { animation: header_alert 0.5s 1 ease alternate; }

 /*  @keyframes header_alert { 60% { transform: scale(1.2); }
    70% { transform: scale(1); }
    80% { transform: scale(1.1); }
    100% { transform: scale(1); } } */

  .sub-gnb_live { float: left; width: 45px; margin-left: 0; margin-right: 5px; }

  .sub-gnb_live img { position: absolute; left: 0; top: 50%; z-index: 3; -webkit-transform: translateY(-50%); -moz-transform: translateY(-50%); -ms-transform: translateY(-50%); -o-transform: translateY(-50%); transform: translateY(-50%); }

  .sub-gnb_alarm { float: left; right: auto; }

  .sub-gnb_shoppingbag { float: left; right: auto; }

  .nav_back { left: 10px; }

  .nav_home_p { left: 50px; }

  .nav_home { right: 10px; }

  .nav_search { float: left; right: auto; }

  .notice_label { display: block; min-width: 13px; height: 13px; text-align: center; line-height: 13px; background-color: #ff6160; color: #fff; font-family: "ProximaNova-Semibold", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "맑은 고딕", sans-serif; font-weight: 500; font-size: 10px; -webkit-border-radius: 7px; -moz-border-radius: 7px; border-radius: 7px; position: absolute; top: 11px; right: 6px; -webkit-box-shadow: 2px 2px 0 0 rgba(0, 0, 0, 0.1); -moz-box-shadow: 2px 2px 0 0 rgba(0, 0, 0, 0.1); box-shadow: 2px 2px 0 0 rgba(0, 0, 0, 0.1); }

  .sub_header_search_area { display: none; position: absolute; top: 0; left: 0; width: 100%; padding: 0 10px; }

  .sub_header_search_area .input_text { width: 100%; }

  .sub_header_search_area .input_text input { height: 32px; -webkit-appearance: none; -webkit-border-radius: 0; }

  .sub_header_search_area.active { display: block; }
`;