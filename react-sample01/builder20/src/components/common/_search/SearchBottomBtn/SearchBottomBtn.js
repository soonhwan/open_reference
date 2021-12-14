import React, { memo } from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import { LinkRenderer } from 'components';
import styles from './SearchBottomBtn.scss';
import utils from 'utils';

const SearchBottomBtn = (props) => {
  const param = {
    mode: 'text',
    btnClass: 'btnLarge btnWhite btnBlock',
    size: 'ST16',
    color: 'Drak',
    onEvent: (event) => {
      utils.triggerEvent('click_SearchBottomBtn_TotalSearch', props.onEvent, props.prevEvent, null, null, event)
    }
  }

  return (
    <div className="SearchBottomBtn">
      <div className="SearchBottomBtnInner">
        <div className="SearchBottomMoreBtn">
          <LinkRenderer {...param}>{props.moreBtn}</LinkRenderer>
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(memo(SearchBottomBtn));