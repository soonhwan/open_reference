import React, { Component, Fragment } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './Toast.scss';
import classNames from 'classnames/bind';
// import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { IS_BROWSER } from '_constants'

const cx = classNames.bind(styles);
// TransitionGroup, CSSTransition으로 풀지 못할 경우 pure css로 처리 해도 무방
const Toast = ({ toastList, onHide }) => { 

  const handleEnter = (id, visible) => {
    // console.log('Toast handleEnter', id, visible);
  }
  const handleEntered = (id, visible) => {
    // console.log('Toast handleEntered', id, visible);
    setTimeout(
      () => {
        onHide(id)
      },
      2000
    )
  }
  const handleExit = (id) => {
    console.log('handleExit', id);
  }
  const convertStyle = (type) => {
    let typeStyles
    if (type === 'mid') {
      const windowHeight = IS_BROWSER ? window.outerHeight : 0;
      typeStyles = {
        bottom: windowHeight > 0 ? (windowHeight / 2 - 9) + 'px' : ''
      }
    } else {
      typeStyles = {};
    }
    return typeStyles
  }

  return (
    <TransitionGroup component={null} childFactory={child => React.cloneElement(child)}>
      {toastList.map(({ id, visible, type, text }) => (
        visible && <CSSTransition
          key={id}
          in={visible}
          timeout={1000}
          classNames="toast-box-wrap"
          onEnter={handleEnter(id, visible)}
          onEntered={handleEntered(id, visible)}
        >
          { <div className={cx('toast-box-wrap')} style={convertStyle(type)}>{text}</div> }
        </CSSTransition>
      
      ))}
    </TransitionGroup>
  )
};

export default withStyles(styles)(Toast);
