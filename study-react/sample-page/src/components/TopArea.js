import React, { Component } from 'react';

class TopArea extends Component {
  state = {
    topList : [
      {
        link:'https://www.priviatravel.com/promotion/sectionEvent/2793/',
        title : '현대카드 PRIVIA 항공 1',
        detail : '좋은 내용이니 이용해보셈 1'
      }, 
      {
        link:'https://www.priviatravel.com/promotion/sectionEvent/2793/',
        title : '현대카드 PRIVIA 항공 2',
        detail : '좋은 내용이니 이용해보셈 2'
      }, 
      {
        link:'https://www.priviatravel.com/promotion/sectionEvent/2793/',
        title : '현대카드 PRIVIA 항공 3',
        detail : '좋은 내용이니 이용해보셈 3'
      }, 
      {
        link:'https://www.priviatravel.com/promotion/sectionEvent/2793/',
        title : '현대카드 PRIVIA 항공 4',
        detail : '좋은 내용이니 이용해보셈 4'
      }, 
      {
        link:'https://www.priviatravel.com/promotion/sectionEvent/2793/',
        title : '현대카드 PRIVIA 항공 5',
        detail : '좋은 내용이니 이용해보셈 5'
      }
    ]
  } 

  render() {
    const {topList} = this.state;
    const listArea = topList.map((item,index) =>{
      return (
        <li key={index}>
          <a href={item.link}><span className="tit">{item.title}</span></a>
          <div className="tasp-detail">
            <p>{item.detail}</p>
          </div>
        </li>
        )
    });
    return (
      <div className="w-tas-promotion ly-inner"> 
        <h2 className="a11y">섹션별 프로모션 영역</h2> 
        <div className="w-tasp-list"> 
          <ul className="tasp-list">{listArea}</ul> 
        </div> 
        </div>
    );
  };
};

export default TopArea; 

