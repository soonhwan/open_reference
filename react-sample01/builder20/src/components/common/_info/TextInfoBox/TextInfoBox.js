import React, { Fragment } from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import { TextRenderer, Checkbox } from 'components';
import styles from './TextInfoBox.scss';
import utils from 'utils';

const TextInfoBox = ({ mode, title, checkParam, desc }) => {
  const getTitle = () => {
    if (mode === 'checkboxLine') {
      return (
        <Checkbox mode="basic" {...checkParam}>{title}</Checkbox>
      )
    } else {
      const param = {
        size: 'B12B',
        color: 'Medium',
        textClass: 'TextBlock TextInfoTitle',
        text: title
      }

      return (
        <Fragment>
          <TextRenderer {...param}></TextRenderer>
        </Fragment>
      )
    }
  }

  const param = {
    size: 'B12',
    color: 'Medium',
    textClass: 'TextBlock TextInfoDesc',
    text: desc
  }

  return (
    <div className={'TextInfoBox ' + mode}>
      <div className="TextInfoBoxInner">
        <div className="TextInfoBoxBody">
          {utils.isEmpty(title) ? '' : getTitle()}
          <TextRenderer {...param}></TextRenderer>
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(TextInfoBox);