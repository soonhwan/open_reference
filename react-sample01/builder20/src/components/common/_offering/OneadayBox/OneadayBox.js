import React from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import { Thumbnail, TextRenderer } from 'components';
import styles from './OneadayBox.scss';
import utils from 'utils';

const OneadayBox = ({ title, saleInfo, summary, infoList, prevEvent, onEvent }) => {
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
      <div className="OneadayBoxLinkThumbnail">
        <Thumbnail {...param} />
      </div>
    )
  }

  const param = {
    className: 'OneadayBoxLink',
    onClick: (event) => {
      utils.triggerEvent('click_OneadayBox_Link', onEvent, prevEvent, null, null, event)
    }
  }

  return (
    <div className="OneadayBox">
      <div className="OneadayBoxWrap">
        <div className="OneadayBoxInner">
          <a {...param}>
            <div className="OneadayBoxLinkLeft">
              <div className="OneadayBoxHeader">
                <div className="OneadayBoxTitle">
                  {getText('ST18B', 'Dark', 'OnedayTextTitle', title)}
                </div>
                {getText('ENG22B', 'Point', 'OnedayTextSale', saleInfo)}
              </div>
              <div className="OneadayBoxSummary">
                {getText('B14', 'Dark', 'LineEll2 tOnedayTextSummary', summary)}
              </div>
            </div>
            <div className="OneadayBoxLinkRight">
              {getThumbnail('Oneaday', infoList[0])}
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(OneadayBox);