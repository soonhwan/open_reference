import React, { Fragment, memo } from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import { Thumbnail, TextRenderer, LinkRenderer } from 'components';
import styles from './ItemRenderer.scss';
import utils from 'utils';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

// 검색어 강조 표현
const getSearchText = (val, keyword) => {
  return val.replace(new RegExp(keyword, 'gi'), `<b>${keyword}</b>`);
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
    setProdUnit: infoItem.bookUnit,
  }

  if (utils.isEmpty(infoItem.thumbnailImageUrl)) {
    return '';
  }
  return (
    <div className="itemRendererThumbnail">
      <Thumbnail {...param} />
    </div>
  )
}

// 텍스트
const getText = (size, color, textClass, text) => {
  const param = {
    size: size,
    color: color,
    textClass: textClass,
    text: text
  }
  return <TextRenderer {...param} />
}

const getRankingNum = (rankingNum, setClass) => {
  const tNum = (rankingNum < 10) ? '0' + rankingNum : rankingNum;
  return getText('ST18B', 'Light', setClass, tNum);
}

// 상품 타이틀
const getTitle = (prodNm, setClass) => {
  return (
    <div className={setClass} dangerouslySetInnerHTML={{ __html: prodNm }}></div>
  )
}

// 저자 정보
const getArtist = (infoItem, setClass) => {
  const tArtist = infoItem.artistNmSub === '' ? infoItem.artistNm : infoItem.artistNm + ' ∙ ' + infoItem.artistNmSub;
  return (
    <div className={setClass}>
      {tArtist}
    </div>
  )
}

// 검색 타이틀 북패스 뱃지
const getTitleSearchBookPass = (infoItem) => {
  if (infoItem.bookpassYn === 'Y') {
    return '<span class="ItemRendererTextTitleBookPass">북패스</span> ';
  }
  return '';
}

// 상품 타이틀 (검색 리스트 타이틀)
const getTitleSearch = (infoItem, setClass, keyword) => {
  const tBookPass = getTitleSearchBookPass(infoItem);
  const tTitle = tBookPass + getSearchText(infoItem.prodNm, keyword);
  return (
    <div className={setClass} dangerouslySetInnerHTML={{ __html: tTitle }}></div>
  )
}

// 저자 정보 (검색 리스트 저자)
const getArtistSearch = (infoItem, setClass, keyword) => {
  let tArtist = infoItem.artistNmSub === '' ? infoItem.artistNm : infoItem.artistNm + ' ∙ ' + infoItem.artistNmSub;
  tArtist = getSearchText(tArtist, keyword);
  return (
    <div className={setClass} dangerouslySetInnerHTML={{ __html: tArtist }}></div>
  )
}

// 텍스트 부가 정보 (기본 1열 부가 정보)
const getTextAddition = (infoItem) => {
  return (
    <div className="itemRendererTextAddition">
      { (getAudioBooksYn(infoItem) === 'Y') ? getAudiobookType('B12', 'Medium', 'ItemRendererTextSeries', infoItem) : getEpisode('B12', 'Medium', 'ItemRendererTextSeries', infoItem) }
      { (getAudioBooksYn(infoItem) === 'N') && getPublisher('B12', 'Medium', 'ItemRendererTextPublisher', infoItem) }
      {getRegDate('B12', 'Medium', 'ItemRendererTextRegDt', infoItem)}
    </div>
  )
}

// 오디오북 타입 정보
const getAudiobookType = (size, color, textClass, infoItem) => {
  return getText(size, color, textClass, infoItem.audiobookTypeNm);
}

// 등록된 에피소드 개수 + 완결, 연재주기 또는 휴재
const getEpisode = (size, color, textClass, infoItem) => {
  let tSeries;
  // if (infoItem.totalCount > 1) {
    tSeries = '총 ' + infoItem.totalCount + infoItem.bookUnit;
    if (infoItem.completedYn === 'Y') {
      tSeries += ' 완결'
    } else if (infoItem.completedYn === 'N') {
      tSeries += ' 연재중'
    }
    return getText(size, color, textClass, tSeries);
  // }
}

