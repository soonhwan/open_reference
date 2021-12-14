import React, { Fragment } from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import { TextRenderer, Icon } from 'components';
import styles from './CashPointInfoBox.scss';
import utils from 'utils';

const CashPointInfoBox = ({ mode, label, price, desc }) => {
  const getDesc = () => {
    const titleParam = {
      size: 'B14B',
      color: 'White',
      textClass: 'TextBlock CashPointInfoTextTitle'
    }

    const priceParam = {
      size: 'ENG32',
      color: 'Point',
      textClass: 'TextBlock CashPointInfoTextPrice'
    }

    const priceIconParam = {
      icon: mode,
      iconsize: 32
    }

    const descParam = {
      size: 'B12',
      color: 'White70',
      textClass: 'TextBlock CashPointInfoTextDesc',
      text: desc
    }

    if (mode === 'point') {
      priceParam.color = 'White';
      priceIconParam.icon = mode + 'White';
    }

    return (
      <Fragment>
        {utils.isEmpty(label) || <TextRenderer {...titleParam}>{label}<TextRenderer {...priceParam}>{utils.setComma(price)}<Icon {...priceIconParam}></Icon></TextRenderer></TextRenderer>}
        <TextRenderer {...descParam}></TextRenderer>
      </Fragment>
    )
  }

  return (
    <div className={'CashPointInfoBox ' + mode}>
      <div className="CashPointInfoBoxInner">
        <div className="CashPointInfoBoxBody">
          <div className="CashPointInfoBoxText">
            {getDesc()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(CashPointInfoBox);