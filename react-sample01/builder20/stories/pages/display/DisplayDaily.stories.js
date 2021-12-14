import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';
import StoryRouter from '../../hocs/StoryRouter.js'
import pageList from 'routes'

const Page = pageList.DisplayDailyPage

storiesOf('Pages|Display', module)
  .add('daily', () => {
    return (
      <StoryRouter 
        routePath="/display/daily" 
        to="/display/daily"
        component={Page} />
    )
  })
 