import React from 'react';
import { storiesOf } from '@storybook/react'
import StoryWrapperComponent from '../../hocs/StoryWrapperComponent.js'

import CashPointTable from './CashPointTable.js'

storiesOf('Components|Common/table', module)
  .addDecorator(StoryWrapperComponent)
  .add('1. CashPointTable', () => (<CashPointTable />))