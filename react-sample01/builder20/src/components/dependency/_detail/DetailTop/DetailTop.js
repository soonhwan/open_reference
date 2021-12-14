import React, { Fragment } from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import { Thumbnail, LinkRenderer, TextRenderer, Icon } from 'components';
import { LikeContainer, ScoreContainer, ShareContainer } from 'containers';
import styles from './DetailTop.scss';
import utils from 'utils';
import { useState, useEffect, useRef } from 'hooks';
import PropTypes from 'prop-types';

const CLICK_DETAILTOP_THUMBNAIL = 'click_DetailTop_thumbnail';
const CLICK_DETAILTOP_MAINBUTTON = 'click_DetailTop_mainbutton';
const CLICK_DETAILTOP_MYAVGSCORE = 'click_DetailTop_myAvgScore';

const DetailTop = (props) => {
  const [myAvgscoreYnValue, setMyAvgscoreYnValue] = useState(props.myavgscoreYn)
  const [myAvgscoreValue, setMyAvgscoreValue] = useState(props.myavgScoreNm);

  // 부모 컴포넌트에서 별점 유무 및 점수 받아주기
  useEffect(() => {
    setMyAvgscoreYnValue(props.myavgscoreYn);
    setMyAvgscoreValue(props.myavgScoreNm);
  }, [props.myavgscoreYn, props.myavgScoreNm]);

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

  // 웹툰 Y/N
  const getWebToonsYn = (infoItem) => {
    let webToonYn = 'N';
    if (infoItem.topMenuId === 'DP26' || infoItem.metaClsfCd === 'CT27') {
      webToonYn = 'Y';
    }
    return webToonYn;
  }

  // 썸네일
  const getThumbnail = (mode, itemRenderer, infoItem) => {
    const param = {
      mode: mode,
      type: itemRenderer,
      prodNm: infoItem.prodNm,
      url: infoItem.thumbnailImageUrl,
      thumbnailType: infoItem.thumbnailType,
      option: (getWebToonsYn(infoItem) === 'Y') ? 'F22_95' : 'F10_95',
      badgeNm: infoItem.badgeNm,
      plus19Yn: infoItem.plus19Yn,
      audioBooksYn: getAudioBooksYn(infoItem),
      setProdYn: infoItem.setProdYn,
      setProdCount: infoItem.totalCount,
      setProdUnit: infoItem.bookUnit,
      webToonsYn: getWebToonsYn(infoItem),
    }
    return (
      <div className="itemRendererThumbnail">
        <Thumbnail {...param} />
      </div>
    )
  }
  
  // 썸네일 링크
  const getThumbnailLink = () => {
    const param = {
      className: 'DetailTopThumbnailLink',
      onClick: (event) => {
        utils.triggerEvent(CLICK_DETAILTOP_THUMBNAIL, props.onEvent, props.prevEvent, null, null, event)
      }
    }
    return (
      <a {...param}>
        {getThumbnail('Detail', 'Detail', props.productItem)}
      </a>
    )
  }

  // 장르 및 타이틀
  const getGenreTitle = (infoItem) => {
    return (
      <Fragment>
        {getText('B12', 'Medium', 'Ellipsis DetailTopTextGenre', '순정')}
        {getText('ST18B', 'Dark', 'DetailTopTextTitle', infoItem.prodNm)}
      </Fragment>
    )
  }

  // 부가 정보
  const getAddition = (infoItem) => {
    let tAddition = '';
    let tAdditionEtc = ''; // 출판사 및 에피소드 정보;
    if (getAudioBooksYn(infoItem) === 'Y') {
      // 오디오북 저자 정보
      tAddition = getAudioBooksArtist('B14', 'Medium', 'Ellipsis DetailTopTextPublisher', infoItem);
    } else {
      tAddition = getArtist('B14', 'Medium', 'Ellipsis DetailTopTextArtist', infoItem);
      if (infoItem.bookClsfCd === 'DP004302' || infoItem.bookClsfCd === 'DP004305' || infoItem.topMenuId === 'DP29' || infoItem.metaClsfCd === 'CT29') {
        // 에피소드 정보 (연재 / 단행+연재 / 웹소설인 경우)
        tAdditionEtc = <div className="DetailTopTextAddition01">{getEpisode('B14', 'Medium', 'Ellipsis DetailTopTextEpisode', infoItem)}</div>
      } else {
        // 출판사
        tAdditionEtc = <div className="DetailTopTextAddition01">{getPublisher('B14', 'Medium', 'Ellipsis DetailTopTextPublisher', infoItem)}</div>
      }
    }
    return (
      <Fragment>
        {tAddition}
        {tAdditionEtc}
      </Fragment>
    )
  }

  // 오디오북 저자 정보
  const getAudioBooksArtist = (size, color, textClass, infoItem) => {
    return (
      <div className="DetailTopTextAudioPublisher">
        <dl><dt>저자</dt><dd>{getText(size, color, textClass, infoItem.artistNm)}</dd></dl>
        { !utils.isEmpty(infoItem.artistNmSub) && <dl><dt>낭독</dt><dd>{getText(size, color, textClass, infoItem.artistNmSub)}</dd></dl> }
      </div>
    )
  }

  // 저자 정보
  const getArtist = (size, color, textClass, infoItem) => {
    let tArtist = ''

    if (utils.isEmpty(infoItem.artistNmSub)) {
      tArtist = infoItem.artistNm;
    } else {
      tArtist = infoItem.artistNm + ' ∙ ' + infoItem.artistNmSub;
    }
    return (
      <Fragment>
        {getText(size, color, textClass, tArtist)}
      </Fragment>
    )
  }

  // 출판사 정보
  const getPublisher = (size, color, textClass, infoItem) => {
    let tPublisherNm = '';
    if (!utils.isEmpty(infoItem.publisherNm)) {
      tPublisherNm = getText(size, color, textClass, infoItem.publisherNm);
    }
    return (
      <Fragment>
        {tPublisherNm}
      </Fragment>
    )
  }

  // 에피소드 정보
  const getEpisode = (size, color, textClass, infoItem) => {
    let tSeries = '총 ' + infoItem.totalCount + infoItem.bookUnit;
    if (infoItem.completedYn === 'Y') {
      tSeries += ' 완결'
    } else if (infoItem.completedYn === 'N') {
      tSeries += ' 연재중'
    }
    return getText(size, color, textClass, tSeries);
  }

  // 평점 정보
  const getAvgScore = (infoItem) => {
    const tAvgScoreIcon = [];
    for (let i = 1; i <= 5; i++) {
      const param = {
        icon: i <= Math.floor(infoItem.avgScore) ? 'avgscoreSel' : 'avgscore',
        iconsize: 20,
      }
      tAvgScoreIcon.push(<Icon key={i} {...param}></Icon>);
    }
    return (
      <div className="DetailTopTextAvgScoreBox">
        <div className="DetailTopTextAvgScoreIcon">{tAvgScoreIcon}</div>
        {getText('B14', 'Medium', 'DetailTopTextAvgScore', infoItem.avgScore)}
      </div>
    )
  }

  // 읽은 사람 정보
  const getReadme = (infoItem) => {
    return (
      <div className="DetailTopTextReadmeBox">
        <div className="DetailTopTextReadmeIcon">
          <Icon icon="readme" iconsize="20"></Icon>
        </div>
        {getText('B14', 'Medium', 'DetailTopTexReadme', '1천명이 읽었어요')}
      </div>
    )
  }

  // 상세 상단 유틸리티
  const getDetailUtil = () => {
    const param = {
      mode: 'icontext',
      btnClass: 'btnDetailUtil',
      size: 'B14',
      color: 'Drak',
      textClass: 'DetailUtilText',
      iconsize: 24,
      multiEvent: true,
      prevEvent: props.prevEvent,
      onEvent: props.onEvent
    }
    return (
      <ul>
        <li><LikeContainer /></li>
        {/* <li><LinkRenderer {...param} icon={!props.mylikeCond ? 'likeBlack' : 'likeBlackSel'}>{utils.setComma(props.favoriteCount)}</LinkRenderer></li> */}
        <li className="LiScoreContainer"><ScoreContainer /></li>
        {/* <li><LinkRenderer {...param} icon={props.myavgScoreNm === 0 ? 'avgscoreBlack' : 'avgscoreBlackSel'}>내별점</LinkRenderer></li> */}
        <li><LinkRenderer {...param} icon="commentBlack">{utils.setComma(props.commentCount)}</LinkRenderer></li>
        <li><ShareContainer /></li>
        {/* <li><LinkRenderer {...param} icon="sharingBlack">공유하기</LinkRenderer></li> */}
      </ul>
    )
  }

  // 내 별점 주기
  const getDetailUtilMyAvgscore = () => {
    const isMyAvgscoreYn = null;
    const tAvgNum = [1, 2, 3, 4, 5];
    const tAvgTag = tAvgNum.map((item, index) => {
      const param = {
        mode: 'icon',
        icon: item <= Number(myAvgscoreValue) ? 'detailAvgscoreSel' : 'detailAvgscore',
        iconsize: 40,
        onEvent: (eventName, state, event) => {
          // eventNm, onEvent, prevEvent, value, oldValue, event
          event.preventDefault()
          clearTimeout(isMyAvgscoreYn);
          setMyAvgscoreValue(item);
          utils.triggerEvent(CLICK_DETAILTOP_MYAVGSCORE, props.onEvent, props.prevEvent, item, myAvgscoreValue, event)
          setTimeout(() => {
            setMyAvgscoreYnValue('N');
            setMyAvgscoreValue(item);
          }, 1000);
        }
      }
      return (<LinkRenderer {...param} key={index}>{item}점 주기</LinkRenderer>)
    })

    return (
      <div className="DetailTopTextFooterMyAvgscore">
        {tAvgTag}
      </div>
    )
  }

  // 작품 주요 정보
  const getDetailInfo = () => {
    const param = {
      mode: 'text',
      btnClass: 'btnLarge btnExtraL50 btnBlock',
      size: 'ST16B',
      color: 'Drak',
      prevEvent: props.prevEvent,
      onEvent: (eventName, state, event) => {
        props.onEvent(CLICK_DETAILTOP_MAINBUTTON, props.mainBtnCond, event)
      }
    }

    let mainBtnTxt = '';
    const { type, detail, visible } = props.mainBtnCond;
    if (type === 1) {
      if (detail === 'A') { // 단행본(or 단행본·연재물 모두 제공)
        mainBtnTxt = '첫권보기'
      } else if (detail === 'B') {
        mainBtnTxt = '첫회보기'
      } else if (detail === 'C') {
        mainBtnTxt = '최신호 보기'
      }
    } else if (type === 2) {
      if (detail === 'A') {
        mainBtnTxt = '미리보기'
      } else if (detail === 'B') {
        mainBtnTxt = '미리듣기'
      } 
    }

    const createButton = () => {
      return (
        <div className="DetailTopTextFooterBtn">
          <LinkRenderer {...param}>{mainBtnTxt}</LinkRenderer>
        </div>
      )
    }

    return (
      <Fragment>
        <div className="DetailTopTextHeader">
          {getGenreTitle(props.productItem)}
        </div>
        <div className="DetailTopTextAddition">
          {getAddition(props.productItem)}
        </div>
        <div className="DetailTopTextEtcBox">
          {getAvgScore(props.productItem)}
          {getReadme(props.productItem)}
        </div>
        <div className="DetailTopTextFooter">
          <div className="DetailTopTextFooterUtil">
            {/* {myAvgscoreYnValue === 'Y' ? getDetailUtilMyAvgscore() : getDetailUtil()} */}
            {getDetailUtil()}
          </div>
          {(type !== 3 && visible) && createButton()}
        </div>
      </Fragment>
    )
  }
  
  return (
    <div className={'DetailTopWrap' + (getWebToonsYn(props.productItem) === 'Y' ? ' webtoon' : (' ' + props.productItem.thumbnailType))}>
      <div className="DetailTopInner">
        <div className="DetailTopBox">
          <div className="DetailTopThumbnail">
            {getThumbnailLink()}
          </div>
          <div className="DetailTopInfo">
            {getDetailInfo()}
          </div>
        </div>
      </div>
    </div>
  )
}

DetailTop.propTypes = {
  myavgScoreNm: PropTypes.number.isRequired,
  myavgscoreYn: PropTypes.string.isRequired,
  myavgscoreCond: PropTypes.bool.isRequired,
  mylikeCond: PropTypes.bool.isRequired,
  favoriteCount: PropTypes.number,
  commentCount: PropTypes.number,
  onEvent: PropTypes.func,
  productItem: PropTypes.object,
  mainBtnCond: PropTypes.shape({
    type: PropTypes.number,
    detail: PropTypes.string,
    visible: PropTypes.bool,
  }),
}

DetailTop.defaultProps = {
  myavgScoreNm: 0,
  myavgscoreYn: 'N',
  myavgscoreCond: false,
  mylikeCond: false,
}

export default withStyles(styles)(DetailTop);