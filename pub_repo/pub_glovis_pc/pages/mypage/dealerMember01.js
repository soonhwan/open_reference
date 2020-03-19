import { useDispatch } from 'react-redux';
import AppLayout from '@src/components/layouts/AppLayout'
import MypageNavi from '@src/components/common/MypageNavi'
import Buttons from '@lib/share/items/Buttons'
import Button from '@lib/share/items/Button'
import Input from '@lib/share/items/Input'
import RodalPopup from '@lib/share/popup/RodalPopup'
import useRodal from '@lib/share/custom/useRodal'
import Textarea from '@lib/share/items/Textarea'
import { textDummy } from '@src/dummy';
import { SECTION_MYPAGE } from '@src/actions/types';

const DealerMember01 = () => {
  const dispatch = useDispatch();
  dispatch({ type: SECTION_MYPAGE });

  const [rodalShow1, setRodalShow1, rodalPopupHandler1, modalCloseHandler1] = useRodal(false, true);
  const [rodalShow2, setRodalShow2, rodalPopupHandler2, modalCloseHandler2] = useRodal(false, true);
  
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
  return (
    <AppLayout>
      <div className="content-wrap">
        <MypageNavi mode="dealer" />

        <div className="mypage-state-sec member-info">
          <div className="mypage-admin-title">
            <h3>회원정보/소개 관리</h3>
          </div>

          <Buttons align="right">
            <Button size="big" background="blue80" title="회원정보 수정" width={170} height={48}/>
            <Button size="big" background="blue80" title="비밀번호 변경" width={170} height={48}/>
          </Buttons>
          <div className="basic-info-wrap">
            <h4>기본정보</h4>
            <div className="img-wrap">
              <img src="/images/dummy/review-img.png" alt="프로필 사진"/>
            </div>
            <table className="table-tp1 th-c td-c info-top" summary="회원 기본정보 내용">
              <caption className="away">기본정보</caption>
              <colgroup>
                <col width="25%" />
                <col width="25%" />
                <col width="25%" />
                <col width="25%" />
              </colgroup>
              <tbody>
                <tr>
                  <th>판매자</th>
                  <td colSpan="3">장현대</td>
                </tr>
                <tr>
                  <th>종사원증 번호</th>
                  <td colSpan="3">000000 <span className="tx-blue80">[-98일]</span></td>
                </tr>
                <tr>
                  <th>연락처</th>
                  <td colSpan="3">010-1234-5678</td>
                </tr>
                <tr>
                  <th>판매중 차량</th>
                  <td>21</td>
                  <th>판매완료 차량</th>
                  <td>35</td>
                </tr>
              </tbody>
            </table>

            <table className="table-tp1 th-c td-c info-bottom" summary="회원 기본정보 내용">
              <caption className="away">기본정보</caption>
              <colgroup>
                <col width="30%" />
                <col width="70%" />
              </colgroup>
              <tbody>
                <tr>
                  <th>소속상사명 / 대표자명</th>
                  <td>현대 글로비스 경인직영점 / 김현대</td>
                </tr>
                <tr>
                  <th>소속단지</th>
                  <td>선택정보 노출영역</td>
                </tr>
                <tr>
                  <th>사업자 등록번호</th>
                  <td>입력정보 노출영역</td>
                </tr>
                <tr>
                  <th>판매점 주소</th>
                  <td>서울특별시 서초구 신반포로 311</td>
                </tr>
                <tr>
                  <th>판매점 연락처</th>
                  <td>050-0000-000</td>
                </tr>
                <tr>
                  <th>팩스</th>
                  <td>050-0000-000</td>
                </tr>
                <tr>
                  <th>영업시간</th>
                  <td className="pd15">
                    월~토요일 09:00 ~ 18:00<br />
                    일요일/공휴일 휴무<br />
                    (점심시간 12:00 ~ 13:00)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <table className="table-tp1 th-c td-c" summary="셀프평가 이용현황에 관한 내용">
            <caption>셀프평가 이용현황</caption>
            <colgroup>
              <col width="25%" />
              <col width="25%" />
              <col width="25%" />
              <col width="25%" />
            </colgroup>
            <tbody>
              <tr>
                <th>회원등급</th>
                <td colSpan="3">VIP (평점 4.6 | ★★★☆☆)</td>
              </tr>
              <tr>
                <th>평가등급</th>
                <td colSpan="3">★★★☆☆</td>
              </tr>
              <tr>
                <th>평점</th>
                <td colSpan="3">4.6/5.0</td>
              </tr>
              <tr>
                <th>입찰</th>
                <td>200대</td>
                <th>성사</th>
                <td>180대</td>
              </tr>
              <tr>
                <th>성사율</th>
                <td>성 90%</td>
                <th>광고차량</th>
                <td>260대</td>
              </tr>
              <tr>
                <th rowSpan="3">만족도</th>
                <th>가격만족</th>
                <td colSpan="2">70% (100%)</td>
              </tr>
              <tr>
                <th>서비스</th>
                <td colSpan="2">70% (100%)</td>
              </tr>
              <tr>
                <th>추천여부</th>
                <td colSpan="2">70% (100%)</td>
              </tr>
              <tr>
                <th>주력정보<br /><Button size="sml" background="blue80" title="수정" width={67} height={24} onClick={(e) => rodalPopupHandler1(e, "fade")} /></th>
                <td colSpan="3" className="pd15">VIP (평점 4.6)<br />★★★☆☆</td>
              </tr>
              <tr>
                <th>자기소개<br /><Button size="sml" background="blue80" title="수정" width={67} height={24} onClick={(e) => rodalPopupHandler2(e, "fade")} /></th>
                <td colSpan="3" className="pd15">안녕하세요. 김현대입니다 안녕하세요. 김현대입니다 안녕하세요. 김현대입니다 안녕하세요. 김현대입니다 안녕하세요. 김현대입니다 안녕하세요. 김현대입니다 </td>
              </tr>
            </tbody>
          </table>
          <Buttons align="right" marginTop={48}>
            <Button size="big" background="blue80" title="회원탈퇴" width={183} height={48}/>
          </Buttons>
        </div>
      </div>

      <RodalPopup show={rodalShow1} type={'slideUp'} closedHandler={modalCloseHandler1} mode="normal" size="medium" title="주력정보 수정">
        <div className="con-wrap popup-member-info">
          <Input type="text" placeHolder="주력정보를 입력하세요" width='100%' />
          <p>예시) #수입전문 #BMW #5시리즈 #최고가</p>
          <Buttons align="center" marginTop={85}>
            <Button size="big" background="gray" title="취소" width={130} height={48}/>
            <Button size="big" background="blue80" title="수정완료" width={130} height={48}/>
          </Buttons>
        </div>
      </RodalPopup>
      
      <RodalPopup show={rodalShow2} type={'slideUp'} closedHandler={modalCloseHandler2} mode="normal" size="medium" title="소개글 수정">
        <div className="con-wrap popup-member-info">
          <Textarea countLimit={500} type="tp2" value={textDummy} />
          <Buttons align="center" marginTop={48}>
            <Button size="big" background="gray" title="취소" width={130} height={48}/>
            <Button size="big" background="blue80" title="수정완료" width={130} height={48}/>
          </Buttons>
        </div>
      </RodalPopup>
    </AppLayout>
  )
}

export default DealerMember01