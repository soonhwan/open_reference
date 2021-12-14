import React from 'react';
import { storiesOf } from '@storybook/react'
import StoryWrapperComponent from '../../hocs/StoryWrapperComponent.js'

import IllInfoBox from './IllInfoBox.js'
import TextInfoBox from './TextInfoBox.js'
import RoundInfoBox from './RoundInfoBox.js'
import CashPointInfoBox from './CashPointInfoBox.js'

storiesOf('Components|Common/info', module)
  .addDecorator(StoryWrapperComponent)
  .add('1. IllInfoBox', () => (<IllInfoBox />))
  .add('2. TextInfoBox', () => (<TextInfoBox />))
  .add('3. RoundInfoBox', () => (<RoundInfoBox />))
  .add('4. CashPointInfoBox', () => (<CashPointInfoBox />))
