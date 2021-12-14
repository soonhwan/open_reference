import React, { Fragment } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles'
import { Icons } from 'components';
import styles from './TextField.scss'

const Field = {
  Text: ({ variant, text }) => {
    const cvariant = variant || '';
    const param = {
      className: 'TextField ' + cvariant
    }
    return (
      <div {...param}>
        <span>{text}</span>
      </div>
    );
  },
  Icon: ({ variant, text, icon, iconsize }) => {
    const cvariant = variant || '';
    const param = {
      className: 'TextField IconTextField ' + cvariant
    }
    return (
      <div {...param}>
        <Icons icon={icon} iconsize={iconsize} /> <span>{text}</span>
      </div>
    );
  }
}

const TextField = (props) => {
  let tText;
  if (props.mode === 'text') {
    tText = <Field.Text {...props} />
  } else if (props.mode === 'icon') {
    tText = <Field.Icon {...props} />
  }
  return (
    <Fragment>
      { tText }
    </Fragment>
  )
}

export default withStyles(styles)(TextField);