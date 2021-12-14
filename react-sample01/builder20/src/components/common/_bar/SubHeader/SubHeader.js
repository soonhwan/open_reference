import React, { Fragment } from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import { LinkRenderer, TextRenderer } from 'components';
import styles from './SubHeader.scss';
import utils from 'utils';

const getBasicTitle = (props) => {
  const param = {
    size: 'B14',
    color: 'Dark',
    textClass: 'Ellipsis BasicTitle',
  }
  const subParam = {
    size: 'B14',
    color: 'Medium'
  }

  if (props.mode === 'offeringBasic') {
    param.size = 'ST16B';
  } else if (props.mode === 'contentBasic') {
    param.size = 'B14B';
  }

  return (
    <div className="SubHeaderTitle">
      <div className="SubHeaderTitleText">
        <TextRenderer {...param}>{props.title} {utils.isEmpty(props.subTitle) || <TextRenderer {...subParam}>{props.subTitle}</TextRenderer>}</TextRenderer>
      </div>
    </div>
  );
}

const getLinkTitle = (props) => {
  const param = {
    mode: 'texticon',
    btnClass: 'Ellipsis',
    size: 'B14',
    color: 'Dark',
    textClass: 'Ellipsis',
    icon: 'linkright',
    iconsize: 20,
    onEvent: (eventName, state, event) => {
      utils.triggerEvent('click_SubHeaderTitle', props.onEvent, props.prevEvent, null, null, event)
    }
  }

  const subParam = {
    size: 'B14',
    color: 'Medium'
  }

  if (props.mode === 'offeringLink') {
    param.size = 'ST16B';
    param.iconsize = 24;
  } else if (props.mode === 'contentLink') {
    param.size = 'B14B';
    param.icon = 'downGrey';
    param.iconsize = 24;
  }

  return (
    <div className="SubHeaderTitle">
      <LinkRenderer {...param}>{props.title} {utils.isEmpty(props.subTitle) || <TextRenderer {...subParam}>{props.subTitle}</TextRenderer>}</LinkRenderer>
    </div>
  );
}

const SubHeaderWrap = {
  basic: (props) => {
    return (
      <div className="SubHeader">
        <div className="SubHeaderInner">
          {getBasicTitle(props)}
        </div>
      </div>
    )
  },
  link: (props) => {
    return (
      <div className="SubHeader">
        <div className="SubHeaderInner">
          {getLinkTitle(props)}
        </div>
      </div>
    )
  },
  offeringBasic: (props) => {
    return (
      <div className="SubHeader offering">
        <div className="SubHeaderInner">
          {getBasicTitle(props)}
        </div>
      </div>
    )
  },
  offeringLink: (props) => {
    return (
      <div className="SubHeader offering">
        <div className="SubHeaderInner">
          {getLinkTitle(props)}
        </div>
      </div>
    )
  },
  contentBasic: (props) => {
    return (
      <div className="SubHeader content">
        <div className="SubHeaderInner">
          {getBasicTitle(props)}
        </div>
      </div>
    )
  },
  contentLink: (props) => {
    return (
      <div className="SubHeader content">
        <div className="SubHeaderInner">
          {getLinkTitle(props)}
        </div>
      </div>
    )
  },
}

const SubHeader = (props) => {
  const getTag = (props) => {
    let Renderer;
    if (props.mode === 'basic') {
      Renderer = SubHeaderWrap.basic
    } else if (props.mode === 'link') {
      Renderer = SubHeaderWrap.link
    } else if (props.mode === 'offeringBasic') {
      Renderer = SubHeaderWrap.offeringBasic
    } else if (props.mode === 'offeringLink') {
      Renderer = SubHeaderWrap.offeringLink
    } else if (props.mode === 'contentBasic') {
      Renderer = SubHeaderWrap.contentBasic
    } else if (props.mode === 'contentLink') {
      Renderer = SubHeaderWrap.contentLink
    } else {
      Renderer = SubHeaderWrap.basic
    }

    return <Renderer {...props}></Renderer>
  }

  return (
    <Fragment>
      {getTag(props)}
    </Fragment>
  )
}

export default withStyles(styles)(SubHeader);