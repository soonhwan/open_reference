import styled from 'styled-components'

export const TopSellerSortWrap = styled.div`
  .select { position: relative; height: 2.5rem; display: inline-block; background-color: #fff; }

  .select select { display: block; height: 2.5rem; width: 100%; position: absolute; top: 0; left: 0; opacity: 0; }

  .select select:focus + .select_box { border-color: #333; }

  .select .select_box { display: block; border: 1px solid #dddddd; font-size: 0.875rem; line-height: 2.375rem; letter-spacing: -0.28px; height: 2.5rem; padding: 0 1.875rem 0 0.9375rem; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; padding-top: 1px; color: #888888; }

  .select .select_box.readonly { background: #fafafa; color: #777; -webkit-text-fill-color: #777; border-color: #eaeaea; } 

  .select .select_box:before { content: ''; display: block; width: 0.75rem; height: 0.75rem; background: url("//static.wconcept.co.kr/mobile/images/common/icon-select.png") 0 0 no-repeat; background-size: 100%; position: absolute; top: 0.8125rem; right: 0.9375rem; }

  .select.full { display: block; width: 100%; }

  .select select:disabled + .select_box { border-color: #eaeaea; background-color: #fafafa; color: #ccc; }

  .select select:disabled + .select_box:before { background: url("//static.wconcept.co.kr/mobile/images/common/ico_select_box_down_d_12.png") no-repeat; background-size: 100%; }

  &.top_seller-sort { text-align: right; padding: 0 1.25rem 1rem; }

  &.top_seller-sort .select { height: 1.125rem; }

  &.top_seller-sort .select select { height: 1.125rem; }

  &.top_seller-sort .select .select_box { height: 1.125rem; font-size: 0.75rem; line-height: 1.125rem; letter-spacing: -0.24px; padding-right: 1.3125rem; border: none; }

  &.top_seller-sort .select .select_box:before { top: 1px; right: 0; width: 1rem; height: 1rem; background: url("//static.wconcept.co.kr/mobile/images/common/ico_select_category_open_16.png") no-repeat center / 100%; }
  
`;