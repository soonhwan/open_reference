import moment from 'moment'
import Link from 'next/link';
import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import AppLayout from '@src/components/layouts/AppLayout';
import MypageNavi from '@src/components/common/MypageNavi';
import DatePicker from '@src/components/common/calendar/DatePicker';
import CarOptions from '@src/components/common/CarOptions';
import CarAddOption from '@src/components/common/CarAddOption';
import SlideBanner from '@src/components/common/banner/SlideBanner';
import BannerItem from '@src/components/common/banner/BannerItem';
import Button from '@lib/share/items/Button';
import Buttons from '@lib/share/items/Buttons';
import Textarea from '@lib/share/items/Textarea';
import Radio from '@lib/share/items/Radio';
import SelectBox from '@lib/share/items/SelectBox';
import Input from '@lib/share/items/Input';
import CheckBox from '@lib/share/items/CheckBox';
import RodalPopup from '@lib/share/popup/RodalPopup';
import useRodal from '@lib/share/custom/useRodal';
import Steps from '@lib/share/items/Steps'
import { SECTION_MYPAGE } from '@src/actions/types';


const GeneralSell_s01 = () => {
  const now = moment()

  const dispatch = useDispatch();
  dispatch({ type: SECTION_MYPAGE });

  const handleBtnClick = useCallback((e, id) => {
    alert(`이 상품의 차량 아이디 값은 ${id}입니다.`);
  }, []);

    // Textarea
  const textareaChange = (e) => {
    console.log('textareaChange');
    console.log(e);
  }
  const textareaBlur = (e) => {
    console.log('textareaBlur');
    console.log(e);
  }
  const textareaFocus = (e) => {
    console.log('textareaFocus');
    console.log(e);
  }

  // 팝업
  const [biddingShow, setBiddingShow, biddingPopupHandler, biddingCloseHandler] = useRodal(false, true);
  const [bidderInfoShow, setBiddersInfoShow, bidderInfoPopupHandler, bidderInfoCloseHandler] = useRodal(false, true);
  const [proceedShow, setProceedShow, proceedPopupHandler, proceedCloseHandler] = useRodal(false, true);
  const [cancelShow, setCancelShow, cancelPopupHandler, cancelCloseHandler] = useRodal(false, true);
  const [cancelChkShow, setCancelChkShow, cancelChkPopupHandler, cancelChkCloseHandler] = useRodal(false, true);
  const [againShow, setAgainlChkShow, againPopupHandler, againCloseHandler] = useRodal(false, true);
  
  // 팝업의 라디오 버튼
  const [isValue, setIsValue] = useState(1);
  const handleChange = useCallback((e) => {
    e.preventDefault();
    setIsValue(Number(e.target.value));
  }, []);

  return (
    <AppLayout>
      <div className="content-wrap">
        <MypageNavi />

        <div className="mypage-state-sec general-sell-sec">
          <div className="mypage-admin-title">
            <h3 className="border-none">내차 팔기 현황 상세</h3>
            <div className="sub-tit-wrap">
              <p>셀프평가 판매로 신청하신 내역입니다.</p>
            </div>
          </div>

          <Steps type={1} contents={['차량정보등록', '신청완료', '입찰가/견적확인', '판매결정', '차량탁송/명의이전']} subContents={['차량정보를\n등록해주세요.', '실시간 경쟁입찰이\n진행중입니다.', '실시간 경쟁입찰 현황을\n확인하세요.', '차량 판매 여부를\n결정해주세요.', '탁송정보와 계약자 정보를\n입력해주세요.']} active={1} marginBottom={193} />

          <div className="car-img-upload slide">
            <div className="tit-wrap">
              <h5>차량 정보</h5>
            </div>
            <div className="car-img-area">
              <div className="img-wrap">
                <img src="/images/dummy/list-auction-img-1.png" alt="홈서비스 차량 이미지" />
              </div>
              <ul>
                <li className="arrow"><button className="btn-arrow-prev-mid"></button></li>
                <li>
                  <div className="img-item">
                    <a href="#"><img src="" alt="" /></a>
                  </div>
                  <span>차량 전면</span>
                </li>
                <li>
                  <div className="img-item">
                    <a href="#"><img src="" alt="" /></a>
                  </div>
                  <span>차량 후면</span>
                </li>
                <li>
                  <div className="img-item">
                    <a href="#"><img src="" alt="" /></a>
                  </div>
                  <span>차량 좌측</span>
                </li>
                <li>
                  <div className="img-item">
                    <a href="#"><img src="" alt="" /></a>
                  </div>
                  <span>차량 우측</span>
                </li>
                <li>
                  <div className="img-item">
                    <a href="#"><img src="" alt="" /></a>
                  </div>
                  <span>내부 계기판</span>
                </li>
                <li className="arrow"><button className="btn-arrow-next-mid"></button></li>
              </ul>
            </div>
            <p className="tx-exp-tp2">* 차량 사진은 20개까지 등록가능합니다.</p>
            <Button className="fr" size="big" background="blue80" title="차량 사진 수정" width={180} href="/sell/selfStep03" />
          </div>

          <div className="car-basic-info">
            <table summary="차량 기본 정보에 대한 내용" className="table-tp1 mt0">
              <caption>차량 기본 정보</caption>
              <colgroup>
                <col width="13%" />
                <col width="27%" />
                <col width="13%" />
                <col width="47%" />
              </colgroup>
              <tbody>
                <tr>
                  <th>차량 번호</th>
                  <td>01가1234</td>
                  <th>차량명</th>
                  <td>
                    <span className="car-name">기아 K3 쿱 1.6 터보 GDI 프레스티지
                    <span>K3 2DR 1.6T / GDI 프레스티지 M/T</span></span>
                  </td>
                </tr>
                <tr>
                  <th>최초 등록일</th>
                  <td>2017-05-07</td>
                  <th>형식 년도</th>
                  <td>2018</td>
                </tr>
                <tr>
                  <th>색상</th>
                  <td>검정</td>
                  <th>연료</th>
                  <td>가솔린</td>
                </tr>
                <tr>
                  <th>배기량</th>
                  <td>1,591cc</td>
                  <th>차종</th>
                  <td>준중형차</td>
                </tr>
                <tr>
                  <th>용도</th>
                  <td>일반</td>
                  <th>출고 가격</th>
                  <td>20,700,000원</td>
                </tr>
              </tbody>
            </table>
            <Button className="fr" size="big" background="blue80" title="차량 정보 수정" width={180} marginTop={33} href="/sell/selfStep02" />
          </div>
          <CarOptions title="차량 옵션" more={false} type={2} more={true} />

          <div className="option-add-wrap">
            <CarAddOption />
            <p className="tx-exp-tp3 tx-red80 fr mt16">* 실제 차량 정보와 상이할 경우 추후 견적이 달라질 수 있습니다.</p>
          </div>

          <table summary="추가 상세 정보에 대한 내용" className="table-tp1 mt80">
            <caption>추가 상세 정보</caption>
            <colgroup>
              <col width="16%" />
              <col width="84%" />
            </colgroup>
            <tbody>
              <tr>
                <th>주행 거리(현재기준)</th>
                <td>20,000 km</td>
              </tr>
              <tr>
                <th>차량 설명</th>
                <td>2019년 10월 미쉐린 광폭 타이어로 교환</td>
              </tr>
              <tr>
                <th>판금/교환 여부</th>
                <td>없음</td>
              </tr>
            </tbody>
          </table>

          <div className="sell-info">
            <table summary="판매자 정보에 대한 내용" className="table-tp1 mt80">
              <caption>판매자 정보</caption>
              <colgroup>
                <col width="16%" />
                <col width="84%" />
              </colgroup>
              <tbody>
                <tr>
                  <th>이름</th>
                  <td>김현대</td>
                </tr>
                <tr>
                  <th>휴대 전화 번호</th>
                  <td>010-4325-0987</td>
                </tr>
                <tr>
                  <th>거주 지역</th>
                  <td>서울특별시 강남구</td>
                </tr>
              </tbody>
            </table>
            <Button className="fr" size="big" background="blue80" title="판매자 정보 수정" width={180} marginTop={33} href="#" />
          </div>

          <table summary="차량 견적에 대한 내용" className="table-tp1 mt80 car-estimate">
            <caption>차량 견적</caption>
            <colgroup>
              <col width="16%" />
              <col width="84%" />
            </colgroup>
            <tbody>
              <tr>
                <th>금액</th>
                <td>
                  <p class="price-tp4 tx-black">1,500<span className="won"> 만원</span></p>
                  <Button size="mid" line="gray" color="black" radius={true} title="구매자 정보" width={130} height={40} marginLeft={32} />
                </td>
              </tr>
            </tbody>
          </table>

          <Buttons marginTop={80}>
            <span className="step-btn-c">
              <Button className="ws1" size="big" background="blue80" title="신청완료" sub="매각방식 선택하기" width={240} height={72} />
            </span>
            <span className="step-btn-r">
              <Button size="big" background="gray" title="목록으로" width={160} height={48} mode="normal" marginBottom={24} />
            </span>
          </Buttons>

          <Buttons marginTop={80}>
            <span className="step-btn-c">
              <Button size="big" background="blue80" title="입찰현황보기" width={200} height={48} onClick={(e) => biddingPopupHandler(e, "fade")} />
            </span>
            <span className="step-btn-r">
              <Button size="big" background="gray" title="목록으로" width={160} height={48} mode="normal" marginBottom={24} />
            </span>
          </Buttons>
        </div>
      </div>

      <RodalPopup show={biddingShow} type={'slideUp'} closedHandler={biddingCloseHandler} mode="normal" title="셀프평가 실시간 경쟁입찰 현황" width={1200}>
        <div className="con-wrap popup-bidding-inquiry">
          <p className="view-count">이 차의 조회수 : <span><em className="tx-blue80">25</em>회</span></p>
          <div className="car-img-info">
            <div className="car-info">
              <div className="img-wrap">
                <img src="/images/dummy/list-auction-img-1.png" alt="홈서비스 차량 이미지" />
              </div>
              <table summary="판매 차량에 대한 내용" className="table-tp1">
                <caption className="away">판매 차량 조회</caption>
                <colgroup>
                  <col width="18%" />
                  <col width="22%" />
                  <col width="18%" />
                  <col width="42%" />
                </colgroup>
                <tbody>
                  <tr>
                    <th>차량번호</th>
                    <td>09소0119</td>
                    <th>차량명</th>
                    <td className="pd8-12">현대 LF쏘나타 하이브리드 2.0 HEV 프리미엄</td>
                  </tr>
                  <tr>
                    <th>최초등록일</th>
                    <td>2016-04-18</td>
                    <th>형식 년도</th>
                    <td>2016</td>
                  </tr>
                  <tr>
                    <th>색상</th>
                    <td>흰색</td>
                    <th>연료</th>
                    <td>하이브리드</td>
                  </tr>
                  <tr>
                    <th>배기량</th>
                    <td>1,999 cc</td>
                    <th>차종</th>
                    <td>중형차</td>
                  </tr>
                  <tr>
                    <th>용도</th>
                    <td>일반</td>
                    <th>출고 가격</th>
                    <td>38,510,000원</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bidding-inquiry">
            <ul>
              <li>남은시간<p className="time tx-blue80">12 : 59 : 59</p></li>
              <li>입찰자수<p className="price-tp7">3<span className="won">명</span></p></li>
              <li>최종 판매가<p className="price-tp7">1,800<span className="won">만원</span></p></li>
            </ul>
          </div>
          <Buttons marginTop={48}>
            <span className="step-btn-l">
              <Button size="big" background="blue80" title="판매취소" width={172} height={60} onClick={(e) => cancelPopupHandler(e, "fade")}/>
            </span>
            <span className="step-btn-r">
              <Button size="big" background="gray" title="닫기" width={172} height={60}/>
            </span>
          </Buttons>


          <div className="bidding-inquiry">
            <ul>
              <li><p className="time none">입찰 종료 되었습니다.</p></li>
              <li>입찰자수<p className="price-tp7">0<span className="won">명</span></p></li>
              <li>최종 판매가<p className="price-tp7">- -<span className="won"> 만원</span></p></li>
            </ul>
          </div>
          <Buttons align="center" marginTop={48}>
            <Button size="big" background="blue80" title="판매취소" width={172} height={60} onClick={(e) => cancelPopupHandler(e, "fade")}/>
            <Button size="big" line="blue80" color="blue80" title="다시 견적 받기" width={172} height={60} onClick={(e) => againPopupHandler(e, "fade")}/>
          </Buttons>

          <div className="list-wrap">
            <div className="list-tit">
              <h4>딜러선택<span>판매를 원하는 입찰자를 선택해주세요.</span></h4>
              <SelectBox id="select1" className="items-sbox" options={[
                { value: '1', label: '입찰가 높은 순' },
                { value: '2', label: '평점 높은 순' }
              ]} width={148} height={36} placeHolder="입찰가 높은 순" />
            </div>
            <div className="admin-list tp6">
              <table className="table-tp1 th-c td-c" summary="결제내역에 대한 내용">
                <caption className="away">결제내역</caption>
                <colgroup>
                  <col width="10%" />
                  <col width="15%" />
                  <col width="20%" />
                  <col width="15%" />
                  <col width="25%" />
                  <col width="20%" />
                </colgroup>
                <thead>
                  <tr>
                    <th>선택</th>
                    <th>사진</th>
                    <th>딜러명</th>
                    <th>지역</th>
                    <th>평점/평가 등급</th>
                    <th>입찰가격</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><Radio className="simple" id="radio-simple-1" value={1} checked={isValue} disabled={false} onChange={handleChange} /></td>
                    <td></td>
                    <td><Link href="#"><a onClick={(e) => bidderInfoPopupHandler(e, "fade")}>장** 딜러</a></Link></td>
                    <td>서울</td>
                    <td>3.9<br />★★★</td>
                    <td className="price">2,100<span>만원</span></td>
                  </tr>
                  <tr>
                    <td><Radio className="simple" id="radio-simple-2" value={2} checked={isValue} disabled={false} onChange={handleChange} /></td>
                    <td></td>
                    <td><Link href="#"><a onClick={(e) => bidderInfoPopupHandler(e, "fade")}>장** 딜러</a></Link></td>
                    <td>서울</td>
                    <td>4.6<br />★★★★</td>
                    <td className="price">2,100<span>만원</span></td>
                  </tr>
                  <tr>
                    <td><Radio className="simple" id="radio-simple-3" value={3} checked={isValue} disabled={false} onChange={handleChange} /></td>
                    <td></td>
                    <td><Link href="#"><a onClick={(e) => bidderInfoPopupHandler(e, "fade")}>장** 딜러</a></Link></td>
                    <td>서울</td>
                    <td><span className="ad">스폰서 AD</span>5.0<br />★★★★★</td>
                    <td className="price">2,100<span>만원</span></td>
                  </tr>
                </tbody>
              </table>  
              <p className="tx-exp-tp5">&#8251; 입찰자 이름과 연락처는 공정한 거래를 위해 일부만 공개되며,<br />입찰자를 선택하신 후 판매를 진행하시면 이름과 연락처를 확인하실 수 있습니다.</p>
            </div>
          </div>
          <Buttons align="center" marginTop={48}>
            <Button size="big" background="gray" title="판매취소" width={172} height={60} onClick={(e) => cancelPopupHandler(e, "fade")}/>
            <Button size="big" background="blue80" title="판매진행" width={172} height={60} onClick={(e) => proceedPopupHandler(e, "fade")}/>
          </Buttons>
        </div>
      </RodalPopup>

      <RodalPopup show={bidderInfoShow} type={'slideUp'} closedHandler={bidderInfoCloseHandler} mode="normal" title="입찰자 정보" width={1200}>
        <div className="con-wrap popup-bidder-info">
          <div className="person-img-info">
            <div className="person-info">
              <div className="img-wrap">
                <img src="/images/dummy/bidder-img.png" alt="입찰자 이미지" />
              </div>
              <table summary="판매 차량에 대한 내용" className="table-tp1 th-c">
                <caption className="sml">장현대 딜러</caption>
                <colgroup>
                  <col width="20%" />
                  <col width="80%" />
                </colgroup>
                <tbody>
                  <tr>
                    <th>지역</th>
                    <td>서울 강서구</td>
                  </tr>
                  <tr>
                    <th>연락처</th>
                    <td>010-****-***<em>(연락처는 딜러 선택 후 공개)</em></td>
                  </tr>
                  <tr>
                    <th>주력정보</th>
                    <td>#수입전문 #BMW #5시리즈</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="introduce">
            <p>안녕하세요. 오토벨 인증 딜러 장현대 입니다.<br />항상 신념과 믿음으로 함께하는 진실된 장현대  딜러가 되겠습니다.<br />항상 신념과 믿음으로 함께하는 진실된 장현대  딜러가 되겠습니다.</p>
          </div>
          <table summary="셀프평가 참여 현황에 대한 내용" className="table-tp1 th-c td-c">
            <caption className="mt64">셀프평가 참여 현황</caption>
            <colgroup>
              <col width="16.66%" />
              <col width="16.66%" />
              <col width="16.66%" />
              <col width="16.66%" />
              <col width="16.66%" />
              <col width="16.66%" />
            </colgroup>
            <tbody>
              <tr>
                <th>총 입찰 대수</th>
                <td>20대</td>
                <th>총 낙찰 대수</th>
                <td>30대</td>
                <th>성사율</th>
                <td>15%</td>
              </tr>
              <tr>
                <th>평가등급</th>
                <td colSpan="5">★★★★☆ (4.2/5.0)</td>
              </tr>
              <tr>
                <th rowSpan="3">만족도</th>
                <th>가격만족</th>
                <td colSpan="4">3.58</td>
              </tr>
              <tr>
                <th>서비스</th>
                <td colSpan="4">4.8</td>
              </tr>
              <tr>
                <th>추천여부</th>
                <td colSpan="4">4.5</td>
              </tr>
            </tbody>
          </table>
          <div className="review-wrap">
            <h5>고객이용후기</h5>
            <button className="btn-arrow-prev-mid"></button>
            <ul>
              <li>
                <div className="content">
                  <p>기아 그랜드카니발 GLX 11인승<br />GLX 11인승</p>
                  <span className="gpa">★★★★☆</span>
                  <span>최고의 가격과 최고의 서비스를 받았습니다.</span>
                </div>
                <div className="user">
                  <p>김*광 고객님</p>
                  <span>2019-10-10</span>
                </div>
              </li>
              <li>
                <div className="content">
                  <p>기아 그랜드카니발 GLX 11인승<br />GLX 11인승</p>
                  <span className="gpa">★★★★☆</span>
                  <span>서비스와 친절함은 아주  좋았으나 낙찰 가격이 좀 아쉬웠습니다.서비스와 친</span>
                </div>
                <div className="user">
                  <p>김*광 고객님</p>
                  <span>2019-10-10</span>
                </div>
              </li>
              <li>
                <div className="content">
                    <p>기아 그랜드카니발 GLX 11인승<br />GLX 11인승</p>
                    <span className="gpa">★★★★☆</span>
                    <span>최고의 가격과 최고의 서비스를 받았습니다.</span>
                  </div>
                  <div className="user">
                    <p>김*광 고객님</p>
                    <span>2019-10-10</span>
                </div>
              </li>
            </ul>
            <button className="btn-arrow-next-mid"></button>
          </div>
          <div className="review-wrap dealer">
            <h5>딜러거래 후기</h5>
            <button className="btn-arrow-prev-mid"></button>
            <ul>
              <li>
                <div className="img-wrap">
                  <img src="/images/dummy/review-car-img-1.png" alt="딜러거래 후기 차량 이미지"/>
                </div>
                <div className="summary">
                  <h5 className="subject">강원도 춘천에서 그렌저IG<br />매입한 후기</h5>
                  <div className="info">현대 그랜저IG 프리미엄</div>
                </div>
              </li>
              <li>
                <div className="img-wrap">
                  <img src="/images/dummy/review-car-img-1.png" alt="딜러거래 후기 차량 이미지"/>
                </div>
                <div className="summary">
                  <h5 className="subject">서울대학생에게 판매한 <br />SM5 이야기</h5>
                  <div className="info">현대 그랜저IG 프리미엄</div>
                </div>
              </li>
              <li>
                <div className="img-wrap">
                  <img src="/images/dummy/review-car-img-1.png" alt="딜러거래 후기 차량 이미지"/>
                </div>
                <div className="summary">
                  <h5 className="subject">강원도 춘천에서 그렌저IG<br />매입한 후기</h5>
                  <div className="info">현대 그랜저IG 프리미엄</div>
                </div>
              </li>
            </ul>
            <button className="btn-arrow-next-mid"></button>
          </div>
        </div>
      </RodalPopup>

      <RodalPopup show={proceedShow} type={'slideUp'} closedHandler={proceedCloseHandler} mode="normal" size="xs">
        <div className="con-wrap">
          <p>판매를 진행하시겠습니까?</p>
          <Buttons align="center" marginTop={56}>
            <Button size="big" background="gray" title="취소" width={130} />
            <Button size="big" background="blue80" title="확인" width={130} />
          </Buttons>
        </div>
      </RodalPopup>

      <RodalPopup show={cancelShow} type={'slideUp'} closedHandler={cancelCloseHandler} mode="normal" size="medium" title="판매를 취소하시겠습니까?">
        <div className="con-wrap popup-cancel">
          <p>취소 사유를 선택해주세요.</p>
          <ul>
            <li className="on"><span>단순 변심</span></li>
            <li><span>정보 수정 필요/<br />재 판매 예정</span></li>
            <li><span>견적 불만/<br />입찰자 없음</span></li>
            <li><span>기타</span></li>
          </ul>
          <Textarea countLimit={200} type="tp1" onChange={textareaChange} onBlur={textareaBlur} onFocus={textareaFocus} placeHolder="기타 사유를 작성해주세요." />
          <Buttons align="center" marginTop={48}>
            <Button size="big" background="blue80" title="판매취소" width={180} onClick={(e) => cancelChkPopupHandler(e, "fade")}/>
          </Buttons>
        </div>
      </RodalPopup>

      <RodalPopup show={cancelChkShow} type={'slideUp'} closedHandler={cancelChkCloseHandler} mode="normal" size="xs">
        <div className="con-wrap">
          <p>판매 취소 신청이 완료되었습니다.</p>
          <Buttons align="center" marginTop={56}>
            <Button size="big" background="blue80" title="확인" width={130} />
          </Buttons>
        </div>
      </RodalPopup>

      <RodalPopup show={againShow} type={'slideUp'} closedHandler={againCloseHandler} mode="normal" size="xs">
        <div className="con-wrap">
          <p>다시 24시간 실시간 비교견적을<br />진행하시겠습니까?</p>
          <Buttons align="center" marginTop={56}>
            <Button size="big" background="gray" title="취소" width={130} />
            <Button size="big" background="blue80" title="확인" width={130} />
          </Buttons>
        </div>
      </RodalPopup>
    </AppLayout>
  )
}

export default GeneralSell_s01
