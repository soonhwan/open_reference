import React, { Fragment, memo } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles'
import { Icon, TextRenderer } from 'components';
import styles from './Thumbnail.scss'

const getThumbnailSize = (type, thumbnailType, webToonsYn) => {
  const size = {};

  if (type === 'default1Row' || type === 'like' || type === 'swiperCard' || type === 'historyList' || type === 'giftReceived' || type === 'giftSent') {
    if (thumbnailType === 'square') {
      size.w = 224;
      size.h = 224;
    } else {
      size.w = 224;
      size.h = 320;
    }
  } else if (type === 'rankingOffering' || type === 'noticeList' || type === 'replyList' || type === 'episode') {
    if (thumbnailType === 'square') {
      size.w = 192;
      size.h = 192;
    } else {
      size.w = 192;
      size.h = 272;
    }
  } else if (type === 'Oneaday' || type === 'MDPick') {
    if (thumbnailType === 'square') {
      size.w = 384;
      size.h = 384;
    } else {
      size.w = 288;
      size.h = 400;
    }
  } else if (type === 'Detail') {
    if (webToonsYn === 'Y') {
      size.w = 1376;
      size.h = 604;
    } else {
      if (thumbnailType === 'square') {
        size.w = 384;
        size.h = 384;
      } else {
        size.w = 384;
        size.h = 544;
      }
    }
  } else if (type === 'DetailNextProduct' || type === 'PayPopup') {
    if (thumbnailType === 'square') {
      size.w = 128;
      size.h = 128;
    } else {
      size.w = 128;
      size.h = 176;
    }
  } else if (type === 'SearchAuto') {
    if (thumbnailType === 'square') {
      size.w = 64;
      size.h = 64;
    } else {
      size.w = 64;
      size.h = 88;
    }
  } else {
    if (thumbnailType === 'square') {
      size.w = 224;
      size.h = 224;
    } else {
      size.w = 224;
      size.h = 320;
    }
  }
  return size;
}

const Thumbnail = ({ mode, type, prodNm, url, thumbnailType, option, badgeNm, plus19Yn, audioBooksYn, setProdYn, webToonsYn, setProdCount, setProdUnit }) => {
  const size = getThumbnailSize(type, thumbnailType, webToonsYn);

  const getThumbnail = () => {
    const param = {
      src: `https://img-books.onestore.co.kr/thumbnails/img_qasac/${size.w}_${size.h}_${option}${url}`,
      alt: prodNm,
      className: 'ThumbnailImg'
    }

    return (
      <img {...param} />
    );
  }

  // 뱃지
  const getBadge = () => {
    let tBadge = (badgeNm) && <div className="ThumbnailTopBadge"><TextRenderer size="C10B" color="White">{badgeNm}</TextRenderer></div>;
    if (type === 'PayPopup') {
      tBadge = '';
    }
    return (
      <Fragment>
        { tBadge }
      </Fragment>
    )
  }

  // 오디오 아이콘
  const getAudioBooks = () => {
    const tAudioBook = audioBooksYn === 'Y' && <div className="ThumbnailBottomAudioBook"><Icon icon="audiobook" iconsize="16" text="오디오북" /></div>;
    return (
      <Fragment>
        { tAudioBook }
      </Fragment>
    )
  }

  // 성인 아이콘
  const getPlus19 = () => {
    const tPlus19 = plus19Yn === 'Y' && <div className="ThumbnailBottomPlus19"><Icon icon="adult" iconsize="16" text="성인" /></div>;
    return (
      <Fragment>
        { tPlus19 }
      </Fragment>
    )
  }

  // 세트 상품 표시
  const getSetProd = () => {
    if (type === 'episode' || type === 'PayPopup') {
      return '';
    } else {
      if (setProdYn === 'Y') {
        return (
          <Fragment>
            <div className="ThumbnailBottomSetProd"><TextRenderer size="B12B" color="White" textClass="Ellipsis">{setProdCount}{setProdUnit} 세트</TextRenderer></div>
          </Fragment>
        )
      }
    }
    return '';
  }

  // Edit 표시
  const getEditView = () => {
    const tEidtView = (mode === 'listEdit' || mode === 'gridEdit') && <div className="ThumbnailEditBox"><div className="ThumbnailEditBoxInner"><div className="ThumbnailEditBoxInnerCell"><Icon icon="thumbEdit" iconsize="32" text="" /></div></div></div>
    return (
      <Fragment>
        { tEidtView }
      </Fragment>
    )
  }

  return (
    <div className={'Thumbnail ' + type + ' ' + thumbnailType}>
      <div className="ThumbnailInner">
        {getThumbnail()}
        <div className="ThumbnailTop">
          {getBadge()}
        </div>
        <div className="ThumbnailBottom cboth">
          {getAudioBooks()}
          {getPlus19()}
          {getSetProd()}
        </div>
        {getEditView()}
      </div>
    </div>
  )
}

export default withStyles(styles)(memo(Thumbnail));
