import styled from 'styled-components'

export const PaginationWrap = styled.div`
  font-size: 0; text-align: center; margin-top: 1.875rem;

  a { height: 1.25rem; line-height: 1.25rem; font-family: "ProximaNova-Light", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "맑은 고딕", sans-serif; font-weight: 400; font-size: 0.9375rem; color: #000; width: 2.188rem; display: inline-block; position: relative; }

  a.active { font-family: "ProximaNova-Semibold", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "맑은 고딕", sans-serif; font-weight: 500; font-size: 1.063rem; color: #000; }

  a.prev, a.next { width: 1.25rem; overflow: hidden; text-indent: -9999px; background: url("//static.wconcept.co.kr/mobile/images/common/spr-common.png") 0 -4.688rem no-repeat; background-size: 15.63rem; }

  a.prev:before, a.next:before { display: none; }

  a.next { background-position: -1.563rem -4.688rem; }

  a:nth-child(2):before { display: none; }
`;