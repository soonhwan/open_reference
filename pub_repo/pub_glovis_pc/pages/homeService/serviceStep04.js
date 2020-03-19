import { useState } from 'react';
import { useDispatch } from 'react-redux';
import AppLayout from '@src/components/layouts/AppLayout'
import Button from '@lib/share/items/Button'
import Buttons from '@lib/share/items/Buttons'
import RadioGroup from '@lib/share/items/RadioGroup'
import RadioItem from '@lib/share/items/RadioItem'
import Input from '@lib/share/items/Input'
import Tooltip from '@lib/share/items/Tooltip';
import TooltipItem from '@lib/share/items/TooltipItem';
import TooltipCont from '@lib/share/items/TooltipCont';
import Steps from '@lib/share/items/Steps'
import { numberFormat } from '@src/utils/CommonUtil';
import { radio_pay } from '@src/dummy';
import { SECTION_HOME_SERVICE } from '@src/actions/types';

const ServiceStep04 = () => {
  const dispatch = useDispatch();
  dispatch({ type: SECTION_HOME_SERVICE });

  const [paymentMode, setPaymentMode] = useState('default'); // default, edit, result
  const [paymentPrice, setPaymentPrice] = useState('');

  const handleClickChkbox = (mode) => () => {
    if (mode === 'default') {
      setPaymentPrice('');
      setPaymentMode('default');
    } else if (mode === 'edit') {
      setPaymentMode('edit');
    }
  }
  const handleClickButton = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setPaymentMode('result');
  }
  const inputChange = (e, value) => {
    console.log('inputChange: ', value);
    setPaymentPrice(e.target.value);
  }
  const inputBlur = (e) => console.log('inputBlur: ', e);
  const inputFocus = (e) => console.log('inputFocus: ', e);

  return (
    <AppLayout>
      <div className="service-top-banner">
        <div className="content-wrap">
          <h3>홈서비스</h3>
          <p>집으로 배송 받고 3일간 타보고 결정하는 현대 오토벨의 홈서비스</p>
          <i className="top-banner-bg"></i>
        </div>
      </div>
      <div className="service-step">
        <Steps type={1} contents={['차량정보 확인', '보증상품 선택', '계약자정보 입력', '예상결제금액 확인', '신청 완료']} active={4} />
      </div>
      <div className="content-wrap service-wrap">
        <div className="service-tit">
          <h4>예상결제 금액 확인</h4>
        </div>
        <div className="service-detail">
          <table summary="결제 정보에 대한 내용" className="table-tp1 th-c td-c service-payment">
            <caption>결제 정보</caption>
            <colgroup>
              <col width="14.2%" />
              <col width="14.2%" />
              <col width="14.2%" />
              <col width="14.2%" />
              <col width="14.2%" />
              <col width="14.2%" />
              <col width="14.2%" />
            </colgroup>
            <tbody>
              <tr>
                <th rowSpan="2">차량가격</th>
                <th colSpan="3">이전관리비
                  <Tooltip placement="bottom" width={514} event="click">
                    <TooltipItem>
                      <i className="ico-question"></i>
                    </TooltipItem>
                    <TooltipCont>
                      <div className="transfer-cost">
                        <p className="tx-exp-tp5">중고차 이전비는 아래와 같은 항목으로 구성됩니다.</p>
                        <div className="service-notify">
                          <p><i className="ico-dot sml"></i> 취등록세: 차량 취득에 부과되는 취득세와 등록을 위해 부과되는 등록세로 이루어집니다.</p>
                          <p><i className="ico-dot sml"></i> 차량관리비: 차량을 보관한 중고차 상사에게 납부하는 비용입니다.</p>
                          <p><i className="ico-dot sml"></i> 이전대행료: 등록신청대행에 소요되는 실제비용입니다.</p>
                        </div>
                      </div>
                    </TooltipCont>
                  </Tooltip>
                </th>
                <th rowSpan="2">EW 상품비</th>
                <th rowSpan="2">배송비</th>
                <th rowSpan="2">총 결제 금액</th>
              </tr>
              <tr>
                <th>취등록세</th>
                <th>차량관리비</th>
                <th>이전대행료</th>
              </tr>
              <tr>
                <td>
                  <p className="price-tp4 tx-gray">37,500,000<span className="won">원</span></p>
                </td>
                <td>
                  <p className="price-tp4 tx-gray">2,970,000<span className="won">원</span></p>
                </td>
                <td>
                  <p className="price-tp4 tx-gray">198,000<span className="won">원</span></p>
                </td>
                <td>
                  <p className="price-tp4 tx-gray">22,000<span className="won">원</span></p>
                </td>
                <td>
                  <p className="price-tp4 tx-gray">110,000<span className="won">원</span></p>
                </td>
                <td>
                  <p className="price-tp4 tx-gray">150,000<span className="won">원</span></p>
                </td>
                <td>
                  <p className="price-tp4">41,206,500<span className="won">원</span></p>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="service-notify">
            <p>&#8251; 이전관리비 항목 중 관리비용은 계좌이체로만 결제하실 수 있습니다.</p>
          </div>
          <div className="service-car-tit mt64">
            <h5>결제 방식 선택</h5>
          </div>
          <div className="radio-chk-wrap icon list3">
            <RadioGroup
              dataList={radio_pay}
              defaultValue={0}
              boxType={true}
              className="icon"
            >
              <RadioItem onClick={handleClickChkbox('default')}>
                <p><i className="ico-clock"></i></p>
              </RadioItem>
              <RadioItem onClick={handleClickChkbox('default')}>
                <p><i className="ico-smartphone"></i></p>
              </RadioItem>
              <RadioItem onClick={handleClickChkbox('edit')}>
                {
                  paymentMode === 'default' &&
                  <p><i className="ico-setting"></i></p>
                }
                {
                  paymentMode === 'edit' &&
                  <div className="account-install-dim">
                    <label htmlFor="account-price">할부+계좌이체</label>
                    <Input type="number" placeHolder="계좌이체금액 입력을 입력해주세요." value={paymentPrice} id="account-price" width={284} height={48} onChange={inputChange} onBlur={inputBlur} onFocus={inputFocus} />
                    <em>원</em>
                    <Button size="big" line="white" color="white" title="확인" width={284} height={48} marginTop={10} onClick={handleClickButton} />
                  </div>
                }
                {
                  paymentMode === "result" &&
                  <div className="account-install">
                    <p className="price-tp3">{numberFormat(paymentPrice)}<span className="won">원</span></p>
                    <span>나머지는 할부로 결제합니다.</span>
                  </div>
                }
              </RadioItem>
            </RadioGroup>
          </div>
        </div>
        <Buttons align="center" marginTop={60}>
          <Button size="big" background="gray" title="이전 단계로" sub="(계약자정보 입력)" className="ws1" width={240} height={72} />
          <Button size="big" background="blue80" title="신청 완료" width={240} height={72} href="serviceStep05" />
        </Buttons>
      </div>
    </AppLayout>
  )
}

export default ServiceStep04;