import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import AppLayout from '@src/components/layouts/AppLayout';
import Steps from '@lib/share/items/Steps';
import Buttons from '@lib/share/items/Buttons';
import Button from '@lib/share/items/Button';
import ColoredScrollbars from '@lib/share/items/ColoredScrollbars';
import RodalPopup from '@lib/share/popup/RodalPopup';
import useRodal from '@lib/share/custom/useRodal';
import SelectBox from '@lib/share/items/SelectBox';
import Input from '@lib/share/items/Input';
import { SECTION_AUTO_AUCTION } from '@src/actions/types';
import { select1_list, mobile_number_list } from '@src/dummy';

const ExhibitStep02 = () => {
  const dispatch = useDispatch();
  dispatch({ type: SECTION_AUTO_AUCTION });

  const [accountPopup, setAccountPopup, openAccountPopup, closeAccountPopup] = useRodal(false, true);
  const handleTrClick = useCallback(() => {
    setAccountPopup(false);
    document.getElementsByTagName('html')[0].style.overflow="auto";
  }, []);
  
  return (
    <AppLayout>
      <div className="auction-top-banner">
        <div className="content-wrap">
          <h3>내 차 출품하기</h3>
          <p>공개 경쟁 입찰의 오토옥션으로 내 차를 최고가로 판매하세요.</p>
        </div>
      </div>
      <div className="content-wrap auction-step">
        <Steps type={1} contents={['경매약관 및 주의사항', '회원정보', '차량정보', '탁송신청']} active={2} />
      </div>
      <div className="content-sec auction-sec">
        <div className="content-wrap">
          <div className="auction-tit">
            <h4>회원정보</h4>
            <h5>회원정보 등록</h5>
            <p className="info"><em>*</em>필수 입력 항목</p>
          </div>
          <form className="auction-form">
            <fieldset>
              <legend className="away">회원정보 등록</legend>  
              <table summary="회원정보 등록에 대한 내용" className="table-tp2">
                <caption className="away">회원정보 등록</caption>
                <colgroup>
                  <col width="12.68%" />
                  <col width="37.77%" />
                  <col width="12.68%" />
                  <col width="37.77%" />
                </colgroup>
                <tbody>
                  <tr>
                    <th>거점(경매장)</th>
                    <td>시화 경매장</td>
                    <th>경매일</th>
                    <td>2019년 10월 9일(수)</td>
                  </tr>
                  <tr>
                    <th>이름</th>
                    <td colSpan="3">김현대</td>
                  </tr>
                  <tr>
                    <th>휴대폰 번호<em>*</em></th>
                    <td>
                      <label htmlFor="user-phone" className="hide">휴대전화번호</label>
                      <span className="bridge">
                        <SelectBox id="user-phone" className="items-sbox" options={mobile_number_list} width={124} height={48} />
                      </span>
                      <span className="bridge">
                        <Input type="text" placeHolder="" id="user-phone2" width={124} />
                      </span>
                      <span className="bridge">
                        <Input type="text" placeHolder="" id="user-phone3" width={124} />
                      </span>
                    </td>
                    <th>일반전화</th>
                    <td>
                      <label htmlFor="user-phone" className="hide">일반전화</label>
                      <span className="bridge">
                        <SelectBox id="user-phone" className="items-sbox" options={mobile_number_list} width={124} height={48} />
                      </span>
                      <span className="bridge">
                        <Input type="text" placeHolder="" id="user-phone2" width={124} />
                      </span>
                      <span className="bridge">
                        <Input type="text" placeHolder="" id="user-phone3" width={124} />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th>계좌번호</th>
                    <td colSpan="3">                      
                      <label htmlFor="account-num" className="hide">계좌 번호</label>
                      <span className="bridge">
                        <SelectBox id="bank-name" placeHolder="은행명" className="items-sbox" options={select1_list} width={272} height={48} />
                      </span>
                      <span className="bridge">
                        <Input type="text" placeHolder="계좌번호( ' - ' 제외 입력)" id="account-num" width={273} />
                      </span>
                      <Button size="mid" background="gray" title="최근 계좌" width={131} height={48} onClick={(e) => openAccountPopup(e, "fade")} />
                    </td>
                  </tr>
                  <tr>
                    <th>예금주<em>*</em></th>
                    <td colSpan="3">
                      <Input type="text" width={555} />
                      <p className="p-feedback">예금주를 입력해주세요.</p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="tail-info"><span>※</span>계좌 정보는 차량 낙찰 시 대금 송금을 위해 필요합니다.</p>
              <Buttons align="center" marginTop={60} className="w-line">
                <Button size="big" background="blue80" title="다음 단계로" width={240} height={72} href="exhibitStep03" />
              </Buttons>
            </fieldset>
          </form>
        </div>
      </div>
      <RodalPopup show={accountPopup} type={'fade'} closedHandler={closeAccountPopup} title="최근 계좌번호" mode="normal" size="medium" className="account">
        <div className="con-wrap">
          <table summary="최근 계좌번호 제목" className="table-tp1 th-c td-c has-event">
            <caption className="away">최근 계좌번호 제목</caption>
            <colgroup>
              <col width="30%" />
              <col width="30%" />
              <col width="40%" />
            </colgroup>
            <thead>
              <tr>
                <th>예금주</th>
                <th>분당</th>
                <th>계좌번호</th>
              </tr>
            </thead>
          </table>
          <ColoredScrollbars autoHeightMax={241}>
            <table summary="최근 계좌번호 내용 목록" className="table-tp1 th-c td-c">
              <caption className="away">최근 계좌번호 내용 목록</caption>
              <colgroup>
                <col width="30%" />
                <col width="30%" />
                <col width="40%" />
              </colgroup>
              <tbody>
                <tr onClick={handleTrClick}>
                  <td>김현대</td>
                  <td>국민은행</td>
                  <td>010101-02-334455667</td>
                </tr>
                <tr onClick={handleTrClick}>
                  <td>나현대</td>
                  <td>산업은행</td>
                  <td>010101-02-334455667</td>
                </tr>
                <tr onClick={handleTrClick}>
                  <td>박현대</td>
                  <td>우리은행</td>
                  <td>010101-02-334455667</td>
                </tr>
                <tr onClick={handleTrClick}>
                  <td>이현대</td>
                  <td>하나은행</td>
                  <td>010101-02-334455667</td>
                </tr>
                <tr onClick={handleTrClick}>
                  <td>차현대</td>
                  <td>국민은행</td>
                  <td>010101-02-334455667</td>
                </tr>
                <tr onClick={handleTrClick}>
                  <td>김현대</td>
                  <td>국민은행</td>
                  <td>010101-02-334455667</td>
                </tr>
                <tr onClick={handleTrClick}>
                  <td>김현대</td>
                  <td>국민은행</td>
                  <td>010101-02-334455667</td>
                </tr>
              </tbody>
            </table>
          </ColoredScrollbars>
        </div>
      </RodalPopup>
    </AppLayout>
  )
}

export default ExhibitStep02;