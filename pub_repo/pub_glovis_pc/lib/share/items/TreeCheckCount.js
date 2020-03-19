import { useState } from 'react'
import TreeItem from './TreeItem'
import ColoredScrollbars from '@lib/share/items/ColoredScrollbars'
import PropTypes from 'prop-types'

const TreeCheckCount = ({ dataProvider, onClick }) => {
  const createTree = (makeList, tempList) => {
    makeList.map((item, index) => {
      let children = []
      if(item.hasOwnProperty("category")) {
        tempList.push(<li className="category" key={index}>{item.category}</li>)
      } else {
        tempList.push(<TreeItem key={index} data={item} children={children} onClick={onClick} />)
        if(item.hasOwnProperty("children") && item.children.length > 0) {
          createTree(item.children, children)
        }
      }
    })
    return tempList
  }

  return (
    <ColoredScrollbars>
      <div className="tree-wrap">
        <ul className="tree">
          {createTree(dataProvider, [])} 
        </ul>
      </div>
    </ColoredScrollbars>
  )
}

TreeCheckCount.propsTypes = {
  dataProvider: PropTypes.array,
  onClick: PropTypes.func,
}

export default TreeCheckCount