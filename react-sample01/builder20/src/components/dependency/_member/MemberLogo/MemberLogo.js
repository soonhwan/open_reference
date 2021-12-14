import React from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './MemberLogo.scss';
import utils from 'utils';

const MemberLogo = (props) => {
  return (
    <div className="MemberLogo">
      <div className="MemberLogoWrap">
        <div className="MemberLogoInner">
          <div className="MemberLogoPic">unknown</div>
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(MemberLogo);