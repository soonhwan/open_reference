import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from "next/router";
import uuid from "uuid";
import AppLayout from '@src/components/layouts/AppLayout';
import MypageNavi from '@src/components/common/MypageNavi';
import Button from '@lib/share/items/Button';
import Textarea from '@lib/share/items/Textarea';
import RodalPopup from '@lib/share/popup/RodalPopup';
import useRodal from '@lib/share/custom/useRodal';
import ImgCover from '@lib/share/items/ImgCover';
import { SECTION_MYPAGE } from '@src/actions/types';
import { MsgInquiryList } from '@src/dummy';

const generalBuy03 = ({router}) => {
  const dispatch = useDispatch();
  dispatch({ type: SECTION_MYPAGE });

  const handleBtnClick = useCallback((e, id) => {
    alert(`이 상품의 차량 아이디 값은 ${id}입니다.`);
  }, []);
  
  const [popupShow, setPopupShow, popupOpenHandler, popupCloseHandler] = useRodal(false, true);

  const { result } = router.query;
  const [withoutList, setWithoutList] = useState(result === "no" ? true : false);

  // Textarea
  const textareaChange = (e) => {
    console.log('textareaChange');
    console.log(e);
  }
  const textareaBlur = (e) => {
    console.log('textareaBlur');
    console.log(e);
  }
  const textareaFocus = (e) => {
    console.log('textareaFocus');
    console.log(e);
  }

  // 목록 더보기
  const [listData, setListData] = useState(MsgInquiryList);
  const createDummy = (num) => {
    const dummyArr = [];
    for (let i=0; i<num; i++) {
      dummyArr.push({
        id: uuid.v4(),
        date: '2019-09-19',
        imgSrc: "/images/dummy/product-img-06.png",
        imgAlt: "차량 이미지",
        subject: "현대 투싼 ix 디젤 2WD LX20 럭셔리",
        sellerName: "박현대",
        sellerMobile: "010-3333-7777",
        inquiryContent: '가격할인이 되나요?',
        replyState: '답변완료'
      });
    }
    return dummyArr;
  }
  const handleListMore = useCallback((e) => {
    e.preventDefault();
    const dummyData = createDummy(5);    
    setListData(listData => [...listData, ...dummyData]);
  }, []);

  return (
    <AppLayout>
      <div className="content-wrap">
        <MypageNavi />

        <div className="mypage-state-sec general-buy-sec">
          <div className="mypage-admin-title">
            <h3>쪽지상담 내역</h3>
            <p className="tx-exp-tp5">&#8251; 최근 1달 이내 쪽지상담하신 내역입니다.</p>
            <p className="tx-exp-tp5">&#8251; 쪽지 상담을 하신 정보는 1달까지 조회하실 수 있으며, 1달이 지나면 삭제됩니다.</p>
          </div>

          <div className="list-wrap">
            <div className="admin-list tp7 note">
              <div className="content-top">
                <table className="table-tp1 th-c td-c" summary="결제내역에 대한 내용">
                  <caption className="away">결제내역</caption>
                  <colgroup>
                    <col width="14%" />
                    <col width="30%" />
                    <col width="18%" />
                    <col width="24%" />
                    <col width="14%" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>최종상담일자</th>
                      <th>상담진행차량</th>
                      <th>판매자</th>
                      <th>최초상담내용</th>
                      <th>답변여부</th>
                    </tr>
                  </thead>
                  {
                    withoutList === false
                      ? (
                        <tbody>
                          {listData.map(v => {
                            return (
                              <tr key={v.id}>
                                <td>{v.date}</td>
                                <td>
                                  <ImgCover src={v.imgSrc} alt={v.imgAlt} />
                                  <div className="summary">
                                    <h4 className="subject">{v.subject}</h4>
                                  </div>
                                </td>
                                <td className="seller">{v.sellerName}<br />{v.sellerMobile}</td>
                                <td>{v.inquiryContent}</td>
                                <td className="tx-blue80">
                                  {v.replyState}<br />
                                  <Button size="mid" line="gray" color="black" radius={true} title="내용보기" width={100} height={32} marginTop={8} onClick={e => popupOpenHandler(e, "slideUp")} />
                                </td>
                              </tr>
                            )
                          })}
                          <tr className="more">
                            <td colSpan="6" className="more">
                              <div className="cate-list-btn2">
                                <button onClick={handleListMore}>더보기</button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      ) : (
                        <tbody>
                          <tr className="list-none">
                            <td colSpan="6">
                              최근 쪽지상담 하신 내역이 없습니다.<br />
                              <Button size="big" background="blue80" title="차량검색 하러 가기" width={245} height={60} marginTop={16} href="/buy/list" />
                            </td>
                          </tr>
                        </tbody>
                      )
                  }
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <RodalPopup show={popupShow} type={'slideUp'} closedHandler={popupCloseHandler} mode="normal" width={400} >
        <div className="popup-chat">
          <div className="chat-tit">
            <p>현대 투싼ix 디젤 2WD LX20 럭셔리</p>
          </div>
          <div className="chat-list-wrap">
            <div className="left">
              <span>11월 19일 오후 4:30</span>
              <p>가격 할인이 되나요?</p>
            </div>
            <div className="right">
              <span>11월 19일 오후 4:30</span>
              <p>현재 가격에서 일부 할인<br />해 드릴 수 있긴 합니다.<br />자세한 사항은 전화 문의 <br />부탁 드리겠습니다.</p>
            </div>
            <div className="left">
              <span>11월 19일 오후 4:30</span>
              <p>이 차량 말고 다른 차량도 볼 수 있나요?</p>
            </div>
            <div className="right">
              <span>11월 19일 오후 4:30</span>
              <p>현재 가격에서 일부 할인<br />해 드릴 수 있긴 합니다.<br />자세한 사항은 전화 문의 <br />부탁 드리겠습니다.</p>
            </div>
            <div className="right">
              <p>현재 가격에서 일부 할인<br />해 드릴 수 있긴 합니다.<br />자세한 사항은 전화 문의 <br />부탁 드리겠습니다.</p>
            </div>
          </div>
          <div className="chat-input">
            <Textarea type="tp2" height={96} onChange={textareaChange} onBlur={textareaBlur} onFocus={textareaFocus} />
            <Button size="big" background="blue80" radius={true} title="전송" width={68} height={68} />
          </div>
        </div>
      </RodalPopup>
    </AppLayout>
  )
}

export default withRouter(generalBuy03);