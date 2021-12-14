import React, { Fragment } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import styles from './DimPopup.scss';

const DimPopup = ({ onEvent }) => {

  const onClick = (e) => {
    e.preventDefault();
    onEvent('click_DimPopup', null, e); // eventName, state, event
  }

  return (
    <div className="DimPopup" onClick={onClick}>
      
    </div>
  );
}

export default withStyles(styles)(DimPopup);

