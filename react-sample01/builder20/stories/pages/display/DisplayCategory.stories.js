import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';
import StoryRouter from '../../hocs/StoryRouter.js'
import pageList from 'routes'

const Page = pageList.DisplayCategoryPage

storiesOf('Pages|Display/category', module)
  .add('/fantasy', () => {
    return (
      <StoryRouter 
        routePath="/display/category/:topMenuId" 
        to="/display/category/fantasy"
        component={Page} />
    )
  })
  .add('/fantasy/DP13042', () => {
    return (
      <StoryRouter 
        routePath="/display/category/:topMenuId/:menuId" 
        to="/display/category/fantasy/DP13042"
        component={Page} />
    )
  })
