import styled from 'styled-components'

interface IProps {
  className?: string;
}

export const MainLayoutWrap = styled.div<IProps>`
  #main_pages { width: 100%; overflow: hidden; }

  #main_pages.fixed { padding-top: 2.9375rem; }

  #main_pages #brand { padding: 0; }

  #main_pages.fixed .main_page_pager_wrap, #main_pages.fixed .sortable_wrap { position: fixed; top: 0; left: 0; width: 100%; z-index: 30; background-color: #fff; box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1); }

  #main_pages .section_title { margin-bottom: 1rem; }

  #main_pages .section_title h3 { width: 100%; font-size: 1.5625rem; color: #000; text-align: center; text-transform: uppercase; line-height: normal; }

  #main_pages .section_title a { color: inherit; }

  #main_pages .section_title a span { color: #ea5532; }

  #main_pages .section_title.square_more { margin-bottom: 0.625rem; position: relative; }

  #main_pages .section_title.square_more h3 { line-height: 2.5rem; }

  #main_pages .section_title.square_more .more { width: 2.5rem; height: 2.5rem; position: absolute; top: 0; right: 0.625rem; z-index: 4; margin-top: 0; border: 1px solid #000; background-color: #fff; }

  #main_pages .section_title.square_more .more:after, 
  #main_pages .section_title.square_more .more:before { top: 50%; left: 50%; transform: translate(-50%, -50%); margin-top: 0; }

  #main_pages .section_title .more { display: inline-block; position: relative; width: 1.0625rem; height: 1.0625rem; margin-top: -0.25rem; font-size: 0; text-indent: -9999px; }

  #main_pages .section_title .more:after, #main_pages .section_title .more:before { content: ""; display: block; background-color: #000; position: absolute; }

  #main_pages .section_title .more:before { width: 1px; height: 1.0625rem; top: 0; left: 50%; margin-left: -0.5px; }

  #main_pages .section_title .more:after { width: 1.0625rem; height: 1px; top: 50%; left: 0; margin-top: -0.5px; }

  #main_pages .section_title.sub_text { padding-top: 1.5625rem; margin-bottom: 2.0625rem; }

  #main_pages .section_title.sub_text p { text-align: center; color: #4c4c4c; font-size: 0.75rem; }

  #main_pages .section_sub_title { padding: 0 0.625rem; margin-bottom: 0.75rem; }

  #main_pages .section_sub_title h4 { font-size: 1.1875rem; color: #000; text-transform: uppercase; }

  #main_pages .section_tab { font-size: 0; text-align: center; position: relative; display: inline-block; left: 50%; margin-top: -0.25rem; margin-bottom: 1.25rem; height: 1.25rem; }

  #main_pages .section_tab:after { display: block; clear: both; content: ''; }

  #main_pages .section_tab li { float: left; font-size: 0.875rem; color: #999; margin-right: 1.875rem; }

  #main_pages .section_tab li:nth-last-child(2) { margin-right: 0; }

  #main_pages .section_tab li button { text-transform: uppercase; }

  #main_pages .section_tab li.active { font-family: "ProximaNova-Semibold", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "맑은 고딕", sans-serif; font-weight: 500; color: #000; }

  #main_pages .section_tab li.highlighter { margin-left: -0.1875rem; margin-right: 0; }

  #main_pages .section_tab_content { display: none; }

  #main_pages .section_tab_content.active { display: block; }

  #main_pages .section_top_banner { padding: 0 0.625rem; text-align: center; margin-bottom: 3.125rem; }

  #main_pages .section_top_banner img { display: block; width: 100%; }

  #main_pages .section_top_banner h3 { font-family: "ProximaNova-Semibold", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "맑은 고딕", sans-serif; font-weight: 500; color: #000; font-size: 1.25rem; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; padding-top: 1px; margin: 0.6875rem 0 0.4375rem; }

  #main_pages .section_top_banner p { color: #4c4c4c; font-size: 0.75rem; padding-top: 1px; vertical-align: middle; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; padding-top: 1px; }

  #main_pages .highlighter { content: ''; display: block; position: absolute; bottom: 0; left: 0; height: 0.125rem; box-sizing: content-box; padding: 0 0.1875rem; width: 1.5625rem; margin-left: -0.1875rem; background-color: #000; transition: all 0.2s ease-out; }

  #main_pages .icon_mov { position: relative; }

  #main_pages .icon_mov:before { content: ''; display: block; width: 43px; height: 43px; margin: -1.375rem 0 0 -1.375rem; background: url("//static.wconcept.co.kr/mobile/images/common/spr-common.png") 0 -25px no-repeat; background-size: 250px; position: absolute; top: 50%; left: 50%; }

  #main_pages .icon_mov.small:before { width: 25px; height: 25px; margin: -0.8125rem 0 0 -0.8125rem; background: url("//static.wconcept.co.kr/mobile/images/common/spr-common.png") 0 -100px no-repeat; background-size: 250px; position: absolute; bottom: 0.625rem; left: 1.5rem; top: auto; }

  #main_pages .ix-thumbs { text-align: center; font-size: 0; line-height: 100%; }

  #main_pages .ix-thumbs .ix-thumb { display: inline-block; margin: 0 0.15625rem; }

  #main_pages .ix-thumbs .ix-thumb.active a { background-color: #000; }

  #main_pages .ix-thumbs a { display: block; overflow: hidden; width: 0.5rem; height: 0.5rem; -webkit-border-radius: 0.5rem; -moz-border-radius: 0.5rem; border-radius: 0.5rem; background-color: #e5e5e5; }

  #main_pages .main_top_banner a { display: block; }

  #main_pages .main_top_banner a:after { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.2); }

  #main_pages .main_top_banner a img { display: block; width: 100%; }

  #main_pages .main_top_banner a .text { color: #fff; padding: 0 1.875rem; z-index: 1; }

  #main_pages .main_top_banner a .text .title { font-family: "ProximaNova-Semibold", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "맑은 고딕", sans-serif; font-weight: 500; font-size: 2.5rem; line-height: 2.5rem; }

  #main_pages .main_top_banner a .text .desc { font-size: 1rem; line-height: 1.25rem; letter-spacing: -0.32px; margin: 0.625rem 0 1.25rem; }

  #main_pages .main_top_banner a .text span { font-family: "ProximaNova-Light","Apple SD Gothic Neo","Noto Sans KR","Malgun Gothic","맑은 고딕", sans-serif;  display: inline-block; text-transform: uppercase; font-size: 1rem; color: #fff; width: 7.875rem; line-height: 1.875rem; border: 1px solid rgba(255, 255, 255, 0.7); }

  #main_pages .main_top_banner .swiper-pagination { left: auto; bottom: 1.25rem; right: 1.25rem; background: rgba(0, 0, 0, 0.2); width: 3rem; line-height: 1.5rem; text-align: center; color: #fff; font-size: 0.75rem; -webkit-border-radius: 1.875rem; -moz-border-radius: 1.875rem; border-radius: 1.875rem; }

  &.common-hide {
    #header {
      transform: translateY(-50px);
    }

    #bottom_nav, .btn_top {
      transform: translateY(67px);
    }
  }
`;