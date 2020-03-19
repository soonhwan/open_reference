import moment from 'moment'
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import AppLayout from '@src/components/layouts/AppLayout';
import MypageNavi from '@src/components/common/MypageNavi';
import DatePicker from '@src/components/common/calendar/DatePicker';
import Button from '@lib/share/items/Button';
import Buttons from '@lib/share/items/Buttons';
import SelectBox from '@lib/share/items/SelectBox';
import Input from '@lib/share/items/Input';
import RodalPopup from '@lib/share/popup/RodalPopup';
import useRodal from '@lib/share/custom/useRodal';
import { SECTION_MYPAGE } from '@src/actions/types';
import { select1_list } from '@src/dummy';

const GeneralSell02 = () => {
  const now = moment()

  const dispatch = useDispatch();
  dispatch({ type: SECTION_MYPAGE });

  const handleBtnClick = useCallback((e, id) => {
    alert(`이 상품의 차량 아이디 값은 ${id}입니다.`);
  }, []);

  const [rodalShow, setRodalShow, rodalPopupHandler, modalCloseHandler] = useRodal(false, true);

  return (
    <AppLayout>
      <div className="content-wrap">
        <MypageNavi />

        <div className="mypage-state-sec general-sell-sec">
          <div className="mypage-admin-title">
            <h3>오토옥션 출품내역</h3>
            <p className="tx-exp-tp5">&#8251; 경매 출품한 차량의 진행상황을 확인할 수 있습니다.</p>
            <p className="tx-exp-tp5">&#8251; 출품하신 차량에 출품취소(접수취소) 및 반출신청을 원하시면 경매장 출품담당자에게 문의하여 주시기 바랍니다.</p>
            <p className="tx-exp-tp5">&#8251; 시작가/희망가 변경은 경매 시작 1시간 전까지 가능합니다.</p>
          </div>

          <div className="list-wrap">
            <div className="list-tit">
              <Button className="fr" size="big" background="blue80" title="오토옥션 바로가기" width={181} height={48} marginBottom={23} />
            </div>
            <table className="table-tp1 input search th-c" summary="조회 영역">
              <caption className="away">조회 영역</caption>
              <tbody>
                <tr>
                  <td>
                    <span className="title">경매구분</span>
                    <SelectBox id="select1" className="items-sbox" options={[
                      { value: '1', label: '경매대기' },
                      { value: '2', label: '낙찰' },
                      { value: '2', label: '유찰' },
                      { value: '2', label: '출품취소' }
                    ]} width={100} height={40} placeHolder="전체" />
                    <span className="title">경매회차</span>
                    <Input type="text" placeHolder="" width={110} height={40} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Button className="on" size="mid" line="gray" color="black" title="1주일" width={50} height={40} />
                    <Button size="mid" line="gray" color="black" title="1개월" width={50} height={40} marginLeft={8}/>
                    <Button size="mid" line="gray" color="black" title="3개월" width={50} height={40} marginLeft={8} marginRight={16} />
                    <DatePicker defaultValue={now} inputHeight={40} />
                    <em className="mg8">-</em>
                    <DatePicker defaultValue={now} inputHeight={40} />
                    <Button size="mid" background="blue80" title="조회하기" width={130} height={40 }marginLeft={16} />
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="admin-list tp7 auto">
              <table className="table-tp1 th-c td-c" summary="오토옥션 출품내역에 대한 내용">
                <caption className="away">오토옥션 출품내역</caption>
                <colgroup>
                  <col width="10%"/>
                  <col width="8%"/>
                  <col width="8%"/>
                  <col width="34%"/>
                  <col width="10%"/>
                  <col width="10%"/>
                  <col width="9%"/>
                  <col width="11%"/>
                </colgroup>
                <thead>
                  <tr>
                    <th>경매일</th>
                    <th>출품번호</th>
                    <th>거점</th>
                    <th>차량정보</th>
                    <th>평가</th>
                    <th>진행상태</th>
                    <th>탁송</th>
                    <th>파일다운로드</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td rowSpan="2">954회<br />19.10.01</td>
                    <td>1020</td>
                    <td>분당</td>
                    <td className="tx-l">[현대] 그랜저(IG) IG240 Gdi Modern<br />2018 | A/T | 가솔린 | 2,359cc | NB9)미드나잇블랙</td>
                    <td>
                      <Button size="mid" line="gray" radius={true} title="탁송" width={55} height={32} marginBottom={5} /><br />
                      <Button size="mid" line="gray" radius={true} title="본인" width={55} height={32} />
                    </td>
                    <td>A/6<br />성능점검표</td>
                    <td>경매 대기</td>
                    <td>출품확인서</td>
                  </tr>
                  <tr>
                    <td colSpan="7" className="tx-l tx-blue80">시작가 : 300 만원 / 희망가 : 350 만원</td>
                  </tr>
                  <tr>
                    <td rowSpan="2">954회<br />19.10.01</td>
                    <td>1020</td>
                    <td>분당</td>
                    <td className="tx-l">[현대] 그랜저(IG) IG240 Gdi Modern<br />2018 | A/T | 가솔린 | 2,359cc | NB9)미드나잇블랙</td>
                    <td>
                      <Button size="mid" line="gray" radius={true} title="탁송" width={55} height={32} marginBottom={5} /><br />
                      <Button size="mid" line="gray" radius={true} title="본인" width={55} height={32} />
                    </td>
                    <td>A/6<br />성능점검표</td>
                    <td>낙찰</td>
                    <td>출품확인서</td>
                  </tr>
                  <tr>
                    <td colSpan="7" className="tx-l tx-blue80">시작가 : 300 만원 / 희망가 : 350 만원</td>
                  </tr>
                  <tr>
                    <td rowSpan="2">954회<br />19.10.01</td>
                    <td>1020</td>
                    <td>분당</td>
                    <td className="tx-l">[현대] 그랜저(IG) IG240 Gdi Modern<br />2018 | A/T | 가솔린 | 2,359cc | NB9)미드나잇블랙</td>
                    <td>
                      <Button size="mid" line="gray" radius={true} title="탁송" width={55} height={32} marginBottom={5} /><br />
                      <Button size="mid" line="gray" radius={true} title="본인" width={55} height={32} />
                    </td>
                    <td>A/6<br />성능점검표</td>
                    <td>유찰</td>
                    <td>출품확인서</td>
                  </tr>
                  <tr>
                    <td colSpan="7" className="tx-l tx-blue80">시작가 : 300 만원 / 희망가 : 350 만원</td>
                  </tr>
                  <tr>
                    <td rowSpan="2">954회<br />19.10.01</td>
                    <td>1020</td>
                    <td>분당</td>
                    <td className="tx-l">[현대] 그랜저(IG) IG240 Gdi Modern<br />2018 | A/T | 가솔린 | 2,359cc | NB9)미드나잇블랙</td>
                    <td>
                      <Button size="mid" line="gray" radius={true} title="탁송" width={55} height={32} marginBottom={5} /><br />
                      <Button size="mid" line="gray" radius={true} title="본인" width={55} height={32} />
                    </td>
                    <td>A/6<br />성능점검표</td>
                    <td>출품취소</td>
                    <td>출품확인서</td>
                  </tr>
                  <tr>
                    <td colSpan="7" className="tx-l tx-blue80">시작가 : 300 만원 / 희망가 : 350 만원</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>

      <RodalPopup show={rodalShow} type={'slideUp'} closedHandler={modalCloseHandler} mode="normal" size="xs">
        <div className="con-wrap">
          <p>차량을 삭제하시겠습니까?</p>
          <Buttons align="center" marginTop={56}>
            <Button size="big" background="gray" title="취소" width={130} />
            <Button size="big" background="blue80" title="확인" width={130} />
          </Buttons>
        </div>
      </RodalPopup>
    </AppLayout>
  )
}

export default GeneralSell02
