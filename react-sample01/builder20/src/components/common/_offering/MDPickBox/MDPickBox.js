import React from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import { Thumbnail, TextRenderer, SecondaryBar } from 'components';
import styles from './MDPickBox.scss';
import utils from 'utils';

const MDPickBox = ({ title, subTitle, summary, infoList, subOptions, subValue, prevEvent, onEvent }) => {
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
  const getThumbnail = (itemRenderer, infoItem) => {
    const param = {
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
      setProdUnit: infoItem.bookUnit,
    }
    return (
      <div className="MDPickBoxThumbnail">
        <Thumbnail {...param} />
      </div>
    )
  }

  // 배경 썸네일
  const getThumbnailBG = (infoItem) => {
    const bgStyle = {
      backgroundImage: 'url(https://img-books.onestore.co.kr/thumbnails/img_qasac/1040_480_F22_95' + infoItem.thumbnailImageUrl + ')'
    }
    return (
      <div className="MDPickBoxThumbnailBG" style={bgStyle}></div>
    )
  }

  const param = {
    className: 'MDPickBoxLink',
    onClick: (event) => {
      utils.triggerEvent('click_MDPickBox_Link', onEvent, prevEvent, null, null, event)
    }
  }

  const thumbnailParam = {
    className: 'MDPickBoxThumbnailLink',
    onClick: (event) => {
      utils.triggerEvent('click_MDPickBox_Link', onEvent, prevEvent, null, null, event)
    }
  }

  const keywordParam = {
    subOptions: subOptions,
    subValue: subValue,
    prevEvent: prevEvent,
    onEvent: onEvent
  }

  return (
    <div className="MDPickBox">
      <div className="MDPickBoxWrap">
        <div className="MDPickBoxInner">
          <div className="MDPickBoxThumbnailWrap">
            <a {...thumbnailParam}>
              <div className="MDPickBoxThumbnailCell">
                {getThumbnailBG(infoList[0])}
                {getThumbnail('MDPick', infoList[0])}
              </div>
            </a>
          </div>
          <div className="MDPickBoxTextWrap">
            <a {...param}>
              <div className="MDPickBoxTitle">
                {getText('ST18B', 'Dark', 'MDPickBoxTextTitle', title)}
                <div className="MDPickBoxSubTitle">
                  {getText('B14B', 'White', 'MDPickBoxTextSubTitle', subTitle)}
                </div>
              </div>
              <div className="MDPickBoxSummary">
                {getText('B14', 'Dark', 'LineEll3 tMDPickBoxTextSummary', summary)}
              </div>
            </a>
            <div className="MDPickBoxKeyword">
              <SecondaryBar mode="keyword" {...keywordParam}></SecondaryBar>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(MDPickBox);