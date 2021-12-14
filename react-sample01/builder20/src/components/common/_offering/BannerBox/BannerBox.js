import React from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './BannerBox.scss';
import utils from 'utils';

const BannerBox = ({ mode, title, bannerUrl, bannerColor, prevEvent, onEvent }) => {
  const bannerStyle = {
    backgroundColor: '#' + bannerColor
  }

  const param = {
    onClick: (event) => {
      utils.triggerEvent('click_BannerBox_Link', onEvent, prevEvent, null, null, event)
    }
  }

  const imgParam = {
    className: 'BannerBoxPic',
    src: bannerUrl,
    alt: title
  }
  return (
    <div className={'BannerBox ' + mode}>
      <div className="BannerBoxWrap">
        <div className="BannerBoxInner">
          <a className="BannerBoxLink" {...param}>
            <div className="BannerBoxLinkInner">
              <div className="BannerBoxLinkInnerBG" style={bannerStyle}></div>
            </div>
            <div className="BannerBoxLinkPic">
              <img {...imgParam} />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(BannerBox);