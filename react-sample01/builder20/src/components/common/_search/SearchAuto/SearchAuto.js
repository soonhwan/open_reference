import React, { Fragment } from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import { Thumbnail, Icon, TextRenderer } from 'components';
import styles from './SearchAuto.scss';
import utils from 'utils';
import PropTypes from 'prop-types'

const CLICK_SEARCHAUTO_HISTORY = 'click_SearchAuto_History'
const CLICK_SEARCHAUTO_SEARCH = 'click_SearchAuto_Search'
const CLICK_SEARCHAUTO_GO = 'click_SearchAuto_Go'

const SearchAuto = (props) => {
  // 검색어 강조 표현
  const getSearchText = (val) => {
    return val.replace(new RegExp(props.keyword, 'gi'), '<b>' + props.keyword + '</b>');
  }

  const getHistory = (option) => {
    const param = {
      className: 'SearchAutoLink',
      onClick: (event) => {
        utils.triggerEvent(CLICK_SEARCHAUTO_HISTORY, props.onEvent, props.prevEvent, option.history, null, event)
      }
    }
    const iconParam = { icon: 'timeHistory', iconsize: 16 }
    const dateParam = { size: 'B12', color: 'Medium' }
    const tTitle = getSearchText(option.history);
    return (
      <a {...param}>
        <div className="SearchAutoLinkInner">
          <div className="SearchAutoLinkCell icon"><Icon {...iconParam}>히스토리</Icon></div>
          <div className="SearchAutoLinkCell title"><div className="SearchAutoLinkTitle" dangerouslySetInnerHTML={{ __html: tTitle }}></div></div>
          <div className="SearchAutoLinkCell date"><TextRenderer {...dateParam}>{option.historyRegDt}</TextRenderer></div>
        </div>
      </a>
    )
  }

  const getSearch = (option) => {
    const param = {
      className: 'SearchAutoLink',
      onClick: (event) => {
        utils.triggerEvent(CLICK_SEARCHAUTO_SEARCH, props.onEvent, props.prevEvent, option.keyword, null, event)
      }
    }

    const iconParam = { icon: 'search', iconsize: 16 }
    const tTitle = getSearchText(option.keyword);
    return (
      <a {...param}>
        <div className="SearchAutoLinkInner">
          <div className="SearchAutoLinkCell icon"><Icon {...iconParam}>검색어</Icon></div>
          <div className="SearchAutoLinkCell title"><div className="SearchAutoLinkTitle" dangerouslySetInnerHTML={{ __html: tTitle }}></div></div>
        </div>
      </a>
    )
  }

  // 오디오북 Y/N
  const getAudioBooksYn = (option) => {
    let audioBooksYn = 'N';
    if (option.topCatCd === 'DP31' || option.metaClsfCd === 'CT38' || option.metaClsfCd === 'CT39') {
      audioBooksYn = 'Y';
    }
    return audioBooksYn;
  }

  // 썸네일
  const getThumbnail = (mode, itemRenderer, option) => {
    const param = {
      mode: mode,
      type: itemRenderer,
      prodNm: option.prodNm,
      url: option.thumbnailImageUrl,
      thumbnailType: option.thumbnailType,
      option: 'F10_95',
      plus19Yn: option.plus19Yn,
      audioBooksYn: getAudioBooksYn(option)
    }
    return (
      <Fragment>
        <Thumbnail {...param} />
      </Fragment>
    )
  }

  const getProduct = (option) => {
    const param = {
      className: 'SearchAutoLink',
      onClick: (event) => {
        utils.triggerEvent(CLICK_SEARCHAUTO_GO, props.onEvent, props.prevEvent, option.prodId, null, event)
      }
    }

    const iconParam = { icon: 'rightArrow', iconsize: 24 }
    const tTitle = getSearchText(option.prodNm);
    return (
      <a {...param}>
        <div className="SearchAutoLinkInner">
          <div className="SearchAutoLinkCell thumbnail">{getThumbnail('SearchAuto', 'SearchAuto', option)}</div>
          <div className="SearchAutoLinkCell title"><div className="SearchAutoLinkTitle" dangerouslySetInnerHTML={{ __html: tTitle }}></div></div>
          <div className="SearchAutoLinkCell righticon"><Icon {...iconParam}></Icon></div>
        </div>
      </a>
    )
  }

  const getAutoList = () => {
    const tAutoList = props.options.map((option, index) => {
      let tTag = '';

      if (!utils.isEmpty(option.history)) {
        tTag = getHistory(option);
      } else if (!utils.isEmpty(option.keyword)) {
        tTag = getSearch(option);
      } else {
        tTag = getProduct(option);
      }

      return (
        <div className="SearchAutoItem" key={index}>
          {tTag}
        </div>
      )
    })

    return tAutoList;
  }

  return (
    <div className="SearchAutoWrap">
      <div className="SearchAutoInner">
        <div className="SearchAutoBox">
          <div className="SearchAutoBoxInner">
            {getAutoList()}
          </div>
        </div>
      </div>
    </div>
  )
}


SearchAuto.propTypes = {
  mode: PropTypes.string.isRequired,
  options: PropTypes.array,
  keyword: PropTypes.string,
  prevEvent: PropTypes.func,
  onEvent: PropTypes.func,
}

SearchAuto.defaultProps = {
  mode: 'basic',
  keyword: '',
}

export default withStyles(styles)(SearchAuto);