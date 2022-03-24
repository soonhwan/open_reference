import styled from 'styled-components'

export const MainKvWrap = styled.div`
  &.main_kv { position: relative; overflow: hidden; margin-bottom: 3rem; }

  &.main_kv .swiper { max-height: 624px; height: calc(100vh - 150px); }

  &.main_kv a { height: 100%; }

  &.main_kv a:after {  display: block; content: ""; width: 100%; height: 100%; position: absolute; top: 0; left: 0; background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.5)); }

  /* 갤럭시 폴드 대응 */
  @media (max-width: 319px) {
    &.main_kv a img { height: 100%; -o-object-fit: cover; object-fit: cover; }
  }

  &.main_kv .swiper-pagination { position: absolute; top: 1.5rem; right: 1.25rem; font-size: 0.6875rem; line-height: 1rem; color: rgba(255, 255, 255, 0.6); letter-spacing: 0.55px; bottom: auto; left: auto; width: auto; }

  &.main_kv .swiper-pagination span { font-size: 0.75rem; }
  &.main_kv .swiper-pagination span.swiper-pagination-current { color: #fff; }

  &.main_kv .kv_text_box { position: absolute; bottom: 6.875rem; left: 0; color: #fff; width: 100%; padding: 0 11.2vw; word-break: keep-all; word-wrap: break-word; z-index: 1; }

  &.main_kv .kv_text_box .kv_sub_title { font-size: 3.733333vw; line-height: 4.8vw; letter-spacing: -0.074666667vw; margin-bottom: 3.2vw; }

  &.main_kv .kv_text_box .kv_title { font-family: "ProximaNova-Semibold", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "맑은 고딕", sans-serif; font-weight: 500; font-size: 8vw; line-height: 9.6vw; letter-spacing: -0.24vw; white-space: nowrap; overflow: hidden; }

  &.main_kv .kv_text_box .kv_desc { font-size: 3.733333333vw; line-height: 5.333333333vw; letter-spacing: -0.074666667vw; margin-top: 3.2vw; }

  @media (min-width: 458px) {
    &.main_kv .kv_text_box { padding: 0 51px; }

    &.main_kv .kv_text_box .kv_sub_title { font-size: 17px; line-height: 22px; letter-spacing: -0.341973px; margin-bottom: 14.5px; }

    &.main_kv .kv_text_box .kv_title { font-size: 36.5px; line-height: 44px; letter-spacing: -1.0992px; }

    &.main_kv .kv_text_box .kv_desc { font-size: 17px; line-height: 24.5px; letter-spacing: -0.341973px; margin-top: 14.5px; }
  }

  &.main_kv.iPhoneXapp .kv_text_box { bottom: 140px; }  
`;