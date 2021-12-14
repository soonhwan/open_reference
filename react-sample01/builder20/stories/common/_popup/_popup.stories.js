import React from 'react';
import { storiesOf } from '@storybook/react'
import StoryWrapperComponent from '../../hocs/StoryWrapperComponent.js'

import Popup from './Popup.js'
import PopupSample from './PopupSample.js'
import PopupCoverSample from './PopupCoverSample.js'
import PopupContent from './PopupContent.js'
import DropboxPopup from './DropboxPopup.js'
import ReceiptPopup from './ReceiptPopup.js'
import ReceiptPopupSample from './ReceiptPopupSample.js'
import PayPopup from './PayPopup.js'
import PayPopupSample from './PayPopupSample.js'
import LoadingPopup from './LoadingPopup.js'
import DimPopup from './DimPopup.js'

storiesOf('Components|Common/popup', module)
  .addDecorator(StoryWrapperComponent)
  .add('1. Popup', () => (<Popup />))
  .add('- PopupSample', () => (<PopupSample />))
  .add('- PopupCoverSample', () => (<PopupCoverSample />))
  .add('- PopupContent', () => (<PopupContent />))
  .add('2. DropboxPopup', () => (<DropboxPopup />))
  .add('3. ReceiptPopup', () => (<ReceiptPopup />))
  .add('- ReceiptPopupSample', () => (<ReceiptPopupSample />))
  .add('4. PayPopup', () => (<PayPopup />))
  .add('- PayPopupSample', () => (<PayPopupSample />))
  .add('5. LoadingPopup', () => (<LoadingPopup />))
  .add('6. DimPopup', () => (<DimPopup />))
