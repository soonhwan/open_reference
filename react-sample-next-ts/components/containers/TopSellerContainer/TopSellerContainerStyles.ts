import styled from 'styled-components'

export const TopSellerContainerWrap = styled.div`
  border-top: 1px solid #f2f2f2;

  .top_seller-category_depth1 + .top_seller-category_depth2 { display: none; padding-bottom: 0.8125rem; margin-bottom: 1.25rem; border-bottom: 1px solid #f1f1f1; }

  .top_seller-category_depth1 + .top_seller-category_depth2.active { display: block; }

  .top_seller-category_depth1 + .top_seller-category_depth2 .topseller_swiper { display: none; }

  .top_seller-category_depth1 + .top_seller-category_depth2 .topseller_swiper.active { display: block; }

  .top_seller-category_depth1 + .top_seller-category_depth2 .swiper-container { padding: 0; }

  .top_seller-category_depth1 + .top_seller-category_depth2 .swiper-slide { width: auto; text-align: center; padding: 0 0.625rem; }

  .top_seller-category_depth1 + .top_seller-category_depth2 .swiper-slide:first-child { padding-left: 1.25rem; }

  .top_seller-category_depth1 + .top_seller-category_depth2 .swiper-slide:last-child { padding-right: 1.25rem; }

  .top_seller-category_depth1 + .top_seller-category_depth2 .swiper-slide.active button { color: #000; }

  .top_seller-category_depth1 + .top_seller-category_depth2 .swiper-slide button { font-family: "ProximaNova-Semibold", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "맑은 고딕", sans-serif; font-weight: 500; font-size: 0.875rem; color: #aaa; background: transparent; padding: 0; border-radius: 0; }

  .top_seller_list_btn { border-top: 1px solid #f2f2f2; }

  .top_seller_list_btn ul { font-size: 0; padding: 1.5625rem 0 1.875rem; }

  .top_seller_list_btn ul li { display: inline-block; width: 33.33%; text-align: center; }

  .top_seller_list_btn ul li:nth-child(2) { width: 33.34%; border-left: 1px solid #000; border-right: 1px solid #000; }

  .top_seller_list_btn ul li.active a { color: #0ec3b2; }

  .top_seller_list_btn ul li a { font-family: "ProximaNova-Semibold", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "맑은 고딕", sans-serif; font-weight: 500; font-size: 1rem; color: #000; line-height: 1.25rem; }

  .top_seller-sort { text-align: right; padding: 0 1.25rem 1rem; }

  .top_seller-sort .select { height: 1.125rem; }

  .top_seller-sort .select select { height: 1.125rem; }

  .top_seller-sort .select .select_box { height: 1.125rem; font-size: 0.75rem; line-height: 1.125rem; letter-spacing: -0.24px; padding-right: 1.3125rem; border: none; }

  .top_seller-sort .select .select_box:before { top: 1px; right: 0; width: 1rem; height: 1rem; background: url("//static.wconcept.co.kr/mobile/images/common/ico_select_category_open_16.png") no-repeat center / 100%; }

  .top_seller_list .sorting { padding: 5px 10px 0; margin-bottom: 15px; }

  .top_seller_list .sorting ul { font-size: 0; }

  .top_seller_list .sorting ul li { display: inline-block; border-right: 1px solid #4d4d4d; padding-right: 20px; margin-right: 20px; }

  .top_seller_list .sorting ul li:last-child { padding-right: 0; margin-right: 0; border-right: none; }

  .top_seller_list .sorting ul li.active a { color: #0ec3b2; }

  .top_seller_list .sorting ul li a { font-size: 0.875rem; color: #4c4c4c; line-height: 100%; }

  .top_seller_list .list ul li .rank { display: block; position: absolute; top: 0; left: 0; width: 30px; height: 30px; }

  .top_seller_list .list ul li .rank em { display: block; position: relative; z-index: 1; width: 100%; height: 100%; line-height: 30px; font-size: 14px; color: #fff; text-align: center; }

  .top_seller_list .list ul li .rank:before { content: ''; display: block; width: 100%; height: 100%; background-color: #7d7d7d; position: absolute; top: 0; left: 0; opacity: 1; }

  .top_seller_list .list ul li .rank:after { display: none; }
`;