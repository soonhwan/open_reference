import React, { Component } from 'react';
import classNames from 'classnames/bind';
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './ButtonTop.scss';
import { IconSam } from 'components';

const cx = classNames.bind(styles);
const isBrowser = typeof window !== 'undefined'

class ButtonTop extends Component {

  state = { 
    isShow: ''
  };

  componentDidMount () {
    isBrowser && window.addEventListener('scroll', this.onScrollHandler);
  }
  componentWillUnmount () {
    isBrowser && window.removeEventListener('scroll', this.onScrollHandler); 
  }

  onScrollHandler = (e) => {
    // top이동 버튼 노출 처리
    const isShow = isBrowser && window.scrollY >= 300 ? 'show' : '';

    this.setState({
      isShow: isShow
    })
  }

  onCickHandler = (e) => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    e.stopPropagation();
    // window.scroll({top: 0, left: 0, behavior: 'smooth' })
    isBrowser && window.scroll({ top: 0, left: 0 });  
  }
  
  render () {
    return (
      <a className={cx('viewer-btn', 'viewer-btn-top', this.state.isShow)} onClick={this.onCickHandler}>
        <IconSam group="viewer" type="viewer-top">상단으로</IconSam>
      </a>
    );
  }
};

export default withStyles(styles)(ButtonTop);
