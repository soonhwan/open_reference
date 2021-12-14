import React from 'react';
import { storiesOf } from '@storybook/react'
import StoryWrapperComponent from '../../hocs/StoryWrapperComponent.js'

import MySnb from './MySnb.js'
import AccountBox from './AccountBox.js'
import MySubCashPoint from './MySubCashPoint.js'
import MySubCouponPass from './MySubCouponPass.js'
import SnbMenu from './SnbMenu.js'
import LogOut from './LogOut.js'
import CancelInfoBox from './CancelInfoBox.js'
import RefundInfoBox from './RefundInfoBox.js'

storiesOf('Components|Common/my', module)
  .addDecorator(StoryWrapperComponent)
  .add('1. MySnb', () => (<MySnb />))
  .add(' - AccountBox', () => (<AccountBox />))
  .add(' - MySubCashPoint', () => (<MySubCashPoint />))
  .add(' - MySubCouponPass', () => (<MySubCouponPass />))
  .add(' - SnbMenu', () => (<SnbMenu />))
  .add(' - LogOut', () => (<LogOut />))
  .add('2 CancelInfoBox', () => (<CancelInfoBox />))
  .add('3 RefundInfoBox', () => (<RefundInfoBox />))