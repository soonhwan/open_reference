import React, { Fragment, memo } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { TextRenderer, LinkRenderer, Icon } from 'components';
import styles from './Footer.scss';
import { useState } from 'hooks';
import { logConfig } from '_constants'
import { Link } from 'react-router-dom';

const Footer = () => {
  const [operatorValue, setOperatorValue] = useState(false);
  logConfig.render && console.log('%r Footer')

  const getTopUtil = () => {
    const CSCenterParam = {
      size: 'B12B',
      color: 'Medium'
    }
    const CSCenterLinkParam = {
      mode: 'text',
      size: 'B12B',
      color: 'Medium'
    }
    const utilParam = {
      mode: 'text',
      size: 'B12',
      color: 'Medium'
    }

    return (
      <div className="FooterWrapTopUtil">
        <div className="FooterWrapTopCSCenter">
          <TextRenderer {...CSCenterParam}>고객센터 <LinkRenderer {...CSCenterLinkParam}>1600-6573(유료)</LinkRenderer> 운영시간 평일 09:00~18:00</TextRenderer>
        </div>
        <div className="FooterWrapTopUtilNav">
          <ul>
            <li><LinkRenderer {...utilParam}>공지사항</LinkRenderer></li>
            <li><LinkRenderer {...utilParam}>FAQ</LinkRenderer></li>
            <li><LinkRenderer {...utilParam}>이메일문의</LinkRenderer></li>
          </ul>
        </div>
      </div>
    )
  }

  const getAppDownloadBtn = () => {
    const appDownLinkParam = {
      mode: 'icontext',
      size: 'B14B',
      color: 'Dark',
      icon: 'footerLogo',
      iconsize: 24
    }
    return (
      <div className="FooterWrapTopAppDownload">
        <LinkRenderer {...appDownLinkParam}>앱 다운로드 <Icon icon="linkright" iconsize="24" /></LinkRenderer>
      </div>
    )
  }

  const getOperator = () => {
    const linkParam = {
      onClick: (e) => {
        e.preventDefault();
        setOperatorValue(!operatorValue);
      }
    }
    return (
      <div className={'FooterWrapOperatorBody' + (operatorValue ? ' open' : ' close')}></div>
    )
  }

  const getBottomUtil = () => {
    const utilParam = {
      mode: 'text',
      size: 'B12',
      color: 'Medium'
    }
    const copyParam = {
      size: 'B12',
      color: 'Medium'
    }

    return (
      <div className="FooterWrapBottomUtil">
        <div className="FooterWrapBottomUtilNav">
          <ul>
            <li><LinkRenderer {...utilParam} size="B12B">개인정보처리방침</LinkRenderer></li>
            <li><LinkRenderer {...utilParam}>이용약관</LinkRenderer></li>
            <li><LinkRenderer {...utilParam}>회사소개</LinkRenderer></li>
          </ul>
        </div>
        <div className="FooterWrapBottomCopy">
          <TextRenderer {...copyParam}>ⓒ Onestore Co.Ltd.</TextRenderer>
        </div>
      </div>
    )
  }

  return (
    <div id="Footer">
      <div className="FooterInner">
        <div className="FooterWrap">
          <div className="FooterWrapInner">
            <div className="FooterWrapTop">
              <div className="FooterWrapTopTa">
                <div className="FooterWrapTopCell">
                  {getTopUtil()}
                </div>
                <div className="FooterWrapTopCell btn">
                  {getAppDownloadBtn()}
                </div>
              </div>
            </div>
            <div className="FooterWrapOperator">
              {getOperator()}
            </div>
            <div className="FooterWrapBottom">
              {getBottomUtil()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(memo(Footer));