// 출판사명
const getPublisher = (size, color, textClass, infoItem) => {
  return getText(size, color, textClass, infoItem.publisherNm);
}

// 배포일
const getRegDate = (size, color, textClass, infoItem) => {
  return getText(size, color, textClass, infoItem.regDt);
}

// 에피소드 부가 정보
const getEpisodeEvaluation = (infoItem) => {
  return (
    <div className="itemRendererTextEvaluation">
      {getIconText('B12', 'Medium', 'ItemRendererTextAvgScore', 'avgscore', 12, infoItem.avgScore)}
      {getIconText('B12', 'Medium', 'ItemRendererTextComment', 'comment', 12, infoItem.commentCount)}
      <div className="linkSt">{getText('B12', 'Medium', 'ItemRendererTextRegDt', infoItem.regDt)}</div>
    </div>
  )
}

// 에피소드 오디오북 정보 
const getEpisodeAudioFileInfo = (infoItem) => {
  return (
    <div className="itemRendererTextAudioBooks">
      {getText('B12', 'Medium', 'tItemRendererTextFile', '15분 15초')}
      {getText('B12', 'Medium', 'tItemRendererTextFile', '39.2MB')}
    </div>
  )
}

// 에피소드 가격 정보 
const getEpisodePrice = (infoItem) => {
  return (
    <div className="itemRendererTextPriceBox">
      <div className="itemRendererTextPriceSub">
        {getText('B12', 'Medium', 'ItemRendererTextPrice', '대여')}
        {getText('B12', 'Medium', 'ItemRendererTextPrice', '300 ⓒ / 1일')}
      </div>
      <div className="itemRendererTextPriceSub">
        {getText('B12', 'Medium', 'ItemRendererTextPrice', '소장')}
        {getText('B12', 'Light', 'ItemRendererTextPriceDel', '100 ⓒ / 1일')}
        {getText('B12', 'Medium', 'ItemRendererTextPrice', '100 ⓒ / 1일')}
      </div>
    </div>
  )
}

// 상품의 평균 별점, 댓글
const getIconText = (size, color, btnClass, icon, iconsize, text) => {
  const param = {
    mode: 'icontextno',
    size: size,
    color: color,
    btnClass: btnClass,
    icon: icon,
    iconsize: iconsize
  }
  return <LinkRenderer {...param}>{text}</LinkRenderer>
}


