import React from 'react';
import { storiesOf } from '@storybook/react'
import StoryWrapperComponent from '../../hocs/StoryWrapperComponent.js'

import CommentList from './CommentList.js'


storiesOf('Components|Common/comment', module)
  .addDecorator(StoryWrapperComponent)
  .add('1. CommentList', () => (<CommentList />))