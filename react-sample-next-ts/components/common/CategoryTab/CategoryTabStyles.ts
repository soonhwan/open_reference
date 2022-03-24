import styled from 'styled-components'

export const CategoryTabWrap = styled.div`
  .category_tab { margin-bottom: 1.125rem; padding-right: 1.25rem; }

  .category_tab .swiper-wrapper { overflow: visible; margin-left: 1.25rem !important; }

  .category_tab .swiper-wrapper .swiper-slide { width: auto !important; height: 1.25rem; font-family: "ProximaNova-Semibold", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "맑은 고딕", sans-serif; font-weight: 500; font-size: 0.875rem; color: #aaaaaa; margin-right: 1.5rem; }

  .category_tab.kr .swiper-wrapper .swiper-slide { letter-spacing: -0.28px; }

  .category_tab .swiper-wrapper .swiper-slide.active { 
    color: #000; 
    
    &::after {
      content: "";
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #000;
    }
  }

  .category_tab .swiper-wrapper .highlighter { content: ''; display: block; position: absolute; bottom: 0; left: 0; height: 0.125rem; box-sizing: content-box; padding: 0  0.5px; width: 1.5625rem; margin: 0; background-color: #000; transition: all 0.2s ease-out; }

`;