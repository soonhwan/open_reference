import React, { Fragment } from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import { LinkRenderer, TextRenderer } from 'components';
import styles from './TextLabelBar.scss';
import utils from 'utils';

const getBasicTitle = (props) => {
  const param = {
    size: 'B14B',
    color: 'Dark'
  }
  const subParam = {
    size: 'B14',
    color: 'Medium'
  }

  if (props.completeYn === 'Y') {
    subParam.color = 'Success';
  }

  return (
    <div className="TextLabelBarTitle">
      <div className="TextLabelBarTitleText">
        <div className="TextLabelBarTitleTextInner">
          <TextRenderer {...param}>{props.title} {utils.isEmpty(props.subTitle) || <TextRenderer {...subParam}>{props.subTitle}</TextRenderer>}</TextRenderer>
        </div>
      </div>
    </div>
  );
}

const getLinkTitle = (props) => {
  const param = {
    mode: 'texticon',
    btnClass: 'TextLabelBarTitleLink ',
    size: 'B14B',
    color: 'Dark',
    icon: 'rightArrow',
    iconsize: 24,
    onEvent: (eventName, state, event) => {
      utils.triggerEvent('click_TextLabelBarTitle', props.onEvent, props.prevEvent, null, null, event)
    }
  }

  const subParam = {
    size: 'B14',
    color: 'Medium'
  }

  if (props.completeYn === 'Y') {
    subParam.color = 'Success';
  }

  return (
    <div className="TextLabelBarTitle">
      <LinkRenderer {...param}>{props.title} {utils.isEmpty(props.subTitle) || <TextRenderer {...subParam}>{props.subTitle}</TextRenderer>}</LinkRenderer>
    </div>
  );
}

const TextLabelBarWrap = {
  basic: (props) => {
    return (
      <div className="TextLabelBar">
        <div className="TextLabelBarInner">
          {getBasicTitle(props)}
        </div>
      </div>
    )
  },
  link: (props) => {
    return (
      <div className="TextLabelBar">
        <div className="TextLabelBarInner">
          {getLinkTitle(props)}
        </div>
      </div>
    )
  }
}

const TextLabelBar = (props) => {
  const getTag = (props) => {
    let Renderer;
    if (props.mode === 'basic') {
      Renderer = TextLabelBarWrap.basic
    } else if (props.mode === 'link') {
      Renderer = TextLabelBarWrap.link
    } else {
      Renderer = TextLabelBarWrap.basic
    }

    return <Renderer {...props}></Renderer>
  }

  return (
    <Fragment>
      {getTag(props)}
    </Fragment>
  )
}

export default withStyles(styles)(TextLabelBar);