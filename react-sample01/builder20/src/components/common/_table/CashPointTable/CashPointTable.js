import React, { Fragment } from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import { ListNoResults, TextRenderer } from 'components';
import styles from './CashPointTable.scss';
import utils from 'utils';

const CashPointTable = ({ mode, variant, lists, thumb, noTitle }) => {
  let tableSummary = '';
  let tableTh = '';
  let tableColWidth = '';

  if (mode === 'accumulate') {
    tableSummary = '적립내역에 대한 일자, 캐쉬, 변동내역, 유효기간을 제공';
    tableTh = ['일자', '캐쉬', '변동내역', '유효기간'];
    tableColWidth = ['20', '20', '40', '20'];
    if (variant === 'point') {
      tableSummary = '적립내역에 대한 일자, 포인트, 변동내역, 유효기간을 제공';
      tableTh = ['일자', '포인트', '변동내역', '유효기간'];
    }
  } else if (mode === 'change') {
    tableSummary = '사용내역에 대한 일자, 캐쉬, 변동내역을 제공';
    tableTh = ['일자', '캐쉬', '변동내역'];
    tableColWidth = ['25', '25', '50'];
    if (variant === 'point') {
      tableSummary = '사용내역에 대한 일자, 포인트, 변동내역을 제공';
      tableTh = ['일자', '포인트', '변동내역'];
    }
  }

  const getThead = () => {
    const tableThParam = {
      size: 'B12B',
      color: 'Medium',
      textClass: 'CashPointTableTextTh'
    }

    const getColgroup = () => {
      const tItem = tableColWidth.map((item, index) => {
        return <col style={{ width: item + '%' }} key={index}></col>
      })
      return (
        <colgroup>{tItem}</colgroup>
      )
    }
    const getTh = () => {
      const tItem = tableTh.map((item, index) => {
        return <th key={index}><TextRenderer {...tableThParam}>{item}</TextRenderer></th>
      })
      return (
        <thead><tr>{tItem}</tr></thead>
      )
    }
    return (
      <Fragment>
        {getColgroup()}
        {getTh()}
      </Fragment>
    )
  }

  const getTbody = () => {
    let tItem = '';
    const tableTdParam = {
      size: 'B12',
      color: 'Medium',
      textClass: 'CashPointTableTextTd'
    }

    const tableTdPointParam = {
      size: 'B12',
      color: 'Point',
      textClass: 'CashPointTableTextPoint'
    }

    const tableTdDescParam = {
      size: 'B12',
      color: 'Medium',
      textClass: 'CashPointTableTextDesc'
    }

    if (utils.isEmpty(lists)) {
      tItem = <tr><td colSpan={tableTh.length}><ListNoResults mode="basic" thumb={thumb} title={noTitle}></ListNoResults></td></tr>
    } else {
      tItem = lists.map((item, index) => {
        return (
          <tr key={index}>
            <td><TextRenderer {...tableTdParam}>{item.regDt}</TextRenderer></td>
            <td><TextRenderer {...tableTdPointParam}>{utils.setComma(item.price)} {item.unit}</TextRenderer></td>
            <td><TextRenderer {...tableTdDescParam}>{item.text}</TextRenderer></td>
            {utils.isEmpty(item.termDt) || <td><TextRenderer {...tableTdParam}>{item.termDt}</TextRenderer></td>}
          </tr>
        )
      })
    }
    return (
      <tbody>
        {tItem}
      </tbody>
    )
  }

  const getTable = () => {
    return (
      <table summary={tableSummary}>
        {getThead()}
        {getTbody()}
      </table>
    )
  }
  return (
    <div className={'CashPointTable ' + mode}>
      <div className="CashPointTableInner">
        <div className="CashPointTableCo">
          {getTable()}
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(CashPointTable);