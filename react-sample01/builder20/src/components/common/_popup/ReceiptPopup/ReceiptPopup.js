import React, { Fragment } from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import { TextRenderer, LinkRenderer } from 'components';
import styles from './ReceiptPopup.scss';
import utils from 'utils';

const ReceiptPopup = (props) => {
  const clickPopupCacel = (props) => {
    return {
      mode: 'text',
      size: 'B14B',
      color: 'Dark',
      onEvent: (eventName, state, event) => {
        utils.triggerEvent('click_ReceiptPopup_cancelBtn', props.onEvent, props.prevEvent, null, null, event)
      }
    }
  }

  const getPopupTitle = () => {
    let tPriceTag;
    const priceParam = {
      size: 'ST16B',
      color: 'Dark'
    }
    // 무료인 경우
    if (props.freeYn === 'Y') {
      priceParam.color = 'Point';
      tPriceTag = <TextRenderer {...priceParam}>무료</TextRenderer>
    } else {
      tPriceTag = <TextRenderer {...priceParam}>{utils.setComma(props.productInfo.price)} ⓒ</TextRenderer>
    }

    return (
      <div className="ReceiptPopupHeader">
        <div className="ReceiptPopupHeaderInner">
          <TextRenderer size="B12" color="Medium" textClass="Ellipsis">{props.productInfo.regDt}</TextRenderer>
          <div className="ReceiptPopupHeaderTitle">
            <div className="ReceiptPopupHeaderTitleCell">
              <TextRenderer size="ST16B" color="Dark" textClass="Ellipsis">{props.productInfo.text}</TextRenderer>
            </div>
            <div className="ReceiptPopupHeaderTitleCell price">
              {tPriceTag}
            </div>
          </div>
          {!utils.isEmpty(props.productInfo.desc) && <TextRenderer size="B12" color="Medium" textClass="ReceiptPopupHTSummary">{props.productInfo.desc}</TextRenderer>}
        </div>
      </div>
    )
  }

  const getPopupSale = () => {
    const tSale = props.saleInfos.map((item, index) => {
      return (
        <li key={index}>
          <span className="itemCell"><TextRenderer size="B14" color="Dark" textClass="Ellipsis">{item.text}</TextRenderer></span>
          <em className="itemCell"><TextRenderer size="B14" color="Dark">-{utils.setComma(item.price)} ⓒ</TextRenderer></em>
        </li>
      )
    })

    return (
      <div className="ReceiptPopupContentItem">
        <dl>
          <dt><TextRenderer size="B12" color="Medium" textClass="Ellipsis">할인 및 포인트 적용</TextRenderer></dt>
          <dd>
            <ul>
              {tSale}
            </ul>
          </dd>
        </dl>
      </div>
    )
  }

  const getPopupFinalpayment = () => {
    return (
      <div className="ReceiptPopupContentItem">
        <dl>
          <dt><TextRenderer size="B12" color="Medium" textClass="Ellipsis">최종 결제</TextRenderer></dt>
          <dd>
            <ul>
              <li>
                <span><TextRenderer size="B14" color="Dark" textClass="Ellipsis">{props.pryment.text}</TextRenderer></span>
                <em className="itemCell"><TextRenderer size="B14B" color="Point">{utils.setComma(props.pryment.price)} ⓒ</TextRenderer></em>
              </li>
            </ul>
          </dd>
        </dl>
      </div>
    )
  }

  const getPopupBenefits = () => {
    const tBenefits = props.benefits.map((item, index) => {
      return (
        <li key={index}>
          <span className="itemCell"><TextRenderer size="B12" color="Medium" textClass="Ellipsis">{item.text}</TextRenderer></span>
          <em className="itemCell"><TextRenderer size="B12" color="Medium">지급일 {item.regDt}</TextRenderer></em>
        </li>
      )
    })

    return (
      <div className="ReceiptPopupContentBenefits">
        <div className="ReceiptPopupContentItem benefits">
          <dl>
            <dt><TextRenderer size="B12" color="Medium" textClass="Ellipsis">혜택</TextRenderer></dt>
            <dd>
              <ul>
                {tBenefits}
              </ul>
            </dd>
          </dl>
        </div>
      </div>
    )
  }

  const getPopupContent = () => {
    return (
      <div className="ReceiptPopupContent">
        <div className="ReceiptPopupContentInner">
          {!utils.isEmpty(props.saleInfos) && getPopupSale()}
          {!utils.isEmpty(props.pryment) && getPopupFinalpayment()}
        </div>
        {!utils.isEmpty(props.benefits) && getPopupBenefits()}
      </div>
    )
  }

  const getReceiptCopy = () => {
    const param = {
      mode: 'text',
      size: 'B12',
      color: 'Medium',
      btnClass: 'btnSmall btnLightTrans',
      onEvent: (eventName, state, event) => {
        utils.triggerEvent('click_ReceiptPopup_copy', props.onEvent, props.prevEvent, null, null, event)
      }
    }
    return (
      <div className="ReceiptPopupCopy">
        <div className="ReceiptPopupCopyBox">
          <TextRenderer size="B14" color="Medium" textClass="Ellipsis ReceiptPopupCopyText">SKTstore01_20190221144117285230754899922</TextRenderer>
          <div className="ReceiptPopupCopyBtn">
            <LinkRenderer {...param}>영수증 번호 복사</LinkRenderer>
          </div>
        </div>
      </div>
    )
  }

  const getReceiptFooterBtn = () => {
    const cancelParam = clickPopupCacel(props);
    cancelParam.btnClass = 'btnLink';

    return (
      <div className="ReceiptPopupFooterBtn">
        <div className="ReceiptPopupFooterBtnInner">
          <div className="ReceiptPopupFooterBtnRight">
            <LinkRenderer {...cancelParam}>{props.firstBtnNm}</LinkRenderer>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={'ReceiptPopupWrap ' + props.mode}>
      <div className="ReceiptPopupWrapInner">
        <div className="ReceiptPopupCoWrap">
          <div className="ReceiptPopupCoScroll">
            {getPopupTitle()}
            {!(props.freeYn === 'Y') && getPopupContent()}
          </div>
          {!(props.freeYn === 'Y') && getReceiptCopy()}
          {getReceiptFooterBtn()}
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(ReceiptPopup);