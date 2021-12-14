import React, { Fragment } from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import { Thumbnail, LinkRenderer, TextRenderer } from 'components';
import styles from './DetailNextProduct.scss';
import utils from 'utils';
import PropTypes from 'prop-types';

const CLICK_DETAILNEXTPRODUCT_DETAIL = 'click_DetailNextProduct_detail';
const CLICK_DETAILNEXTPRODUCT_MAINBUTTON = 'click_DetailNextProduct_mainbutton';

const DetailNextProduct = (props) => {
  // 텍스트
  const getText = (size, color, textClass, text) => {
    const param = {
      size: size,
      color: color,
      textClass: textClass
    }
    return <TextRenderer {...param}>{text}</TextRenderer>
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

  const getTitle = () => {
    return (
      <div className="DetailNextProductText">
        {getText('B12', 'Medium', 'Ellipsis DetailNextProductNm', '마지막으로 본 작품')}
        {getText('B12', 'Drak', 'Ellipsis DetailNextProductTitle', props.productItem.prodNm)}
        {getText('C10', 'Medium', 'Ellipsis DetailNextProductOwn', '소장')}
      </div>
    )
  }

  const getProductBtn = () => {
    const param = {
      className: 'DetailNextProductLink',
      onClick: (event) => {
        utils.triggerEvent(CLICK_DETAILNEXTPRODUCT_DETAIL, props.onEvent, props.prevEvent, null, null, event)
      }
    }
    return (
      <a {...param}>
        {getThumbnail('DetailNextProduct', 'DetailNextProduct', props.productItem)}
        {getTitle(props.productItem)}
      </a>
    );
  }

  const getNextBtn = () => {
    const param = {
      mode: 'text',
      btnClass: 'btnSmall btnExtraL50 btnBlock',
      size: 'B12B',
      color: 'Dark',
      prevEvent: props.prevEvent,
      // onEvent: props.onEvent
      onEvent: (eventName, state, event) => {
        props.onEvent(CLICK_DETAILNEXTPRODUCT_MAINBUTTON, props.mainBtnCond, event)
      }
    }
    return (
      <div className="DetailNextProductBtn">
        <LinkRenderer {...param}>다음화</LinkRenderer>
      </div>
    )
  }

  return (
    <div className="DetailNextProductWrap">
      <div className="DetailNextProductInner">
        <div className="DetailNextProductBox">
          <div className="DetailNextProductBoxInner">
            {getProductBtn()}
            {getNextBtn()}
          </div>
        </div>
      </div>
    </div>
  )
}

DetailNextProduct.propTypes = {
  productItem: PropTypes.object,
  mainBtnCond: PropTypes.shape({
    type: PropTypes.number,
    detail: PropTypes.string,
    visible: PropTypes.bool,
  }),
  onEvent: PropTypes.func,
}

export default withStyles(styles)(DetailNextProduct);