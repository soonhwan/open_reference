import React from 'react';
import { storiesOf } from '@storybook/react'
import StoryWrapperComponent from '../../hocs/StoryWrapperComponent.js'

import SearchHistoryEx from './SearchHistory.js'
import SearchAutoEx from './SearchAuto.js'
import SearchBottomBtnEx from './SearchBottomBtn.js'

storiesOf('Components|Common/search', module)
  .addDecorator(StoryWrapperComponent)
  .add('1. SearchHistory', () => (<SearchHistoryEx />))
  .add('2. SearchAuto', () => (<SearchAutoEx />))
  .add('3. SearchBottomBtn', () => (<SearchBottomBtnEx />))