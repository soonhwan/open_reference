import React from 'react';
import { storiesOf } from '@storybook/react'
import StoryWrapperComponent from '../../hocs/StoryWrapperComponent.js'

import MemberLogoEx from './MemberLogo.js'
import MemberIllInfoEx from './MemberIllInfo.js'
import MemberTextInfoEx from './MemberTextInfo.js'
import MemberLoginListEx from './MemberLoginList.js'
import MemberSubButtonEx from './MemberSubButton.js'
import MemberAuthButtonEx from './MemberAuthButton.js'

storiesOf('Components|Common/member', module)
  .addDecorator(StoryWrapperComponent)
  .add('1. MemberLogo', () => (<MemberLogoEx />))
  .add('2. MemberLoginList', () => (<MemberLoginListEx />))
  .add('3. MemberIllInfo', () => (<MemberIllInfoEx />))
  .add('4. MemberTextInfo', () => (<MemberTextInfoEx />))
  .add('5. MemberSubButton', () => (<MemberSubButtonEx />))
  .add('6. MemberAuthButton', () => (<MemberAuthButtonEx />))
