import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import SlideCarDetail from '@src/components/common/SlideCarDetail';
import Buttons from '@lib/share/items/Buttons';
import Button from '@lib/share/items/Button';

class PricingAuctionInfo extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    if (isEmpty(this.props.dataContext)) {
      return null;
    }

    const { actionInfo, imageList } = this.props.dataContext;
    // location: "시화"
    // date: "2019.11"
    // name: "그랜저(IG) IG220<br />디젤 프리미엄"
    // year: 2018
    // fuel: "디젤"
    // km: "53,485"
    // color: "NU(9)<br />그랑블루"
    // exhaust: "2,199"
    // purpose: "법인/법인<br />상품"
    // carNumber: "KMHF<br />141RBJA<br />160647"
    // grade: "A6"
    // initialRegist: "2018.03.30"
    // mission: "A/T"
    // options: "ABS VDC 스마트키 내비(일반)"
    // price: 2240

    return (
      <React.Fragment>
        <div className="popup-car-info">
          <SlideCarDetail car_gallery={imageList || []} />
          <Buttons align="right" marginTop={32}>
            <Button size="mid" line="gray" radius={true} title="성능점검표" width={100} height={32} />
            <Button size="mid" line="gray" radius={true} title="사고이력조회" width={100} height={32} />
          </Buttons>
        </div>
        <div className="popup-table-wrap">
          <table summary="경매정보 상세에 대한 내용" className="table-tp1">
            <caption className="away">경매정보 상세입니다.</caption>
            <colgroup>
              <col width="20%" />
              <col width="30%" />
              <col width="20%" />
              <col width="30%" />
            </colgroup>
            <tbody>
              <tr>
                <th>거점</th>
                <td>{actionInfo.location || ''}</td>
                <th>소유</th>
                <td>{actionInfo.purpose || ''}</td>
              </tr>
              <tr>
                <th>판매일</th>
                <td>{actionInfo.date}</td>
                <th>용도</th>
                <td>{actionInfo.props || ''}</td>
              </tr>
              <tr>
                <th>연식</th>
                <td>{actionInfo.noy || actionInfo.year || ''}</td>
                <th>평가</th>
                <td>{actionInfo.evl || actionInfo.grade || ''}</td>
              </tr>
              <tr>
                <th>최초등록일</th>
                <td>{actionInfo.frstRegDt || actionInfo.initialRegist || ''}</td>
                <th>수출항목</th>
                <td>X</td>
              </tr>
              <tr>
                <th>미션</th>
                <td>{actionInfo.msn || actionInfo.mission || ''}</td>
                <th>시작가</th>
                <td>{actionInfo.strtPrc || actionInfo.price || ''}만원</td>
              </tr>
              <tr>
                <th>연료</th>
                <td>{actionInfo.fuel || ''}</td>
                <th>낙찰가</th>
                <td>{actionInfo.sbidPrc || ''}만원</td>
              </tr>
              <tr>
                <th>색상</th>
                <td>{actionInfo.clr || actionInfo.color || ''}</td>
                <th>옵션</th>
                <td>{actionInfo.opt || actionInfo.options || ''}</td>
              </tr>
              <tr>
                <th>배기량</th>
                <td>{actionInfo.dspl || actionInfo.exhaust || ''}</td>
                <th rowSpan="2">특이사항</th>
                <td rowSpan="2">{actionInfo.memo || ''}</td>
              </tr>
              <tr>
                <th>주행거리</th>
                <td>{actionInfo.drvDist || actionInfo.km || ''}km</td>
              </tr>
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

PricingAuctionInfo.propTypes = {
  dataContext: PropTypes.object
};

export default PricingAuctionInfo;
