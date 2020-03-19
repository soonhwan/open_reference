import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import AppLayout from '@src/components/layouts/AppLayout';
import Steps from '@lib/share/items/Steps';
import Buttons from '@lib/share/items/Buttons';
import Button from '@lib/share/items/Button';
import SelectBox from '@lib/share/items/SelectBox';
import Input from '@lib/share/items/Input';
import RadioGroup from '@lib/share/items/RadioGroup';
import CheckBox from '@lib/share/items/CheckBox';
import Textarea from '@lib/share/items/Textarea';
import DatePicker from '@src/components/common/calendar/DatePicker';
import { SECTION_AUTO_AUCTION } from '@src/actions/types';
import { select1_list, radio_consign, mobile_number_list } from '@src/dummy';

const ExhibitStep04 = () => {
  const dispatch = useDispatch();
  dispatch({ type: SECTION_AUTO_AUCTION });

  const now = moment();
  const [consignMode, setConsignMode] = useState(1);
  const handleConsignChange = useCallback((e) => {
    setConsignMode(Number(e));
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
        <Steps type={1} contents={['경매약관 및 주의사항', '회원정보', '차량정보', '탁송신청']} active={4} />
      </div>
      <div className="content-sec auction-sec">
        <div className="auction-consign-wrap">
          <div className="content-wrap">
            <div className="auction-tit">
              <h4>탁송신청</h4>
              <h5>출품 차량 목록</h5>
            </div>
            <table summary="출품 차량 목록" className="table-tp1 th-c td-c mt32">
              <caption className="away">출품 차량 목록</caption>
              <colgroup>
                <col width="60px" />
                <col width="*" />
                <col width="172px" />
                <col width="172px" />
                <col width="172px" />
                <col width="172px" />
              </colgroup>
              <thead>
                <tr>
                  <th>선택</th>
                  <th>모델명</th>
                  <th>차량번호</th>
                  <th>차주명</th>
                  <th>시작가</th>
                  <th>낙찰 희망가</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><CheckBox id="chk-car-1" checked={true} className="single" /></td>
                  <td className="tl">ALL_NEW_크루즈 1.4 터보 LS</td>
                  <td>01가1234</td>
                  <td>김현대</td>
                  <td>1,200만원</td>
                  <td>1,250만원</td>
                </tr>
                <tr>
                  <td><CheckBox id="chk-car-2" className="single" /></td>
                  <td className="tl">[현대] HOT_Hatch_i30 가솔린 1.4 터보 튜너 패키지</td>
                  <td>01가1234</td>
                  <td>김현대</td>
                  <td>1,000만원</td>
                  <td>1,050만원</td>
                </tr>
                <tr>
                  <td><CheckBox id="chk-car-3" className="single" /></td>
                  <td className="tl">[현대] HOT_Hatch_i30 가솔린 1.4 터보 튜너 패키지</td>
                  <td>01가1234</td>
                  <td>김현대</td>
                  <td>1,000만원</td>
                  <td>1,050만원</td>
                </tr>
                <tr>
                  <td><CheckBox id="chk-car-4" className="single" /></td>
                  <td className="tl">[현대] HOT_Hatch_i30 가솔린 1.4 터보 튜너 패키지</td>
                  <td>01가1234</td>
                  <td>김현대</td>
                  <td>1,000만원</td>
                  <td>1,050만원</td>
                </tr>
                <tr>
                  <td><CheckBox id="chk-car-5" className="single" /></td>
                  <td className="tl">[현대] HOT_Hatch_i30 가솔린 1.4 터보 튜너 패키지</td>
                  <td>01가1234</td>
                  <td>김현대</td>
                  <td>1,000만원</td>
                  <td>1,050만원</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="content-wrap">
          <div className="auction-tit">
            <h5>차량정보 등록</h5>
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
                    <th>탁송 방법<em>*</em></th>
                    <td colSpan={consignMode === 1 ? null : 3}>
                      <RadioGroup dataList={radio_consign} onChange={handleConsignChange} />
                    </td>
                    {
                      consignMode === 1 &&
                      <>
                        <th>탁송 희망일<em>*</em></th>
                        <td>
                          <span className="bridge">
                            <DatePicker defaultValue={now} inputWidth={172} />
                          </span>
                          <span className="bridge">
                            <SelectBox id="consign-hour" className="items-sbox" options={select1_list} width={100} height={48} />
                          </span>
                          <span className="bridge">
                            <SelectBox id="consign-minute" className="items-sbox" options={select1_list} width={100} height={48} />
                          </span>
                        </td>
                      </>
                    }
                  </tr>
                  {
                    consignMode === 1 &&
                    <>
                      <tr>
                        <th>주소<em>*</em></th>
                        <td colSpan="3">
                          <span className="bridge2">
                            <span className="bridge">
                              <Input type="text" placeHolder="우편번호" disabled={true} id="consign-address-number" width={258} />
                            </span>
                            <Button size="mid" background="gray" title="우편번호" width={124} height={48} />
                          </span>
                          <span className="bridge2">
                            <span className="bridge">
                              <Input type="text" placeHolder="주소" disabled={true} id="consign-address" width={392} />
                            </span>
                            <span className="bridge">
                              <Input type="text" placeHolder="상세 주소" id="consign-address-detail" width={560} />
                            </span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <th>탁송 인계자명<em>*</em></th>
                        <td>
                          <Input type="text" id="consign-handover-people" width={392} />
                        </td>
                        <th>휴대폰 번호<em>*</em></th>
                        <td>
                          <span className="bridge">
                            <SelectBox id="consign-mobile-1st" className="items-sbox" options={mobile_number_list} width={124} height={48} isValue={0} />
                          </span>
                          <span className="bridge">
                            <Input type="number" value="1234" id="consign-mobile-2nd" width={124} />
                          </span>
                          <span className="bridge">
                            <Input type="number" value="5678" id="consign-mobile-3rd" width={124} />
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <th>남기실 말씀</th>
                        <td colSpan="3">
                          <Textarea type="tp1" height={140} />
                        </td>
                      </tr>
                    </>
                  }
                </tbody>
              </table>
              <Buttons align="center" marginTop={60} className="w-line">
                <Button size="big" background="blue80" title="출품 완료" width={240} height={72} href="exhibitStep05" />
              </Buttons>
            </fieldset>
          </form>
        </div>
      </div>
    </AppLayout>
  )
}

export default ExhibitStep04;
