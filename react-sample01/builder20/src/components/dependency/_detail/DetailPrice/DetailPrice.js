import React, { Fragment } from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import { TextRenderer } from 'components';
import styles from './DetailPrice.scss';
import utils from 'utils';

const DetailPrice = (props) => {
  const thParam = {
    size: 'B14',
    color: 'Medium'
  }
  const tdParam = {
    size: 'B14B',
    color: 'Drak'
  }
  const tdDelParam = {
    size: 'B14',
    color: 'Light',
    textClass: 'DetailPriceDel'
  }

  const getSale = () => {
    return (
      <dl>
        <dt><TextRenderer {...thParam}>할인</TextRenderer></dt>
        <dd>
          <div className="DetailPriceItem">
            <TextRenderer {...tdParam}>총 20회 무료</TextRenderer>
          </div>
        </dd>
      </dl>
    )
  }

  const getRent = () => {
    return (
      <dl>
        <dt><TextRenderer {...thParam}>대여</TextRenderer></dt>
        <dd>
          <div className="DetailPriceItem">
            <TextRenderer {...tdParam}>단권 300 ⓒ</TextRenderer>
            <TextRenderer {...tdDelParam}>200 ⓒ</TextRenderer>
            <TextRenderer {...tdParam}>/ 1일</TextRenderer>
          </div>
          <div className="DetailPriceItem">
            <TextRenderer {...tdParam}>전권 500 ⓒ</TextRenderer>
            <TextRenderer {...tdDelParam}>600 ⓒ</TextRenderer>
            <TextRenderer {...tdParam}>/ 7일</TextRenderer>
          </div>
        </dd>
      </dl>
    )
  }

  const getCollection = () => {
    return (
      <dl>
        <dt><TextRenderer {...thParam}>소장</TextRenderer></dt>
        <dd>
          <div className="DetailPriceItem">
            <TextRenderer {...tdParam}>단권 600 ⓒ</TextRenderer>
          </div>
          <div className="DetailPriceItem">
            <TextRenderer {...tdParam}>전권 17,820 ⓒ</TextRenderer>
          </div>
        </dd>
      </dl>
    )
  }

  return (
    <div className="DetailPriceWrap">
      <div className="DetailPriceInner">
        <div className="DetailPriceBox">
          <div className="DetailPriceBoxInner">
            {getSale()}
            {getRent()}
            {getCollection()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(DetailPrice);