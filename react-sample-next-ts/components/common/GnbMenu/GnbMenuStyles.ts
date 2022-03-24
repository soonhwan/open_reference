import styled from 'styled-components'

export const GnbMenuWrap = styled.div`
  width: 100%; overflow: hidden;

  .gnb_menu { position: static; width: 100%; height: 3rem; background-color: #fff; transition: top 0.3s ease; -webkit-transition: top 0.3s ease; overflow: visible; }

  .gnb_menu.top50 { top: 50px !important; }

  .gnb_menu .swiper-wrapper { display: -webkit-box; display: -ms-flexbox; display: flex; }

  .gnb_menu .swiper-wrapper .swiper-slide { margin: 0 auto; width: auto; padding: 0 0.6875rem; }

  .gnb_menu .swiper-wrapper .swiper-slide:first-child { padding-left: 1.25rem; }

  .gnb_menu .swiper-wrapper .swiper-slide:last-child { padding-right: 1.25rem; }

  .gnb_menu .swiper-wrapper .swiper-slide a { display: block; font-family: "ProximaNova-Bold", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "맑은 고딕", sans-serif; font-weight: 700; font-size: 0.875rem; line-height: 3rem; margin: 0 auto; white-space: nowrap; text-align: center; position: relative; color: #000; }

  .gnb_menu .swiper-wrapper .swiper-slide a.dot:before { display: block; content: ""; width: 0.25rem; height: 0.25rem; border-radius: 50%; background-color: #fa5500; position: absolute; top: 1rem; left: -0.375rem; }

  .gnb_menu .swiper-wrapper .swiper-slide.active a:after { display: block; content: ""; width: 100%; height: 2px; background: #000; position: absolute; bottom: 0; left: 0; }
`;