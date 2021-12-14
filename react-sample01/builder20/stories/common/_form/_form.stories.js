import React from 'react';
import { storiesOf } from '@storybook/react'
import StoryWrapperComponent from '../../hocs/StoryWrapperComponent.js'

import InputEx from './Input.js'
import InputGroupEx from './InputGroup.js'
import TextareaEx from './Textarea.js'
import TextareaGroupEX from './TextareaGroup.js'
import SelectEx from './Select.js'
import SelectMutipleEx from './SelectMutiple.js'
import CheckboxEx from './Checkbox.js'
import CheckboxTermEx from './CheckboxTerm.js'
import RadioEx from './Radio.js'
import RadioMutipleEx from './RadioMutiple.js'
import DropdownEx from './Dropdown.js'

storiesOf('Components|Common/form', module)
  .addDecorator(StoryWrapperComponent)
  .add('1. Input', () => (<InputEx />))
  .add(' - InputGroup', () => (<InputGroupEx />))
  .add('2. Textarea', () => (<TextareaEx />))
  .add(' - TextareaGroup', () => (<TextareaGroupEX />))
  .add('3. Select', () => (<SelectEx />))
  .add(' - SelectMutiple', () => (<SelectMutipleEx />))
  .add('4. Checkbox', () => (<CheckboxEx />))
  .add(' - CheckboxTerm', () => (<CheckboxTermEx />))
  .add('5. Radio', () => (<RadioEx />))
  .add('- RadioMutiple', () => (<RadioMutipleEx />))
  .add('6. Dropdown', () => (<DropdownEx />))
  // .add('- PopupSample', () => (<PopupSample />))
