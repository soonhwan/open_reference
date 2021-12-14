import React from 'react';
import { storiesOf } from '@storybook/react'
import StoryWrapperComponent from '../../hocs/StoryWrapperComponent.js'

import List from './List.js'
import ListNoResults from './ListNoResults.js'
import ChargeList from './ChargeList.js'
import PassCouponList from './PassCouponList.js'

storiesOf('Components|Common/list', module)
  .addDecorator(StoryWrapperComponent)
  .add('1. List', () => (<List />))
  .add(' - ListNoResults', () => (<ListNoResults />))
  .add('2. ChargeList', () => (<ChargeList />))
  .add('3. PassCouponList', () => (<PassCouponList />))
