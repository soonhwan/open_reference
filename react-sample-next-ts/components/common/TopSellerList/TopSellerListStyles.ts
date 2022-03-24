import styled from 'styled-components'

export const TopSellerListWrap = styled.div`
  .thumbnail_list { white-space: nowrap; font-size: 0; padding-left: 0.625rem; margin-bottom: -2.5rem; overflow: hidden; }

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

  .thumbnail_list li .text .react { display: flex; }

  .thumbnail_list li .text .react > div { position: relative; font-size: 0.75rem; line-height: 0.8125rem; color: #777; }

  .thumbnail_list li .text .react > div:nth-child(2) { padding-left: 0.5rem; margin-left: 0.5rem; }

  .thumbnail_list li .text .react > div:nth-child(2):after { content: ""; display: block; width: 1px; height: 0.75rem; background: #eaeaea; position: absolute; top: 50%; left: 0; margin-top: -0.375rem; }

  .thumbnail_list li .text .react > div span { position: relative; padding-left: 1rem; }

  .thumbnail_list li .text .react > div span:after { content: ""; display: block; width: 0.75rem; height: 0.75rem; position: absolute; top: 50%; left: 0; margin-top: -0.375rem; }

  .thumbnail_list li .text .react > div.review_count span:after { background: url("//static.wconcept.co.kr/mobile/images/common/ico_star_fill_b_12.png") no-repeat center / 100%; }

  .thumbnail_list li .text .react > div.like_count span:after { background: url("//static.wconcept.co.kr/mobile/images/common/ico_heart_fill_b_12.png") no-repeat center / 100%; }

  .thumbnail_list li .text .react > div em { padding-right: 0.25rem; }

  @media screen and (min-width: 1024px) { 
    .thumbnail_list li { width: 25%; } 
  }

  .thumbnail_list.list2 { padding: 0 1.125rem; }

  .thumbnail_list.list2 li { display: block; float: left; width: 50%; padding: 0 0.125rem; margin: 0 0 2.5rem 0; }

  .thumbnail_list.list2 li .heart { top: 0.5rem; right: 0.625rem; }

  .thumbnail_list.list2 li .img { margin-bottom: 0.75rem; }

  .thumbnail_list.list2 li .text { height: 8rem; }

  .thumbnail_list.list2 li .text .text_wrap { height: 3.625rem; }

  .thumbnail_list.list2 li .text .price { margin-bottom: 0.625rem; }

  .thumbnail_list.list2 li .text .labels { margin: 0 0 0.5625rem; height: auto; }

  .thumbnail_list.list1 { padding: 0 1.25rem; margin-bottom: 0; }

  .thumbnail_list.list1 li { display: block; width: 100%; margin: 0 0 1.25rem 0; }

  .thumbnail_list.list1 li:last-child { margin-bottom: 0; }

  .thumbnail_list.list1 li a:after,
  .thumbnail_list.big_pic li a .text:after { display: block; clear: both; content: ''; }

  .thumbnail_list.list1 li .heart { top: 0.1875rem; }

  .thumbnail_list.list1 li .img { float: left; width: 32.5%; height: 38.66666667vw; overflow: hidden; vertical-align: top; margin-bottom: 0; }

  .thumbnail_list.list1 li .img .inner-wrap { position: relative; }

  .thumbnail_list.list1 li .text { float: left; width: 67.5%; overflow: hidden; vertical-align: top; position: relative; padding: 0.375rem 0 0 1rem; }

  .thumbnail_list.list1 li .text p { white-space: normal; }

  .thumbnail_list.list1 li .text p.title { padding-right: 1.625rem; white-space: nowrap; }

  .thumbnail_list.list1 li .text p.detail { max-height: 2.25rem; }

  .thumbnail_list.list1 li .text p.front { line-height: 1rem; }

  .thumbnail_list.list1 li .text .labels { height: auto; margin: 0.625rem 0 0 0; }

  .thumbnail_list.list1 li .text .react { margin-top: 0.625rem; }

  .thumbnail_list.big_pic { padding: 0 1.25rem; }

  .thumbnail_list.big_pic li { display: block; width: 100%; margin-bottom: 2.5rem; }

  .thumbnail_list.big_pic li .heart { right: 0.5rem; top: 0.5rem; }

  .thumbnail_list.big_pic li .img { margin-bottom: 12px; height: 118.9333333vw; }

  .thumbnail_list.big_pic li .text { padding: 0; }

  .thumbnail_list.big_pic li .text p.price { height: 0.9375rem; margin-bottom: 0.625rem; }

  .thumbnail_list.big_pic li .text p.price em { float: left; margin-left: 0.625rem; }

  .thumbnail_list.big_pic li .text .labels { height: auto; margin: 0 0 0.625rem 0; }

  .thumbnail_list.slide_item2 li { width: 50%; padding-right: 0.625rem; margin-right: 0; }

  .thumbnail_list.slide_item2 li .heart { right: 0.9375rem; }

  .thumbnail_list.nomargin { margin-bottom: 0; }

  .thumbnail_list.view22 li { width: 9.375rem; }

  .thumbnail_list.view29 li { width: 7.3125rem; }

  .thumbnail_list_wide ul li { padding: 0 0.625rem; margin-bottom: 1.25rem; }

  .thumbnail_list_wide ul li:last-child { margin-bottom: 0; }

  .thumbnail_list_wide ul li a { display: table; vertical-align: top; }

  .thumbnail_list_wide ul li .img { display: table-cell; width: 10.8125rem; vertical-align: top; }

  .thumbnail_list_wide ul li .img img { display: block; width: 100%; }

  .thumbnail_list_wide ul li .text { display: table-cell; padding: 0.3125rem 0.9375rem 0 0.9375rem; vertical-align: top; }

  .thumbnail_list_wide ul li .text h3 { font-family: "ProximaNova-Semibold", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "맑은 고딕", sans-serif; font-weight: 500; font-size: 1rem; line-height: 1.0625rem; color: #000; margin-bottom: 0.3125rem; }

  .thumbnail_list_wide ul li .text p { font-size: 0.75rem; color: #4c4c4c; line-height: 1.0625rem; }

  .img span.mask_funding,
  .img span.mask_pre_order { display: block; position: absolute; bottom: 0; right: 0; z-index: 1; text-indent: -9999px; font-size: 0; }

  .img span.mask_funding { background: url("//static.wconcept.co.kr/mobile/images/common/tag_funding_24.png") center right no-repeat; background-size: contain; width: 4.563rem; height: 1.5rem; }

  .img span.mask_pre_order { background: url("//static.wconcept.co.kr/mobile/images/common/tag_pre-order_24.png") center right no-repeat; background-size: contain; width: 5.313rem; height: 1.5rem; }

  .img span.mask_funding.mask_funding_s { background: url("//static.wconcept.co.kr/mobile/images/common/tag_funding_s.png") center right no-repeat; background-size: contain; width: 1.5rem; }

  .img span.mask_pre_order.mask_pre_order_s { background: url("//static.wconcept.co.kr/mobile/images/common/tag_pre-order_s.png") center right no-repeat; background-size: contain; width: 1.5rem; }

  .heart { display: block; width: 1.25rem; height: 1.25rem; background-size: 100%; text-indent: -9999px; z-index: 1; position: absolute; top: 0; right: 0; }

  .heart:before { content: ''; display: block; width: 1rem; height: 1rem; background: url("//static.wconcept.co.kr/mobile/images/common/ico_heart_n_16.png") 0 0 no-repeat; background-size: 100%; opacity: 1; position: absolute; top: 50%; left: 50%; margin: -0.5rem 0 0 -0.5rem; transition: all 0.3s ease; }

  .heart:after { content: ''; display: block; width: 1rem; height: 1rem; background: url("//static.wconcept.co.kr/mobile/images/common/ico_heart_a_16.png") 0 0 no-repeat; background-size: 100%; opacity: 0; position: absolute; top: 50%; left: 50%; margin: -0.5rem 0 0 -0.5rem; }

  .heart.active:before { opacity: 0; }

  .heart.active:after { animation: heart 0.3s 1 cubic-bezier(0.875, 0.085, 0.625, 0.965) alternate; opacity: 1; }

  .thumbnail_list li .text .review_box{display:inline-block}
  .thumbnail_list li .text .review_box:after{display:block;content:"";clear:both}
  .thumbnail_list li .text .graph{width:3.75rem;height:.625rem;background:url("//static.wconcept.co.kr/mobile/images/common/ico_evaluate_empty.png") no-repeat;background-size:cover;float:left;margin:.125rem .375rem 0 0}
  @media(max-width:359px){
    .thumbnail_list li .text .graph{margin:.0625rem .375rem 0 0}}
    .thumbnail_list li .text .graph .inner{display:block;width:100%;height:100%;background:url("//static.wconcept.co.kr/mobile/images/common/ico_evaluate_fillx.png") no-repeat;background-size:cover;overflow:hidden;text-indent:-9999px}
    .thumbnail_list li .text .review_count{float:left;font-family:"ProximaNova-Light","Apple SD Gothic Neo","Noto Sans KR","Malgun Gothic","맑은 고딕",sans-serif;font-weight:400;font-size:.75rem;color:#777}
`;