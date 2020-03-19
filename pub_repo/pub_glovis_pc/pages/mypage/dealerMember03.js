import { useDispatch } from 'react-redux';
import AppLayout from '@src/components/layouts/AppLayout';
import MypageNavi from '@src/components/common/MypageNavi';
import PageNavigator from '@src/components/common/PageNavigator';
import DatePicker from '@src/components/common/calendar/DatePicker';
import Buttons from '@lib/share/items/Buttons';
import Button from '@lib/share/items/Button';
import Input from '@lib/share/items/Input';
import RodalPopup from '@lib/share/popup/RodalPopup';
import useRodal from '@lib/share/custom/useRodal';
import { SECTION_MYPAGE } from '@src/actions/types';

const DealerMember03 = () => {
  const dispatch = useDispatch();
  dispatch({ type: SECTION_MYPAGE });

  const [rodalShow1, setRodalShow1, rodalPopupHandler1, modalCloseHandler1] = useRodal(false, true);
  const [rodalShow2, setRodalShow2, rodalPopupHandler2, modalCloseHandler2] = useRodal(false, true);
  return (
    <AppLayout>
      <div className="content-wrap">
        <MypageNavi mode="dealer" />

        <div className="mypage-state-sec dealer-info">
          <div className="mypage-admin-title">
            <h3>딜러정보 관리</h3>
          </div>

          <div className="tx-list">
            <p class="inquire-num">총 사용(만료) 00개</p>
            <table summary="딜러정보 관리" className="table-tp1 th-c td-c">
              <caption className="away">딜러정보 관리</caption>
              <colgroup>
                <col width="8%" />
                <col width="13%" />
                <col width="15%" />
                <col width="24%" />
                <col width="25%" />
                <col width="15%" />
              </colgroup>
              <thead>
                <tr>
                  <th>NO.</th>
                  <th>이름</th>
                  <th>배정차량</th>
                  <th>연락처</th>
                  <th>종사원번호</th>
                  <th>등록일</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>15</td>
                  <td>김현대</td>
                  <td>2대</td>
                  <td>010-1234-5678</td>
                  <td>123-45-67892 <span className="tx-blue80">[-398일]</span></td>
                  <td>2019-09-09</td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>김현대</td>
                  <td>2대</td>
                  <td>010-1234-5678</td>
                  <td>123-45-67892 <span className="tx-blue80">[-398일]</span></td>
                  <td>2019-09-09</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>김현대</td>
                  <td>2대</td>
                  <td>010-1234-5678</td>
                  <td>123-45-67892 <span className="tx-blue80">[-398일]</span></td>
                  <td>2019-09-09</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>김현대</td>
                  <td>2대</td>
                  <td>010-1234-5678</td>
                  <td>123-45-67892 <span className="tx-blue80">[-398일]</span></td>
                  <td>2019-09-09</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>김현대</td>
                  <td>2대</td>
                  <td>010-1234-5678</td>
                  <td>123-45-67892 <span className="tx-blue80">[-398일]</span></td>
                  <td>2019-09-09</td>
                </tr>
              </tbody>
            </table>
            <PageNavigator recordCount={50} />
          </div>

          <Buttons align="right" marginTop={26}>
            <Button size="big" background="gray" title="삭제" width={180} height={48} onClick={(e) => rodalPopupHandler1(e, "fade")}  />
            <Button size="big" background="blue80" title="+ 딜러등록" width={180} height={48} onClick={(e) => rodalPopupHandler2(e, "fade")}  />
          </Buttons>
        </div>
      </div>

      <RodalPopup show={rodalShow1} type={'slideUp'} closedHandler={modalCloseHandler1} mode="normal" size="xs" >
        <div className="con-wrap">
          <p>정말 삭제하시겠습니까?</p>
          <Buttons align="center" marginTop={85}>
            <Button size="big" background="gray" title="취소" width={130} height={48}/>
            <Button size="big" background="blue80" title="등록완료" width={130} height={48}/>
          </Buttons>
        </div>

        {/* <div className="con-wrap">
          <p>삭제되었습니다.</p>
          <Buttons align="center" marginTop={85}>
            <Button size="big" background="blue80" title="확인" width={245} height={48}/>
          </Buttons>
        </div> */}
      </RodalPopup>

      <RodalPopup show={rodalShow2} type={'slideUp'} closedHandler={modalCloseHandler2} mode="normal" size="medium" title="딜러등록">
        <div className="con-wrap dealer-info">
          <ul>
            <li className="tit">이름</li>
            <li><Input type="text" id="name" value="이름을 입력하세요" width={384} height={48} /></li>
            <li className="tit">휴대폰 번호</li>
            <li>
              <Input type="text" id="phone1" width={116} height={48} />
              <em className="mg8">-</em>
              <Input type="text" id="phone2" width={115} height={48} />
              <em className="mg8">-</em>
              <Input type="text" id="phone3" width={115} height={48} />
            </li>
            <li className="tit">종사원증번호/유효기간<span className="essential">*</span></li>
            <li>
              <Input type="text" id="num" value="사원증번호를 입력하세요" width={184} height={48} />
              <em className="mg8"></em>
              <DatePicker inputWidth={184} inputHeight={48} />
            </li>
          </ul>
          <Buttons align="center" marginTop={32}>
            <Button size="big" background="gray" title="취소" width={130} height={48}/>
            <Button size="big" background="blue80" title="등록완료" width={130} height={48}/>
          </Buttons>
        </div>
      </RodalPopup>
    </AppLayout>
  )
}

export default DealerMember03
