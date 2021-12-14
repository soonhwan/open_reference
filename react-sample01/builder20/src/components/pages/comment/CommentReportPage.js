import React, { createRef } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles'
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect, useLayoutEffect, useRef, useReactRouter, useScrollHit } from 'hooks';
import { Type1Template, DisplayTemplate, BooksHelmet, Icon, CommentList } from 'components'
import styles from './comment.scss';
import * as baseActions from 'store/modules/base';
import * as commentActions from 'store/modules/comment';
import queryString from 'query-string';

const CommentReportPage = (props) => {

// ----------------------------------------------------------------------------
// history, location, match
// ----------------------------------------------------------------------------


// ----------------------------------------------------------------------------
// variable, useEffect, dispatch, store
// ----------------------------------------------------------------------------
 

// ----------------------------------------------------------------------------
// Event
// ----------------------------------------------------------------------------
  

// ----------------------------------------------------------------------------
// render
// ----------------------------------------------------------------------------
  return (
    <DisplayTemplate>
      123
    </DisplayTemplate>
  )
}

export default withStyles(styles)(CommentReportPage)
