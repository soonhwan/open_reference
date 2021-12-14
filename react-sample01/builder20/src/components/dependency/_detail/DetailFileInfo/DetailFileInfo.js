import React, { Fragment } from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import { TextRenderer, Icon } from 'components';
import styles from './DetailFileInfo.scss';
import utils from 'utils';

const DetailFileInfo = (props) => {
  const thParam = {
    size: 'B14',
    color: 'Medium'
  }
  const tdParam = {
    size: 'B14',
    color: 'Drak'
  }

  return (
    <div className="DetailFileInfoWrap">
      <div className="DetailFileInfoInner">
        <div className="DetailFileInfoBox">
          <div className="DetailFileInfoBoxInner">
            <table>
            <tbody>
            <tr>
              <th><TextRenderer {...thParam}>총재생시간</TextRenderer></th>
              <td><TextRenderer {...tdParam}>01:41:40</TextRenderer></td>
              <th><TextRenderer {...thParam}>제작사</TextRenderer></th>
              <td><TextRenderer {...tdParam}>레드북</TextRenderer></td>
            </tr>
            <tr>
              <th><TextRenderer {...thParam}>총 용량</TextRenderer></th>
              <td><TextRenderer {...tdParam}>69.8MB</TextRenderer></td>
              <th><TextRenderer {...thParam}>발행일</TextRenderer></th>
              <td><TextRenderer {...tdParam}>2019.03.27</TextRenderer></td>
            </tr>
            <tr>
              <th><TextRenderer {...thParam}>도서유형</TextRenderer></th>
              <td><TextRenderer {...tdParam}>완독</TextRenderer></td>
              <th><TextRenderer {...thParam}>이용기기</TextRenderer></th>
              <td>
                <Icon icon="deviceAOS" iconsize="16">안드로이드</Icon>
                <Icon icon="deviceiOS" iconsize="16">아이폰</Icon>
                <Icon icon="deviceWeb" iconsize="16">웹</Icon>
              </td>
            </tr>
            </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(DetailFileInfo);