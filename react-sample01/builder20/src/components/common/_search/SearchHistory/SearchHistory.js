import React, { Fragment } from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import { LinkRenderer } from 'components';
import styles from './SearchHistory.scss';
import utils from 'utils';
import PropTypes from 'prop-types'

const CLICK_SEARCHHISTORY_LINK = 'click_SearchHistory_Link'
const CLICK_SEARCHHISTORY_DELLINK = 'click_SearchHistory_DelLink'
const CLICK_SEARCHHISTORY_ALLLINK = 'click_SearchHistory_AllLink'

const SearchHistory = (props) => {
  const getHistory = () => {
    const tHistory = props.options.map((option, index) => {
      const param = {
        mode: 'text',
        size: 'B14',
        color: 'Dark',
        textClass: 'Ellipsis',
        btnClass: 'searchHistoryLink',
        onEvent: (event) => {
          utils.triggerEvent(CLICK_SEARCHHISTORY_LINK, props.onEvent, props.prevEvent, option.value, null, event)
        }
      }

      const delParam = {
        mode: 'icon',
        icon: 'del',
        iconsize: 24,
        onEvent: (event) => {
          utils.triggerEvent(CLICK_SEARCHHISTORY_DELLINK, props.onEvent, props.prevEvent, option.value, null, event)
        }
      }

      return (
        <div className="SearchHistoryItem" key={index}>
          <div className="SearchHistoryItemLink">
            <LinkRenderer {...param}>{option.text}</LinkRenderer>
          </div>
          <div className="SearchHistoryItemDel">
            <LinkRenderer {...delParam}>{option.text} 삭제</LinkRenderer>
          </div>
        </div>
      )
    });
    
    return tHistory;
  }

  const getHistoryDel = () => {
    const param = {
      mode: 'text',
      size: 'B14',
      color: 'Medium',
      textClass: 'Ellipsis',
      btnClass: 'searchHistoryMoreLink',
      onEvent: (event) => {
        utils.triggerEvent(CLICK_SEARCHHISTORY_ALLLINK, props.onEvent, props.prevEvent, null, null, event)
      }
    }

    return (
      <div className="SearchHistoryAllDel">
        <div className="SearchHistoryAllDelInner">
          <LinkRenderer {...param}>검색 히스토리 삭제</LinkRenderer>
        </div>
      </div>
    )
  }
  return (
    <div className="SearchHistoryWrap">
      <div className="SearchHistoryInner">
        <div className="SearchHistoryBox">
          <div className="SearchHistoryBoxInner">
            <div className="SearchHistoryBoxScroll">
              {getHistory()}
            </div>
            {getHistoryDel()}
          </div>
        </div>
      </div>
    </div>
  )
}

SearchHistory.propTypes = {
  mode: PropTypes.string.isRequired,
  options: PropTypes.array,
  prevEvent: PropTypes.func,
  onEvent: PropTypes.func,
}

SearchHistory.defaultProps = {
  mode: 'basic',
}

export default withStyles(styles)(SearchHistory);