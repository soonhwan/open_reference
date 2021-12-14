import React, { Fragment } from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import { TextRenderer, LinkRenderer, Thumbnail, Checkbox, Icon } from 'components';
import styles from './PayPopup.scss';
import { useState } from 'hooks';
import utils from 'utils';

const PayPopup = (props) => {
  const [booksPointUse, setBooksPointUse] = useState(false);
  const [couponOpenValue, setCouponOpenValue] = useState(false);

  // 간편결제 팝업 Header
  const getPopupHeader = () => {
    let tText = '';
    const titleParam = {
      size: 'ST16',
      color: 'Medium',
      textClass: 'Ellipsis'
    }
    const closeParam = {
      mode: 'icon',
      btnClass: 'PayPopupCloseBtn',
      icon: 'closeBlack',
      iconsize: 24,
      onEvent: (eventName, state, event) => {
        utils.triggerEvent('click_PayPopup_closeBtn', props.onEvent, props.prevEvent, null, null, event)
      }
    }

    tText += (utils.setComma(props.myHold.cash) + ' ©')
    tText += (' + ' + utils.setComma(props.myHold.point) + ' ℗')

    return (
      <div className="PayPopupContentHeader">
        <TextRenderer {...titleParam}>{tText} 보유</TextRenderer>
        <LinkRenderer {...closeParam}>닫기</LinkRenderer>
      </div>      
    )
  }

  // 오디오북 Y/N
  const getAudioBooksYn = (infoItem) => {
    let audioBooksYn = 'N';
    if (infoItem.topMenuId === 'DP31' || infoItem.metaClsfCd === 'CT38' || infoItem.metaClsfCd === 'CT39') {
      audioBooksYn = 'Y';
    }
    return audioBooksYn;
  }

  // 썸네일
  const getThumbnail = (mode, itemRenderer, infoItem) => {
    const param = {
      mode: mode,
      type: itemRenderer,
      prodNm: infoItem.prodNm,
      url: infoItem.thumbnailImageUrl,
      thumbnailType: infoItem.thumbnailType,
      option: 'F10_95',
      badgeNm: infoItem.badgeNm,
      plus19Yn: infoItem.plus19Yn,
      audioBooksYn: getAudioBooksYn(infoItem),
      setProdYn: infoItem.setProdYn,
      setProdCount: infoItem.totalCount,
      setProdUnit: infoItem.bookUnit
    }
    return (
      <div className="DetailNextProductThumbnail">
        <Thumbnail {...param} />
      </div>
    )
  }

  // 간편결제 상품 타이틀 정보
  const getTitle = () => {
    const param = {
      size: 'B14',
      color: 'Dark',
      textClass: 'LineEll2 PayPopupProductTitle'
    }

    let tText = props.productItem.prodNm;
    if (!utils.isEmpty(props.multiNum)) {
      tText += (' 외 ' + props.multiNum + props.productItem.bookUnit);
    }

    return (
      <Fragment>
        <TextRenderer {...param}>{tText}</TextRenderer>
      </Fragment>
    )
  }

  // 단수 상품에 대한 대여/소장 정보
  const getPurchase = () => {
    let tTitle = '';
    let tPrice = '';
    if (!utils.isEmpty(props.rentInfo)) {
      tTitle = props.rentInfo.text + ' (' + props.rentInfo.day + '일)';
      tPrice = utils.setComma(props.rentInfo.price) + ' ©';
    } else if (!utils.isEmpty(props.ownInfo)) {
      tTitle = props.ownInfo.text;
      tPrice = utils.setComma(props.ownInfo.price) + ' ©';
    }
    return (
      <div className="PayPopupProductPurchase">
        <div className="PayPopupProductPurchaseLeft"><TextRenderer size="B14" color="Medium">{tTitle}</TextRenderer></div>
        <div className="PayPopupProductPurchaseRight"><TextRenderer size="B14" color="Dark">{tPrice}</TextRenderer></div>
      </div>
    )
  }

  // 복수 상품에 대한 "만료" 포함에 대한 체크
  const getPurchaseVoucher = () => {
    const param = {
      name: 'aaa',
      checked: false,
      disabled: false,
      readOnly: false,
      onEvent: (eventName, state, event) => {
        utils.triggerEvent('change_PayPopup_completed', props.onEvent, props.prevEvent, state, !state, event)
      }
    }
    return (
      <div className="PayPopupProductCheck">
        <Checkbox {...param}>만료 포함</Checkbox>
      </div>
    )
  }

  // 복수 상품에 대한 대여/소장 정보
  const getPurchaseList = () => {
    let tTitle = '';
    let tPrice = '';
    if (!utils.isEmpty(props.rentInfo)) {
      tTitle = 'N' + props.productItem.bookUnit + ' ' + props.rentInfo.text + ' (' + props.rentInfo.day + '일)';
      tPrice = utils.setComma(props.rentInfo.price) + ' ©';
    } else if (!utils.isEmpty(props.ownInfo)) {
      tTitle = 'N' + props.productItem.bookUnit + ' ' + props.ownInfo.text;
      tPrice = utils.setComma(props.ownInfo.price) + ' ©';
    }

    return (
      <div className="PayPopupProductList">
        <div className="PayPopupProductListInner">
          <ul>
            <li>
              <span className="itemCell"><TextRenderer size="B12" color="Medium">{tTitle}</TextRenderer></span>
              <em className="itemCell"><TextRenderer size="B12" color="Medium">{tPrice}</TextRenderer></em>
            </li>
            <li>
              <span className="itemCell"><TextRenderer size="B12" color="Medium">이용 N화</TextRenderer></span>
              <em className="itemCell"><TextRenderer size="B12" color="Medium">- 500 ©</TextRenderer></em>
            </li>
            <li>
              <span className="itemCell"><TextRenderer size="B12" color="Medium">할인 NN화</TextRenderer></span>
              <em className="itemCell"><TextRenderer size="B12" color="Medium">- 500 ©</TextRenderer></em>
            </li>
          </ul>
          <ul className="total">
            <li>
              <span className="itemCell"><TextRenderer size="B12B" color="Dark">총 결제 금액</TextRenderer></span>
              <em className="itemCell"><TextRenderer size="B12B" color="Dark">4,000 ©</TextRenderer></em>
            </li>
          </ul>
        </div>
      </div>
    )
  }

  // 간편결제 팝업 상품 및 정보
  const getProduct = () => {
    let tAddition = '';

    if (props.mode === 'basic' || props.mode === 'timeCoupon') {
      tAddition = getPurchase();
    } else if (props.mode === 'voucher') {
      tAddition = getPurchaseVoucher();
    }

    return (
      <Fragment>
        <div className={'PayPopupProduct ' + props.productItem.thumbnailType}>
          <div className="PayPopupProductThumbnail">
            {getThumbnail('PayPopup', 'PayPopup', props.productItem)}
          </div>
          <div className="PayPopupProductInfo">
            {getTitle()}
            {tAddition}
          </div>
        </div>
        {props.mode === 'voucher' && getPurchaseList()}
      </Fragment>
    )
  }

  // 쿠폰
  const getLinkCoupon = () => {
    const linkParam = {
      onClick: (event) => {
        event.preventDefault();
        setCouponOpenValue(!couponOpenValue);
      }
    }

    if (props.mode === 'timeCoupon') {
      return (
        <div className="PayPopupBooksCouponLink">
          <div className="PayPopupBooksCouponLinkText"><TextRenderer size="B14" color="Medium" textClass="Ellipsis">3시간마다 무료</TextRenderer></div>
          <div className="PayPopupBooksCouponLinkPrice"><TextRenderer size="B14" color="Point">- 1,000 ©</TextRenderer></div>
          <div className="PayPopupBooksCouponLinkIcon"><Icon icon="selectDimDown" iconsize="24" /></div>
        </div>
      )
    } else {
      if (props.couponLists.length > 0) {
        return (
          <a {...linkParam} className={'PayPopupBooksCouponLink' + (couponOpenValue ? ' open' : '')}>
            <div className="PayPopupBooksCouponLinkText"><TextRenderer size="B14" color="Dark" textClass="Ellipsis">쿠폰명</TextRenderer><em>30</em></div>
            <div className="PayPopupBooksCouponLinkPrice"><TextRenderer size="B14" color="Point">- 1,000 ©</TextRenderer></div>
            <div className="PayPopupBooksCouponLinkIcon"><Icon icon="selectDown" iconsize="24" /></div>
          </a>
        )
      } else {
        return (
          <div className="PayPopupBooksCouponLink">
            <div className="PayPopupBooksCouponLinkText"><TextRenderer size="B14" color="Medium" textClass="Ellipsis">적용가능 쿠폰 없음</TextRenderer></div>
            <div className="PayPopupBooksCouponLinkIcon"><Icon icon="selectDimDown" iconsize="24" /></div>
          </div>
        )
      }
    }
  }

  const getCouponList = () => {
    if (props.mode !== 'timeCoupon' && props.couponLists.length > 0) {
      const noCouponParam = {
        onClick: (event) => {
          event.preventDefault();
          setCouponOpenValue(false);
        }
      }
      const tCoupon = props.couponLists.map((item, index) => {
        let couponDuplicate = '';
        const selectCouponParam = {
          onClick: (event) => {
            event.preventDefault();
            setCouponOpenValue(false);
          }
        }

        if (!utils.isEmpty(item.duplicate)) {
          couponDuplicate = <em>{item.duplicate}</em>;
        }

        return (
          <li key={index}>
            <a {...selectCouponParam} className="PayPopupBooksCouponLink">
              <div className="PayPopupBooksCouponLinkText"><TextRenderer size="B14" color="Dark" textClass="Ellipsis">{item.couponNm}</TextRenderer>{couponDuplicate}</div>
            </a>
          </li>
        )
      })
      return (
        <ul className={'PayPopupBooksCouponList' + (couponOpenValue ? ' open' : '')}>
          <li>
            <a {...noCouponParam} className="PayPopupBooksCouponLink">
              <div className="PayPopupBooksCouponLinkText"><TextRenderer size="B14" color="Dark" textClass="Ellipsis">선택안함</TextRenderer></div>
            </a>
          </li>
          {tCoupon}
        </ul>
      )
    }
  }

  const getCoupon = () => {
    return (
      <div className="PayPopupBooksCoupon">
        <div className="PayPopupBooksCouponInner">
          {getLinkCoupon()}
        </div>
        {getCouponList()}
      </div>
    )
  }

  // 북스 포인트 사용
  const getBooksPoint = () => {
    const checkboxParam = {
      mode: 'basic',
      name: 'bbb',
      checked: false,
      disabled: false,
      readOnly: false,
      onEvent: (eventName, state, event) => {
        setBooksPointUse(!booksPointUse);
        utils.triggerEvent('change_PayPopup_booksPoint', props.onEvent, props.prevEvent, null, null, event)
      }
    }

    const priceParam = {
      size: 'B14',
      color: booksPointUse ? 'Point' : 'Medium',
    }

    if (props.myHold.point <= 0) {
      checkboxParam.disabled = true;
      priceParam.color = 'Light';
    }

    return (
      <div className="PayPopupBooksPoint">
        <div className="PayPopupBooksPointLeft">
          <Checkbox {...checkboxParam}>북스포인트 사용</Checkbox>
        </div>
        <div className="PayPopupBooksPointRight">
          <TextRenderer {...priceParam}>{utils.setComma(props.myHold.point) + ' ℗'}</TextRenderer>
        </div>
      </div>
    )
  }

  // 간편결제 하단 버튼
  const getPopupFooterBtn = () => {
    let tBtn = '';

    const btnParam = {
      mode: 'text',
      btnClass: 'btnLarge btnBlock',
      size: 'ST16',
      color: 'White'
    }

    const btnDimParam = {
      mode: 'icontextno',
      btnClass: 'btnLarge btnDark30 btnBlock',
      size: 'ST16',
      color: 'White',
      icon: 'infoWhite',
      iconsize: 22,
    }

    // 캐쉬 사용
    tBtn = <LinkRenderer {...btnParam}>4,000 © 사용</LinkRenderer>

    // 캐쉬 충전
    // tBtn = <LinkRenderer {...btnParam}>999 © 부족 / 북스캐쉬 충전</LinkRenderer>

    // 적용가능한 시다무 100% 할인 쿠폰이 있는 경우
    if (props.mode === 'timeCoupon') {
      tBtn = <LinkRenderer {...btnParam}>무료로 보고 시간마다 무료 쿠폰 받기</LinkRenderer>
    }

    // 전체 구매 불가
    // tBtn = <LinkRenderer {...btnDimParam}>구매가능한 작품이 없습니다</LinkRenderer>

    // 로딩
    // tBtn = <LinkRenderer {...btnParam}><Icon icon="loading" iconsize="22">로딩중</Icon></LinkRenderer>

    return (
      <div className="ReceiptPopupFooterBtn">
        <div className="ReceiptPopupFooterBtnInner">
          {tBtn}
        </div>
      </div>
    )
  }

  return (
    <div className={'PayPopupWrap ' + props.mode}>
      <div className="PayPopupWrapInner">
        <div className="PayPopupContent">
          {getPopupHeader()}
          <div className="PayPopupCoWrap">
            <div className="PayPopupCoScroll">
              {getProduct()}
              {getCoupon()}
              {props.mode !== 'timeCoupon' && getBooksPoint()}
            </div>
          </div>
          {getPopupFooterBtn()}
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(PayPopup);