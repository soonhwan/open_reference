/* eslint-disable no-alert */
import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PricingAuctionInfo from '@src/components/pricingSystem/pricingAuctionInfo';
import PricingTitleNavi from '@src/components/pricingSystem/pricingTitleNavi';
import PricingUserInfo from '@src/components/pricingSystem/PricingUserInfo';
import PricingCarInfo from '@src/components/pricingSystem/pricingCarInfo';
import PricingBidSucessList from '@src/components/pricingSystem/pricingBidSucessList';
import PricinbCoverAllim from '@src/components/pricingSystem/pricingCoverAllim';
import PricingLayerPopUp from '@src/components/pricingSystem/pricingLayerPopUp';
import PriceChart from '@src/components/marketPrice/priceChart';
import { isPricingTicket } from '@src/utils/PricingUtils';
import AppLayout from '@src/components/layouts/AppLayout';
import CarNameMod from '@src/components/common/CarNameMod';
import SearchCar from '@src/components/common/SearchCar';

import MarketPriceTitle from '@src/components/common/MarketPriceTitle';
import MarketPriceGraph from '@src/components/common/MarketPriceGraph';

import RodalPopup from '@lib/share/popup/RodalPopup';
import useRodal from '@lib/share/custom/useRodal';

import { SECTION_PRICING_SYSTEM } from '@src/actions/types';
import { getPricingMarketPrice, getPricingByCarNo, getPricingBidList, getAuctionDetailInfo, getPricingViewableCount, getPricingTicketInfo, setPricingCarInfo } from '@src/actions/pricingSystemActions';

const Pricing01 = () => {
  const dispatch = useDispatch();
  dispatch({ type: SECTION_PRICING_SYSTEM });

  const userInfo = useSelector((state) => state.common.userInfo);
  const pricingCarInfo = useSelector((state) => state.pricing.pricingCarInfo);
  const bidList = useSelector((state) => state.pricing.bidList);
  const auctionDetailInfo = useSelector((state) => state.pricing.auctionInfo);
  const viewableCnt = useSelector((state) => state.pricing.viewableCnt);
  const pricingTicketInfo = useSelector((state) => state.pricing.prcingTicketInfo);
  const marketPrice = useSelector((state) => state.pricing.marketPrice);

  const [searchMode, setSearchMode] = useState(false);

  const [detailPopupShow, setDetailPopupShow, openDetailPopup, closeDetailPopup] = useRodal(false, true); // 경매정보 상세
  const [namePopupShow, setNamePopupShow, openNamePopup, closeNamePopup] = useRodal(false, true);

  const [isMode, setIsMode] = useState(null); // CarNumber(차량 번호로 조회), CarCondition(차량 조건검색)
  const [withoutGrade, setWithoutGrade] = useState(false); // isMode가 CarNumber(차량 번호로 조회)일 경우 상세등급 정보의 노출 유무 (boolean)

  useEffect(() => {
    dispatch(getPricingViewableCount(userInfo.userId));
    dispatch(getPricingTicketInfo(userInfo.userId));
  }, [dispatch, userInfo]);

  const handleSearchMode = useCallback((e) => {
    e.preventDefault();
    setSearchMode(true);
  }, []);

  const handleSearchCarNumber = useCallback(
    (e, deps) => {
      const hasPricingTicket = isPricingTicket(pricingTicketInfo);
      if (viewableCnt === 0 && !hasPricingTicket) {
        alert('조회가능 횟수를 초과 했습니다.');
        return;
      }
      setIsMode('CarNumber');
      dispatch(getPricingByCarNo(deps.carNo, null, viewableCnt, hasPricingTicket));
      dispatch(getPricingBidList(deps.carNo));
      dispatch(getPricingMarketPrice(deps.carNo));
    },
    [dispatch, pricingTicketInfo, viewableCnt]
  );

  const handleSearchCarCond = useCallback(
    (e, deps) => {
      const hasPricingTicket = isPricingTicket(pricingTicketInfo);
      if (viewableCnt === 0 && !hasPricingTicket) {
        alert('조회가능 횟수를 초과 했습니다.');
        return;
      }
      setIsMode('CarCondition');
      dispatch(getPricingByCarNo(null, deps, viewableCnt, hasPricingTicket));
      dispatch(getPricingBidList(deps));
    },
    [dispatch, pricingTicketInfo, viewableCnt]
  );

  const handleCarInfoChange = useCallback(
    (e, deps) => {
      dispatch(setPricingCarInfo(deps));
    },
    [dispatch]
  );

  const handleAuctionClick = useCallback(
    (e, des) => {
      dispatch(getAuctionDetailInfo(des));
      openDetailPopup(e);
    },
    [dispatch, openDetailPopup]
  );

  return (
    <AppLayout>
      <PricingTitleNavi />
      <div className="content-wrap pricing-wrap">
        <PricingUserInfo userName={userInfo.userName} viewableCnt={viewableCnt} pricingTicketInfo={pricingTicketInfo} />
        <div className="pricing-sec">
          {searchMode === true ? (
            <>
              <SearchCar type="pricingSystem" onSearchCarNoClick={handleSearchCarNumber} onSearchCarCondClick={handleSearchCarCond} />
              <p className="tx-exp-tp5">&#8251; 시세를 조회하시면 차량을 구매할 때의 시세와 예측 가능한 미래시세, 동급 차량의 실제 경매 낙찰 시세를 확인하실 수 있습니다.</p>
            </>
          ) : (
            <PricinbCoverAllim userName={userInfo.userName} onClose={handleSearchMode} />
          )}

          {isMode === 'CarNumber' && ( // 차량 번호로 조회
            <>
              <div className="best-register-car">
                <MarketPriceTitle withoutGrade={withoutGrade} onClick={openNamePopup} />
                <PricingCarInfo withoutGrade={withoutGrade} dataContext={pricingCarInfo} onValueChange={handleCarInfoChange} />
              </div>
              {withoutGrade === false && (
                <div className="best-register-graph">
                  <h4>조회하신 차량의 시세 결과입니다.</h4>
                  <MarketPriceGraph />
                  <PriceChart marketPrice={marketPrice} />
                </div>
              )}
            </>
          )}
          {isMode === 'CarCondition' && ( // 차량 조건으로 조회
            <div className="best-register-car">
              {/* <h4>현대 LF쏘나타 하이브리드 2.0 HEV 프리미엄</h4> */}
              <MarketPriceTitle withoutGrade={withoutGrade} onClick={openNamePopup} />
              <PriceChart marketPrice={marketPrice} />
            </div>
          )}
          <PricingBidSucessList bidList={bidList} isMode={isMode} onAuctionClick={handleAuctionClick} />
        </div>
      </div>

      <PricingLayerPopUp />

      <RodalPopup show={namePopupShow} type={'fade'} closedHandler={closeNamePopup} mode="normal" className="pop-car-name-mod" width={894}>
        <div className="con-wrap">
          <CarNameMod />
        </div>
      </RodalPopup>

      <RodalPopup show={detailPopupShow} type={'fade'} closedHandler={closeDetailPopup} title="경매정보 상세" mode="normal" width={894}>
        <PricingAuctionInfo dataContext={auctionDetailInfo} />
      </RodalPopup>
    </AppLayout>
  );
};

export default Pricing01;
