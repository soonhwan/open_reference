import React from 'react';
import { storiesOf } from '@storybook/react'
import StoryWrapperComponent from '../../hocs/StoryWrapperComponent.js'

import DetailTop from './DetailTop.js'
import DetailNextProduct from './DetailNextProduct.js'
import DetailEventList from './DetailEventList.js'
import DetailPrice from './DetailPrice.js'
import DetailFileInfo from './DetailFileInfo.js'
import PurchaseBox from './PurchaseBox.js'
import PurchaseBoxCo from './PurchaseBoxCo.js'
import DetailFloating from './DetailFloating.js'
import DetailFloatingCo from './DetailFloatingCo.js'

storiesOf('Components|Common/detail', module)
  .addDecorator(StoryWrapperComponent)
  .add('1. DetailTop', () => (<DetailTop />))
  .add('2. DetailNextProduct', () => (<DetailNextProduct />))
  .add('3. DetailEventList', () => (<DetailEventList />))
  .add('4. DetailPrice', () => (<DetailPrice />))
  .add('5. DetailFileInfo', () => (<DetailFileInfo />))
  .add('6. PurchaseBox', () => (<PurchaseBox />))
  .add(' - PurchaseBoxCo', () => (<PurchaseBoxCo />))
  .add('7. DetailFloating', () => (<DetailFloating />))
  .add(' - DetailFloatingCo', () => (<DetailFloatingCo />))