const ProductItem = {
  default1Row: ({ mode, itemRenderer, infoItem }) => {
    return (
      // 상품정보
      <div className="ItemRendererInner">
        {getThumbnail(mode, itemRenderer, infoItem)}
        <div className="itemRendererTextWrap">
          {getTitle(infoItem.prodNm, 'ItemRendererTextTitle')}
          {getArtist(infoItem, 'ItemRendererTextArtist')}
          {getTextAddition(infoItem)}
          <div className="itemRendererTextEvaluation">
            {getIconText('B12', 'Medium', 'ItemRendererTextAvgScore', 'avgscore', 12, infoItem.avgScore)}
            {getIconText('B12', 'Medium', 'ItemRendererTextComment', 'comment', 12, infoItem.commentCount)}
          </div>
        </div>
      </div>
    )
  },
  search1Row: ({ mode, itemRenderer, infoItem, keyword }) => {
    return (
      // 상품정보
      <div className="ItemRendererInner">
        {getThumbnail(mode, itemRenderer, infoItem)}
        <div className="itemRendererTextWrap">
          {getTitleSearch(infoItem, 'ItemRendererTextTitle', keyword)}
          {getArtistSearch(infoItem, 'ItemRendererTextArtist', keyword)}
          {getTextAddition(infoItem)}
          <div className="itemRendererTextEvaluation">
            {getIconText('B12', 'Medium', 'ItemRendererTextAvgScore', 'avgscore', 12, infoItem.avgScore)}
            {getIconText('B12', 'Medium', 'ItemRendererTextComment', 'comment', 12, infoItem.commentCount)}
          </div>
        </div>
      </div>
    )
  },
  ranking: ({ mode, itemRenderer, infoItem, rankingNum }) => {
    return (
      // 상품정보
      <div className="ItemRendererInner">
        {getThumbnail(mode, itemRenderer, infoItem)}
        <div className="itemRendererTextWrap">
          {getRankingNum(rankingNum, 'ItemRendererTextRanking')}
          {getTitle(infoItem.prodNm, 'ItemRendererTextTitle')}
          {getArtist(infoItem, 'ItemRendererTextArtist')}
          <div className="itemRendererTextEvaluation">
            {getIconText('B12', 'Medium', 'ItemRendererTextAvgScore', 'avgscore', 12, infoItem.avgScore)}
          </div>
        </div>
      </div>
    )
  },
  rankingOffering: ({ mode, itemRenderer, infoItem, rankingNum }) => {
    return (
      // 상품정보
      <div className="ItemRendererInner">
        {getThumbnail(mode, itemRenderer, infoItem)}
        <div className="itemRendererTextWrap">
          {getRankingNum(rankingNum, 'ItemRendererTextRanking')}
          {getTitle(infoItem.prodNm, 'ItemRendererTextTitleRankOffer')}
          {getArtist(infoItem, 'ItemRendererTextArtistRankOffer')}
        </div>
      </div>
    )
  },
  like: ({ mode, itemRenderer, infoItem }) => {
    return (
      // 상품정보
      <div className="ItemRendererInner">
        {getThumbnail(mode, itemRenderer, infoItem)}
        <div className="itemRendererTextWrap">
          {getTitle(infoItem.prodNm, 'ItemRendererTextTitleLike')}
          {getArtist(infoItem, 'ItemRendererTextArtistLike')}
        </div>
      </div>
    )
  },
  swiperCard: ({ mode, itemRenderer, infoItem }) => {
    return (
      // 상품정보
      <div className="ItemRendererInner">
        {getThumbnail(mode, itemRenderer, infoItem)}
        <div className="itemRendererTextWrap">
          {getTitle(infoItem.prodNm, 'ItemRendererTextTitleLike')}
          {getArtist(infoItem, 'ItemRendererTextArtistLike')}
        </div>
      </div>
    )
  },
  noticeList: ({ mode, itemRenderer, infoItem }) => {
    return (
      // 상품정보
      <div className="ItemRendererInner">
        {getThumbnail(mode, itemRenderer, infoItem)}
        <div className="itemRendererTextWrap">
          {getTitle('작품명의 신간 업데이트를 확인해보세요.', 'ItemRendererTextTitle')}
          {getText('B12', 'Medium', 'ItemRendererTextRegDt', '2020.09.11')}
        </div>
      </div>
    )
  },
  replyList: ({ mode, itemRenderer, infoItem }) => {
    return (
      // 상품정보
      <div className="ItemRendererInner">
        {getThumbnail(mode, itemRenderer, infoItem)}
        <div className="itemRendererTextWrap">
          {getTitle('<b>닉네임</b>님이 대댓글을 남기셨습니다.', 'ItemRendererTextTitle')}
          {getText('B12', 'Medium', 'ItemRendererTextCommentDesc', '대댓글 본문 텍스트 최대 두줄')}
          {getText('B12', 'Medium', 'ItemRendererTextRegDt', '2020.09.11')}
        </div>
      </div>
    )
  },
  historyList: ({ mode, itemRenderer, infoItem }) => {
    return (
      // 상품정보
      <div className="ItemRendererInner">
        {getThumbnail(mode, itemRenderer, infoItem)}
        <div className="itemRendererTextWrap">
          {getTitle(infoItem.prodNm, 'ItemRendererTextTitle')}
          {getArtist(infoItem, 'ItemRendererTextArtist')}
          {getText('B12', 'Medium', 'ItemRendererTextRegDt', '2020.09.11 <em>20일 남음</em>')}
          {getText('B12', 'Medium', 'ItemRendererTextPrice', '9,900 ⓒ')}
        </div>
      </div>
    )
  },
  giftReceived: ({ mode, itemRenderer, infoItem }) => {
    return (
      // 상품정보
      <div className="ItemRendererInner">
        {getThumbnail(mode, itemRenderer, infoItem)}
        <div className="itemRendererTextWrap">
          {getTitle(infoItem.prodNm, 'ItemRendererTextTitle')}
          {getText('B12', 'Medium', 'ItemRendererTextRegDt', '수신일 2020.09.11')}
          {getText('B12', 'Medium', 'ItemRendererTextPerson', '보낸사람 010-12134-9573')}
        </div>
      </div>
    )
  },
  giftSent: ({ mode, itemRenderer, infoItem }) => {
    return (
      // 상품정보
      <div className="ItemRendererInner">
        {getThumbnail(mode, itemRenderer, infoItem)}
        <div className="itemRendererTextWrap">
          {getTitle(infoItem.prodNm, 'ItemRendererTextTitle')}
          {getText('B12', 'Medium', 'ItemRendererTextRegDt', '발신일 2020.09.11')}
          {getText('B12', 'Medium', 'ItemRendererTextPrice', '9,900 ⓒ')}
          {getText('B12', 'Medium', 'ItemRendererTextPerson', '받은사람 010-12134-9573')}
        </div>
      </div>
    )
  },
  episode: ({ mode, itemRenderer, infoItem }) => {
    return (
      // 상품정보
      <div className="ItemRendererInner">
        {getAudioBooksYn(infoItem) !== 'Y' && getThumbnail(mode, itemRenderer, infoItem)}
        <div className="itemRendererTextWrap">
          {getTitle(infoItem.prodNm, 'ItemRendererTextTitle')}
          {getAudioBooksYn(infoItem) !== 'Y' && getEpisodeEvaluation(infoItem)}
          {getAudioBooksYn(infoItem) === 'Y' && getEpisodeAudioFileInfo(infoItem)}
          {getAudioBooksYn(infoItem) !== 'Y' && getEpisodePrice(infoItem)}
        </div>
      </div>
    )
  },
  // 샘플 개발을 위해 임시 추가
  coupon: ({ infoItem }) => {
    const getAmt = (infoItem) => {
      if (infoItem.couponDcType === 'PD015502') {
        return (<div>할인율 : {infoItem.couponAmt}% ({infoItem.useRestCnt})</div>)
      } else { // PD015501
        return (<div>가격 : {infoItem.couponAmt} ({infoItem.useRestCnt})</div>)
      }
    }
    return (
      // 상품정보
      <div className="ItemRendererInner">
        쿠폰 : {getAmt(infoItem)}
      </div>
    )
  },
}

