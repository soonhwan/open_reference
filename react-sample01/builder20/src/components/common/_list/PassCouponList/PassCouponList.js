import React, { Fragment } from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import { LinkRenderer, TextRenderer, Icon } from 'components';
import styles from './PassCouponList.scss';
import utils from 'utils';

const PassCouponList = ({ mode, optionLists }) => {
  const getItem = optionLists.map((option, index) => {
    const param = {
      size: 'B14B',
      color: 'Dark',
      textClass: 'Ellipsis',
    }

    const getUse = () => {
      const useTextParm = {
        size: 'B14',
        color: 'Point'
      }
      const useIconParam = {
        icon: 'checkPoint',
        iconsize: '20'
      }
      return (
        <div className="PassCouponListCell Use"><TextRenderer {...useTextParm}><Icon {...useIconParam} />{option.useNm}</TextRenderer></div>
      )
    }
    return (
      <div className="PassCouponListItem" key={index}>
        <div className="PassCouponListCo">
          <div className="PassCouponListCell"><TextRenderer {...param}>{option.text}</TextRenderer></div>
          {option.useYn === 'Y' && getUse()}
        </div>
      </div>
    )
  })
  return (
    <div className="PassCouponList">
      <div className="PassCouponListInner">
        {getItem}
      </div>
    </div>
  )
}

export default withStyles(styles)(PassCouponList);