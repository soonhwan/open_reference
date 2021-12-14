import React from 'react';
import { storiesOf } from '@storybook/react'
import StoryWrapperComponent from '../hocs/StoryWrapperComponent.js'

import MainTemplate from './MainTemplate.js'
import SubTemplate from './SubTemplate.js'
import SnbTemplate from './SnbTemplate.js'
import MemberTemplate from './MemberTemplate.js'

// storiesOf('Templates|Common/detail', module)
storiesOf('Templates|Main', module)
  .addDecorator(StoryWrapperComponent)
  .add('1. MainTemplate', () => (<MainTemplate />))
  .add('2. SubTemplate', () => (<SubTemplate />))
  .add('3. SnbTemplate', () => (<SnbTemplate />))
  .add('4. MemberTemplate', () => (<MemberTemplate />))
  // .add('2. DetailNextProduct', () => (<DetailNextProduct />))
