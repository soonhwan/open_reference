import React, { Fragment } from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import { LinkRenderer, TextRenderer, Icon } from 'components';
import styles from './ChargeList.scss';
import utils from 'utils';

const ChargeList = ({ mode, optionLists, prevEvent, onEvent }) => {
  const getItem = optionLists.map((option, index) => {
    const priceParam = {
      size: 'ENG15',
      color: 'Point',
      textClass: 'ChargeListTextCash'
    }
    const iconParam = {
      icon: 'cash',
      iconsize: 16
    }

    const getCash = () => {
      return <TextRenderer {...priceParam}>{utils.setComma(option.cashPrice)}<Icon {...iconParam} text="캐쉬"></Icon></TextRenderer>;
    }

    const getPoint = () => {
      priceParam.color = 'Dark';
      priceParam.textClass = 'ChargeListTextPoint';
      iconParam.icon = 'point';
      return <TextRenderer {...priceParam}>+ {utils.setComma(option.pointPrice)}<Icon {...iconParam} text="포인트"></Icon></TextRenderer>;
    }

    const getAccumulate = () => {
      priceParam.size = 'ENG10';
      priceParam.textClass = 'ChargeListTextAcc';
      iconParam.icon = 'accumulate';
      iconParam.iconsize = 20;
      return <TextRenderer {...priceParam}>{utils.setComma(option.accumulate)}<Icon {...iconParam} text="적립"></Icon></TextRenderer>;
    }

    const getNextDate = () => {
      const dateParam = {
        size: 'B12',
        color: 'Medium',
        textClass: 'ChargeListTextDate'
      }

      if (!utils.isEmpty(option.redDt)) {
        return <div className="ChargeListCoDate"><TextRenderer {...dateParam}>다음 결제일 {option.redDt}</TextRenderer></div>;
      }

      return '';
    }

    const getBtn = () => {
      const param = {
        size: 'B12',
        color: 'White',
        btnClass: 'btnSmall btnBlock ChargeListBtn'
      }
      let tTag = '';

      if (option.cancelYn === 'Y') {
        tTag = '연장하기';
        param.color = 'Dark';
        param.btnClass = 'btnSmall btnWhite btnBlock ChargeListBtn';
      } else if (option.joinYn === 'Y') {
        tTag = '해지하기';
        param.color = 'Dark';
        param.btnClass = 'btnSmall btnWhite btnBlock ChargeListBtn';
      } else {
        tTag = utils.setComma(option.price) + '원/월';
      }

      return (
        <Fragment>
          <LinkRenderer {...param}>{tTag}</LinkRenderer>
        </Fragment>
      )
    }

    return (
      <div className="ChargeListItem" key={index}>
        <div className="ChargeListItemInner">
          <div className="ChargeListCo">
            <div className="ChargeListCoCell">
              {getCash()}
              {getPoint()}
              {getAccumulate()}
              {getNextDate()}
            </div>
            <div className="ChargeListCoCell Btn">
              {getBtn()}
            </div>
          </div>
        </div>
      </div>
    )
  })
  return (
    <div className="ChargeList">
      <div className="ChargeListInner">
        {getItem}
      </div>
    </div>
  )
}

export default withStyles(styles)(ChargeList);