import styled from 'styled-components'

export const TopSellerCategoryDepth2Wrap = styled.div`
  .round_tab.swiper { padding: 1.25rem 0 1.875rem; background: #fff; }

  .round_tab .swiper-slide { width: auto; text-align: center; padding: 0 0.1875rem; }

  .round_tab .swiper-slide:first-child { padding-left: 1.25rem; }

  .round_tab .swiper-slide:last-child { padding-right: 1.25rem; }

  .round_tab .swiper-slide button { border-radius: 1.25rem; font-family: "ProximaNova-Semibold", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "맑은 고딕", sans-serif; font-weight: 500; font-size: 0.875rem; padding: 0.5rem 0.875rem; background: #f9f9f9; color: #aaa; }

  /* .round_tab .swiper-slide.active button { background: #000; color: #fff; } */

  &.top_seller-category_depth2 { padding-bottom: 0.8125rem; margin-bottom: 1.25rem; border-bottom: 1px solid #f1f1f1; }

  &.top_seller-category_depth2 .swiper { padding: 0; }

  &.top_seller-category_depth2 .swiper-slide { width: auto; text-align: center; padding: 0 0.625rem; }

  &.top_seller-category_depth2 .swiper-slide:first-child { padding-left: 1.25rem; }

  &.top_seller-category_depth2 .swiper-slide:last-child { padding-right: 1.25rem; }

  &.top_seller-category_depth2 .swiper-slide.active button { color: #000; }

  &.top_seller-category_depth2 .swiper-slide button { font-family: "ProximaNova-Semibold", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "맑은 고딕", sans-serif; font-weight: 500; font-size: 0.875rem; color: #aaa; background: transparent; padding: 0; border-radius: 0; }

`;