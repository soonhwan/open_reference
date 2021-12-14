import React, { Fragment } from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import { TextRenderer } from 'components';
import styles from './PurchaseButton.scss';
import utils from 'utils';

const CLICK_PURCHASEBUTTON_LINK = 'click_PurchaseButton_Link';

const PurchaseButton = (props) => {
  const linkParam = {
    onClick: (event) => {
      utils.triggerEvent(CLICK_PURCHASEBUTTON_LINK, props.onEvent, props.prevEvent, { label: props.label, value: props.value, sub: props.sub }, null, event)
    }
  }
  const labelParam = {
    size: 'B14B',
    color: (props.mode === 'dimed') ? 'Light' : 'White',
    textClass: 'Ellipsis'
  }

  const subParam = {
    size: 'B12B',
    color: (props.mode === 'dimed') ? 'Light' : 'White',
    textClass: 'Ellipsis'
  }

  return (
    <a {...linkParam} className={'PurchaseButton ' + props.mode}>
      <div className="PurchaseButtonInner">
        <TextRenderer {...labelParam}>{props.label}</TextRenderer>
        {utils.isEmpty(props.sub) || <TextRenderer {...subParam}>{props.sub}</TextRenderer>}
      </div>
    </a>
  )
}

export default withStyles(styles)(PurchaseButton);