import React, { memo } from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import { ItemRenderer } from 'components';
import styles from './List.scss'
import { useMemo, useCallback } from 'hooks';
import { logConfig } from '_constants'
import PropTypes from 'prop-types'

const List = ({ mode, itemRenderer, infoList, keyword, prevEvent, onEvent }) => {

  const getRenderList = useCallback(() => {
    return infoList?.map((infoItem, i) => {
      const param = {
        mode: mode,
        itemRenderer: itemRenderer,
        infoItem: infoItem,
        rankingNum: i + 1,
        keyword: keyword,
        prevEvent: prevEvent,
        onEvent: onEvent
      }
      return (
        <div className="ListItem" key={i}>
          <ItemRenderer {...param}></ItemRenderer>
        </div>
      )
    })
  }, [infoList, mode, itemRenderer, keyword, prevEvent, onEvent])

  const renderList = useMemo(() => getRenderList(infoList), [infoList, getRenderList])

  logConfig.render && console.log('%r List')
  return (
    <div className={'List type' + mode + ' ' + itemRenderer}>
      <div className="ListInner">
        <div className="ListBox">
          {renderList}
        </div>
      </div>
    </div>
  )
}

List.propTypes = {
  mode: PropTypes.string.isRequired,
  itemRenderer: PropTypes.string.isRequired,
  infoList: PropTypes.array,
  keyword: PropTypes.string,
  prevEvent: PropTypes.func,
  onEvent: PropTypes.func,
}

List.defaultProps = {
  mode: 'list',
  itemRenderer: 'default1Row',
  keyword: '',
}

export default withStyles(styles)(memo(List));