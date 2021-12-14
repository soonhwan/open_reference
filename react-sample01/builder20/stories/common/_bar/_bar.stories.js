import React from 'react';
import { storiesOf } from '@storybook/react'
import StoryWrapperComponent from '../../hocs/StoryWrapperComponent.js'

import EditBar from './EditBar.js'
import Gnb from './Gnb.js'
import Footer from './Footer.js'
import Lnb from './Lnb.js'
import LnbSub from './LnbSub.js'
import PrimaryBar from './PrimaryBar.js'
import SecondaryBar from './SecondaryBar.js'
import SearchDateBar from './SearchDateBar.js'
import SortingBar from './SortingBar.js'
import SubHeader from './SubHeader.js'
import TextLabelBar from './TextLabelBar.js'
import InfoDownBox from './InfoDownBox.js'

storiesOf('Components|Common/bar', module)
  .addDecorator(StoryWrapperComponent)
  .add('1. Gnb', () => (<Gnb />)) // Global navigation bar
  .add('2. Footer', () => (<Footer />)) // Global navigation bar
  .add('3. Lnb', () => (<Lnb />)) // Local navigation bar (list title)
  .add(' - LnbSub', () => (<LnbSub />)) // lnb + lnbSub(2depth)
  .add(' - EditBar', () => (<EditBar />))
  .add(' - SearchDateBar', () => (<SearchDateBar />))
  .add(' - SortingBar', () => (<SortingBar />))
  .add('4. PrimaryBar', () => (<PrimaryBar />))
  .add('5. SecondaryBar', () => (<SecondaryBar />))
  .add('6. SubHeader', () => (<SubHeader />))
  .add('7. TextLabelBar', () => (<TextLabelBar />))
  .add('8. InfoDownBox', () => (<InfoDownBox />))
