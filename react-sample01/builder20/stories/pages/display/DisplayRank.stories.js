import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';
import StoryRouter from '../../hocs/StoryRouter.js'
import pageList from 'routes'

const Page = pageList.DisplayRankPage

storiesOf('Pages|Display/rank', module)
  .add('/fantasy', () => {
    return (
      <StoryRouter 
        routePath="/display/rank/:topMenuId" 
        to="/display/rank/fantasy"
        component={Page} />
    )
  })
  .add('/fantasy/DP13042', () => {
    return (
      <StoryRouter 
        routePath="/display/rank/:topMenuId/:menuId" 
        to="/display/rank/fantasy/DP13042"
        component={Page} />
    )
  })