// 사이드 영수증 버튼
const getItemSideReceiptBtn = (props) => {
  const sideParam = {
    className: 'ItemRendererSideBtn',
  }

  const receiptParam = {
    mode: 'icontext',
    btnClass: 'ItemRendererSideReceipt',
    size: 'C10',
    color: 'Medium',
    icon: 'receipt',
    iconsize: 20,
    onEvent: (eventName, state, e) => {
      // eventNm, onEvent, prevEvent, value, oldValue, event
      utils.triggerEvent('click_ListEdit_SideReceipt', props.onEvent, props.prevEvent, null, null, e)
    }
  }

  return (
    <div {...sideParam}><LinkRenderer {...receiptParam}>영수증</LinkRenderer></div>
  )
}

// 사이드 선물받기 버튼
const getItemSideGiftDownBtn = (props) => {
  const sideParam = {
    className: 'ItemRendererSideBtn',
  }

  const giftParam = {
    mode: 'icontext',
    btnClass: 'ItemRendererSideGift',
    size: 'C10',
    color: 'Medium',
    icon: 'giftGrey',
    iconsize: 20,
    onEvent: (eventName, state, e) => {
      // eventNm, onEvent, prevEvent, value, oldValue, event
      utils.triggerEvent('click_ListEdit_SideGiftDown', props.onEvent, props.prevEvent, null, null, e)
    }
  }

  return (
    <div {...sideParam}><LinkRenderer {...giftParam}>받기</LinkRenderer></div>
  )
}