/* 
<li> <a href="https://www.priviatravel.com/promotion/sectionEvent/2793/"> <span className="tasp-tit"> <span className="label">항공</span> <span className="tit">현대카드 PRIVIA 항공<br />조기 예약 특별 이벤트</span> </span> </a> 
            <div className="tasp-detail"> 
            <p><strong>특별 혜택&nbsp;:</strong><br /> <span >&nbsp; 10만원/2만원/5천원</span> </p> 
            <p>&nbsp; 할인 쿠폰 제공 <br /> </p> 
            <p><strong>기본 혜택&nbsp;: </strong><br /> &nbsp; 카드별 <span >7%, 10% </span>청구 할인<br /> &nbsp; + 2 ~ 3개월 무이자할부<br /> <strong> 출발 기간 : </strong><br /> ~ 2019. 03. 31</p> 
            <p><strong>예약/발권 기간 :</strong></p> 
            <p>&nbsp; 2018. 12. 21 오후 5시까지</p> 
            <span className="btn-base bbr-st1 b-tasp-more"><a href="https://www.priviatravel.com/promotion/sectionEvent/2793/" target="_self">자세히 보기</a></span> 
            </div> </li> 
          <li> <a href="http://www.priviatravel.com/promotion/sectionEvent/2792/"> <span className="tasp-tit"> <span className="label">호텔</span> <span className="tit">현대카드 PRIVIA 해외호텔<br />일본 오사카 2만원 쿠폰 이벤트</span> </span> </a> 
            <div className="tasp-detail"> 
            <p><strong>특별 혜택&nbsp;:</strong><br /> <span >&nbsp; 20만원 <span >이상 결제 시</span></span></p> 
            <p><span >&nbsp;&nbsp;2만원 <span >할인 쿠폰 제공</span><span >&nbsp; </span><br /></span></p> 
            <p><strong>기본 혜택&nbsp;:&nbsp;</strong><br /> &nbsp;&nbsp; <span >5% </span>추가 할인&nbsp;+ <span >10% </span>M포인트 사용<br /> &nbsp;&nbsp; +&nbsp;무이자할부<br /> <strong>예약 기간 : </strong><br />&nbsp;&nbsp; 2018. 11. 26 ~&nbsp;12. 16</p> 
            <p><strong>투숙&nbsp;기간 :</strong></p> 
            <p>&nbsp;&nbsp; 2018. 11. 26 ~ 2019. 02. 11</p> 
            <p><strong>대상&nbsp;:</strong></p> 
            <p>&nbsp;&nbsp; 오사카 호텔 신규 예약 및 </p> 
            <p>&nbsp;&nbsp; 결제 완료 회원</p> 
            <span className="btn-base bbr-st1 b-tasp-more"><a href="http://www.priviatravel.com/promotion/sectionEvent/2792/" target="_self">자세히 보기</a></span> 
            </div> </li> 
          <li> <a href="https://www.priviatravel.com/promotion/sectionEvent/2736/"> <span className="tasp-tit"> <span className="label">자유여행</span> <span className="tit">낭만의 나라, 이탈리아 자유여행<br />할인 쿠폰 이벤트</span> </span> </a> 
            <div className="tasp-detail"> 
            <p><strong>특별&nbsp;혜택 :</strong><span>&nbsp;</span></p> 
            <p><span>&nbsp;&nbsp;3만원</span> 할인 쿠폰 제공<br /></p> 
            <p><strong>기본&nbsp;혜택 :</strong><span>&nbsp;</span></p> 
            <p><span>&nbsp; 7%</span> 할인 + <span >10%</span> M포인트 사용</p> 
            <p>&nbsp; + 무이자할부</p> 
            <p><strong>예약 기간 :</strong> </p> 
            <p>&nbsp; ~ 2018. 12.&nbsp;20 (오후 5시까지)</p> 
            <span className="btn-base bbr-st1 b-tasp-more"><a href="https://www.priviatravel.com/promotion/sectionEvent/2736/" target="_self">자세히 보기</a></span> 
            </div> </li> 
          <li> <a href="https://www.priviatravel.com/promotion/sectionEvent/2178/"> <span className="tasp-tit"> <span className="label">투어&amp;액티비티</span> <span className="tit">PRIVIA 투어&amp;액티비티<br />방콕 만원의 행복 프로모션</span> </span> </a> 
            <div className="tasp-detail"> 
            <p><strong>특별 혜택 :</strong> </p> 
            <p>&nbsp; 대상 상품 중 2개 이상 예약 시 </p> 
            <p>&nbsp; 공항 픽업 1만원 제공</p> 
            <p><strong>기본 혜택 :</strong><span> </span></p> 
            <p><span>&nbsp; 5~7%</span> 즉시할인 + <span>10%</span> M포인트 사용&nbsp;</p> 
            <p>&nbsp;&nbsp;+ 무이자할부&nbsp;</p> 
            <p>&nbsp; / 항공, 자유여행 예약 시 <span>2%</span> 추가 할인</p> 
            <p><strong>이벤트 기간 :</strong> </p> 
            <p>&nbsp; ~ 2018. 12. 31<br /></p> 
            <span className="btn-base bbr-st1 b-tasp-more"><a href="https://www.priviatravel.com/promotion/sectionEvent/2178/" target="_self">자세히보기</a></span> 
            </div> </li> 
          <li> <a href="http://package.priviatravel.com/pkgRenewal/htmlPlan?PROMOTION_SEQ=332"> <span className="tasp-tit"> <span className="label">해외패키지</span> <span className="tit">12월 출발, 지역별<br />출발확정 상품 안내 </span> </span> </a> 
            <div className="tasp-detail"> 
            <p ><span >특별 혜택 :</span></p> 
            <p ><span>&nbsp; 모바일&nbsp;</span><span>백화점 상품권</span><span>,</span></p> 
            <p ><span>&nbsp; 제휴사별&nbsp;</span><span>추가 할인&nbsp;</span><span>등 제공</span></p> 
            <p ><span >기본 혜택 :</span></p> 
            <p ><span>&nbsp;&nbsp;</span><span>3 ~ 7%&nbsp;</span><span>즉시 할인</span></p> 
            <p ><span>&nbsp; +&nbsp;</span><span>5%&nbsp;</span><span>M포인트 사용</span></p> 
            <p ><span >출발 기간 :</span></p> 
            <p ><span>&nbsp; 2018. 12. 01 ~ 12. 31</span></p> 
            <p ><br /></p> 
            <p ><br /></p> 
            <span className="btn-base bbr-st1 b-tasp-more"><a href="http://package.priviatravel.com/pkgRenewal/htmlPlan?PROMOTION_SEQ=332" target="_self">자세히 보기</a></span> 
            </div> </li>
*/