import React, { Fragment } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { TextRenderer } from 'components';
import styles from './LoadingPopup.scss';

const LoadingPopup = ({ onEvent }) => {

  return (
    <div className="LoadingPopup">
      <div className="LoadingPopupInner">
        <div className="LoadingPopupBox">
          <img src="/static/images/icon/loading_l.png" alt="" />
          <TextRenderer size="B14B" color="White">로딩중...</TextRenderer>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(LoadingPopup);