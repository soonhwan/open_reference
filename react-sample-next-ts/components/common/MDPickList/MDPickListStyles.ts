import styled from 'styled-components'

export const MDPickListWrap = styled.div`
  &.swiper_wrap .swiper { display: none; }
  &.swiper_wrap .swiper.active { display: block; }

  .thumbnail_list li { display: block; float: left; margin-bottom: 1.25rem; }

  .thumbnail_list li .text p.title { font-family: "ProximaNova-Regular", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "맑은 고딕", sans-serif; font-weight: 400; line-height: 0.9375rem; }

  .thumbnail_list li.product_more { width: 32vw !important; height: 58.66666667vw; margin-right: 1.06666666vw !important; }

  .thumbnail_list li.product_more a { display: table; }

  .thumbnail_list li.product_more a .valign { display: table-cell; vertical-align: middle; }

  .thumbnail_list li.product_more i.more { display: block; width: 2rem; height: 2rem; background: url("//static.wconcept.co.kr/mobile/images/common/ico_more_orange_32.png") no-repeat; background-size: cover; margin: 0 auto; }

  .thumbnail_list li.product_more p { font-size: 0.875rem; line-height: 1rem; letter-spacing: -0.7px; margin-top: 0.625rem; text-align: center; color: #333333; }

  .thumbnail_list.slide_item2 li { width: 50%; padding-right: 0.625rem; margin-right: 0; }

  .thumbnail_list.slide_item2 li .heart { right: 0.9375rem; }

  .thumbnail_list.slide_item2 li { padding-right: 0.125rem; margin-bottom: 1.5rem; }

  .thumbnail_list.slide_item2 li:nth-child(2n) { padding-left: 0.125rem; padding-right: 0; }

  .thumbnail_list.slide_item2 li a .img { margin-bottom: 0.75rem; }

  .thumbnail_list { white-space: nowrap; font-size: 0; padding-left: 0.625rem; margin-bottom: -2.5rem; overflow: hidden; }

  .thumbnail_list { margin-bottom: 0; padding: 0 1.25rem 1.25rem; }

  .thumbnail_list:after { display: block; clear: both; content: ''; }

  .thumbnail_list li { width: 8.4375rem; margin-right: 10px; margin-bottom: 40px; display: inline-block; position: relative; vertical-align: top; }

  .thumbnail_list li a { display: block; width: 100%; height: 100%; position: relative; }

  .thumbnail_list li .img { margin-bottom: 0.5rem; position: relative; overflow: hidden; background: url("//static.wconcept.co.kr/mobile/images/common/onerror_img_product.png") no-repeat center / 100%; height: 58.66666667vw; }

  .thumbnail_list li .img:after { display: block; content: ""; width: 100%; height: 100%; position: absolute; left: 0; top: 0; background-color: rgba(0, 0, 0, 0.04); }

  .thumbnail_list li .img img { display: block; width: 100%; height: 100%;-o-object-fit:cover;object-fit: cover;}

  .thumbnail_list li .img .myheart_coupon { width: 100%; color: #fff; font-size: 11px; text-align: center; display: block; position: absolute; bottom: 0; left: 0; line-height: 19px; height: 19px; }

  .thumbnail_list li .img .myheart_coupon em { display: block; width: 100%; height: 100%; position: absolute; top: 0; left: 0; z-index: 1; }

  .thumbnail_list li .img .myheart_coupon:before { opacity: .7; content: ''; display: block; position: absolute; top: 0; left: 0; background-color: #0ec3b2; height: 100%; width: 100%; }

  .thumbnail_list li .text { padding: 0 0.625rem 0 0; }

  .thumbnail_list li .text p.title { font-family: "ProximaNova-Semibold", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "맑은 고딕", sans-serif; font-weight: 500; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; color: #000; font-size: 0.75rem; margin-bottom: 0.25rem; text-align: left; line-height: 100%; }

  .thumbnail_list li .text p.price:after { display: block; clear: both; content: ''; }

  .thumbnail_list li .text p.price strong, .thumbnail_list li .text p.price em { display: block; font-size: 0.875rem; }

  .thumbnail_list li .text p.price strong { float: left; font-family: "ProximaNova-Semibold", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "맑은 고딕", sans-serif; font-weight: 500; color: #000; margin-right: 0.5rem; }

  .thumbnail_list li .text p.price em { float: right; color: #fa5500; }

  .thumbnail_list li .text p.price span { display: block; float: left; font-size: 0.75rem; color: #aaaaaa; text-decoration: line-through; }

  .thumbnail_list li .text p.front { font-size: 0.75rem; color: #777777; margin-bottom: 0.25rem; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }

  .thumbnail_list li .text p.detail { font-size: 0.75rem; line-height: 1rem; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; color: #777777; margin-bottom: 0.625rem; }

  .thumbnail_list li .text .labels { font-size: 0; margin-top: 0.5625rem; line-height: 100%; height: 1.188rem; }

  .thumbnail_list li .text .labels span { display: inline-block; height: 1.188rem; width: 1.875rem; margin-right: 0.1875rem; background: url("//static.wconcept.co.kr/mobile/images/common/label_20180821.png") 0 0 no-repeat; background-size: 23.44rem; }

  .thumbnail_list li .text .labels span img { width: 100%; }

  .thumbnail_list li .text .labels .reservation { background-position: 0 0; }

  .thumbnail_list li .text .labels .coupon { background-position: -3.125rem 0; }

  .thumbnail_list li .text .labels .exclusive { background-position: -14.06rem 0; }

  .thumbnail_list li .text .labels .limit { background-position: -10.94rem 0; }

  .thumbnail_list li .text .labels .sold_out { width: 3.75rem; background-position: -6.25rem 0; }

  .thumbnail_list li .text .labels .coupon_my { width: 5rem; background-position: -31.88rem -7.5rem; }

  .thumbnail_list li .text .labels .lb-funding { background-position: -17.19rem 0; }

  .thumbnail_list li .text .labels .lb-set { background-position: -20.31rem 0; }

  .thumbnail_list li .text .labels .lb-pre_order { background: url("//static.wconcept.co.kr/mobile/images/common/pre_order_tag.png") 0 0 no-repeat; width: 3rem; background-size: cover; }

  .thumbnail_list li .rank { display: block; position: absolute; top: 0; left: 0; }

  .thumbnail_list li .rank em { display: block; position: absolute; top: 0; left: 0; width: 1.25rem; height: 1.5625rem; font-size: 0.875rem; color: #fff; line-height: 1.5625rem; text-align: center; }

  .thumbnail_list li .rank:before { content: ''; display: block; width: 100%; height: 1.0625rem; opacity: .6; background-color: #ef544d; }

  .thumbnail_list li .rank:after { content: ''; display: block; width: 0; height: 0.5rem; border-left: 0.625rem solid transparent; border-right: 0.625rem solid transparent; border-top: 0.5rem solid #ef544d; opacity: .6; }

  .thumbnail_list li .discount { display: block; position: absolute; top: 0; left: 0.3125rem; width: 2.25rem; height: 2.25rem; background: url("//static.wconcept.co.kr/mobile/images/men/bg-mmain-rank.png") 0 0 no-repeat; background-size: 100%; z-index: 1; font-family: "ProximaNova-Semibold", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "맑은 고딕", sans-serif; font-weight: 500; font-size: 0.875rem; color: #fff; text-align: center; line-height: 2.25rem; }

  @media screen and (min-width: 1024px) { 
    .thumbnail_list li { width: 25%; } 
  }

  .thumbnail_list.slide_item2 li { width: 50%; padding-right: 0.625rem; margin-right: 0; }

  .thumbnail_list.slide_item2 li .heart { right: 0.9375rem; }

  .thumbnail_list.nomargin { margin-bottom: 0; }

  .thumbnail_list.view22 li { width: 9.375rem; }

  .thumbnail_list.view29 li { width: 7.3125rem; }

  .swiper-pagination-bullet { width: 6px; height: 6px; display: inline-block; border-radius: 100%; background: #000; opacity: 0.1; }
  .swiper-pagination-bullet-active { opacity: 1; background: #000; }

  .img span.mask_funding,
  .img span.mask_pre_order { display: block; position: absolute; bottom: 0; right: 0; z-index: 1; text-indent: -9999px; font-size: 0; }

  .img span.mask_funding { background: url("//static.wconcept.co.kr/mobile/images/common/tag_funding_24.png") center right no-repeat; background-size: contain; width: 4.563rem; height: 1.5rem; }

  .img span.mask_pre_order { background: url("//static.wconcept.co.kr/mobile/images/common/tag_pre-order_24.png") center right no-repeat; background-size: contain; width: 5.313rem; height: 1.5rem; }

  .img span.mask_funding.mask_funding_s { background: url("//static.wconcept.co.kr/mobile/images/common/tag_funding_s.png") center right no-repeat; background-size: contain; width: 1.5rem; }

  .img span.mask_pre_order.mask_pre_order_s { background: url("//static.wconcept.co.kr/mobile/images/common/tag_pre-order_s.png") center right no-repeat; background-size: contain; width: 1.5rem; }
`;