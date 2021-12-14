import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';
import StoryRouter from '../hocs/StoryRouter.js'
import pageList from 'routes'

storiesOf('Pages|Main/Ex', module)
  .add('Main', () => {
    return (
      <StoryRouter 
        routePath="/main" 
        to="/main"
        component={pageList.MainPage} />
    )
  })
  .add('Sub', () => {
    return (
      <StoryRouter 
        routePath="/sub" 
        to="/sub"
        component={pageList.SubPage} />
    )
  })