// 사이드 보기 버튼
const getItemSideEpisodeBtn = (props) => {
  const sideParam = {
    className: 'ItemRendererSideBtn',
  }

  const episodeParam = {
    mode: 'icontext',
    btnClass: 'ItemRendererSideEpisode',
    size: 'C10',
    color: 'Medium',
    icon: 'episodeViewGrey',
    iconsize: 20,
    onEvent: (eventName, state, e) => {
      // eventNm, onEvent, prevEvent, value, oldValue, event
      utils.triggerEvent('click_ListEdit_SideEisode', props.onEvent, props.prevEvent, null, null, e)
    }
  }

  return (
    <div {...sideParam}><LinkRenderer {...episodeParam}>보기</LinkRenderer></div>
  )
}

// 사이드 버튼
const getItemSideBtn = (props) => {
  if (props.itemRenderer === 'historyList' || props.itemRenderer === 'giftSent') {
    return getItemSideReceiptBtn(props);
  } else if (props.itemRenderer === 'giftReceived') {
    return getItemSideGiftDownBtn(props);
  } else if (props.itemRenderer === 'episode') {
    return getItemSideEpisodeBtn(props);
  } else {
    return '';
  }
}

// 편집 버튼
const getItemEditBtn = (props) => {
  const CHANGE_LIST_EDIT = 'click_ListEdit';
  const param = {
    className: 'ItemRendererEditLink',
    onClick: (e) => {
      // eventNm, onEvent, prevEvent, value, oldValue, event
      utils.triggerEvent(CHANGE_LIST_EDIT, props.onEvent, props.prevEvent, null, null, e)
    }
  }
  const tEditBtn = (props.mode === 'listEdit' || props.mode === 'gridEdit') && <a {...param}></a>
  return (
    <Fragment>
      { tEditBtn }
    </Fragment>
  )
}

const ItemRenderer = (props) => {
  const CHANGE_LIST = 'click_ItemRenderer';
  const param = {
    className: 'ItemRendererLink ' + props.itemRenderer,
    onClick: (e) => {
      // eventNm, onEvent, prevEvent, value, oldValue, event
      utils.triggerEvent(CHANGE_LIST, props.onEvent, props.prevEvent, props.infoItem, null, e)
    }
  }

  const getItemRenderer = (props) => {
    let Renderer;
    if (props.itemRenderer === 'default1Row') {
      Renderer = ProductItem.default1Row
    } else if (props.itemRenderer === 'search1Row') {
      Renderer = ProductItem.search1Row
    } else if (props.itemRenderer === 'ranking') {
      Renderer = ProductItem.ranking
    } else if (props.itemRenderer === 'rankingOffering') {
      Renderer = ProductItem.rankingOffering
    } else if (props.itemRenderer === 'like') {
      Renderer = ProductItem.like
    } else if (props.itemRenderer === 'swiperCard') {
      Renderer = ProductItem.swiperCard
    } else if (props.itemRenderer === 'noticeList') {
      Renderer = ProductItem.noticeList
    } else if (props.itemRenderer === 'replyList') {
      Renderer = ProductItem.replyList
    } else if (props.itemRenderer === 'historyList') {
      Renderer = ProductItem.historyList
    } else if (props.itemRenderer === 'giftReceived') {
      Renderer = ProductItem.giftReceived
    } else if (props.itemRenderer === 'giftSent') {
      Renderer = ProductItem.giftSent
    } else if (props.itemRenderer === 'episode') {
      Renderer = ProductItem.episode
    } else if (props.itemRenderer === 'coupon') {
      Renderer = ProductItem.coupon
    } else {
      Renderer = ProductItem.default1Row
    }

    return <Renderer {...props} />
  }

  return (
    <div className={'ItemRendererLinkBox type' + props.mode}>
      {/* 편집 모드에서 선택이 된 경우 "editSel" 클래스를 추가해주세요 */}
      {/* 알림의 도서 및 댓글에서 새글인경우 "newSel" 클래스를 추가 */}
      <div className={'ItemRendererLinkBoxInner ' + props.itemRenderer}>
        <a {...param}>
          {getItemRenderer(props)}
        </a>
        {getItemSideBtn(props)}
        {getItemEditBtn(props)}
      </div>
    </div>
  )
}

export default withStyles(styles)(memo(ItemRenderer))
