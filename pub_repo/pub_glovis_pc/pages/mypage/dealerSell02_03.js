import { useDispatch } from 'react-redux';
import moment from 'moment';
import AppLayout from '@src/components/layouts/AppLayout';
import MypageNavi from '@src/components/common/MypageNavi';
import DatePicker from '@src/components/common/calendar/DatePicker';
import CarOptions from '@src/components/common/CarOptions';
import CarAddOption from '@src/components/common/CarAddOption';
import Steps from '@lib/share/items/Steps';
import Button from '@lib/share/items/Button';
import Buttons from '@lib/share/items/Buttons';
import Input from '@lib/share/items/Input';
import SelectBox from '@lib/share/items/SelectBox';
import { select1_list } from '@src/dummy';
import { SECTION_MYPAGE } from '@src/actions/types';

const DealerSell02_03 = () => {
  const dispatch = useDispatch();
  dispatch({ type: SECTION_MYPAGE });

  const now = moment();

  return (
    <AppLayout>
      <div className="content-wrap">
        <MypageNavi mode="dealer" />

        <div className="mypage-state-sec">
          <h3>차량등록</h3>
          <div className="dealer-register-step">
            <Steps type={2} contents={['차량정보조회/입력', '가격 및 차량소개', '성능점검', '차량사진 등록', '결제', '등록완료']} active={1} />
          </div>

          <form className="register-form">
            <fieldset>
              <legend className="away">차량 정보 조회</legend>
              <table summary="차량 기본 정보에 대한 내용" className="table-tp1 input mt80">
                <caption>차량 기본 정보</caption>
                <colgroup>
                  <col width="13%" />
                  <col width="27%" />
                  <col width="13%" />
                  <col width="47%" />
                </colgroup>
                <tbody>
                  <tr>
                    <th>차량번호</th>
                    <td>
                      <label htmlFor="car-num" className="hide">차량번호</label>
                      <Input type="text" value="47러0383" id="car-num" width={160} height={40} />
                    </td>
                    <th>차량명</th>
                    <td>
                      <label className="items-sbox-label" htmlFor="car-name">기아 K3</label>
                      <span className="bridge">
                        <SelectBox id="car-name" className="items-sbox" options={select1_list} width={130} height={40} />
                      </span>
                      <SelectBox id="car-name2" className="items-sbox" options={select1_list} width={190} height={40} />
                      {/* <label className="items-sbox-label" htmlFor="car-name" className="hide">차량명</label>
                      <span className="bridge">
                        <SelectBox id="car-name" className="items-sbox" options={select1_list} width={130} height={40} />
                      </span>
                      <SelectBox id="car-name2" className="items-sbox" options={select1_list} width={190} height={40} /> */}
                    </td>
                  </tr>
                  <tr>
                    <th>최초등록일</th>
                    <td>
                      <DatePicker defaultValue={now} inputWidth={160} inputHeight={40} />
                    </td>
                    <th>형식년도</th>
                    <td>
                      <SelectBox id="form-date" className="items-sbox" options={select1_list} width={160} height={40} />
                    </td>
                  </tr>
                  <tr>
                    <th>색상</th>
                    <td>
                      <SelectBox id="car-color" className="items-sbox" options={select1_list} width={160} height={40} />
                    </td>
                    <th>연료</th>
                    <td>
                      <SelectBox id="car-fuel" className="items-sbox" options={select1_list} width={160} height={40} />
                    </td>
                  </tr>
                  <tr>
                    <th>배기량</th>
                    <td>
                      <label htmlFor="engine-cc" className="hide">배기량</label>
                      <Input type="text" value="3,342" id="engine-cc" width={160} height={40} />
                      <em>cc</em>
                    </td>
                    <th>차종</th>
                    <td>
                      <SelectBox id="car-type" className="items-sbox" options={select1_list} width={160} height={40} />
                    </td>
                  </tr>
                  <tr>
                    <th>용도</th>
                    <td>
                      <SelectBox id="car-use" className="items-sbox" options={select1_list} width={160} height={40} />
                    </td>
                    <th>출고가격</th>
                    <td>
                      <label htmlFor="fac-price" className="hide">출고가격</label>
                      <Input type="text" value="60,100,000" id="fac-price" width={160} height={40} />
                      <em>원</em>
                    </td>
                  </tr>
                  <tr>
                    <th className="tx-red80">주행거리<br />(현재기준)</th>
                    <td colSpan="3">
                      <label htmlFor="mileage" className="hide">주행거리</label>
                      <Input type="text" placeHolder="주행거리를 입력해주세요." id="mileage" width={321} height={40} /><em className="tx-red80">km</em>
                    </td>
                  </tr>
                </tbody>
              </table>
              <CarOptions title="기본 옵션" type={2} className="mt80 pt0" mode="check"/>

              {/* 추가옵션 */}
              <CarAddOption />

            </fieldset>
          </form>
          <Buttons align="right" marginTop={48}>
            <Button size="big" background="blue80" title="다음" width={127} height={60} />
          </Buttons>
        </div>
      </div>
    </AppLayout>
  )
}

export default DealerSell02_03
