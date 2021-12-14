import React from 'react';
import { storiesOf } from '@storybook/react'
import StoryWrapperComponent from '../../hocs/StoryWrapperComponent.js'

import FaqList from './FaqList.js'
import AnnounceList from './AnnounceList.js'

storiesOf('Components|Common/cscenter', module)
  .addDecorator(StoryWrapperComponent)
  .add('1. FaqList', () => (<FaqList />))
  .add('2. AnnounceList', () => (<AnnounceList />))