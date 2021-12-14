import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';
import StoryRouter from '../hocs/StoryRouter.js'
import pageList from 'routes'

const Page = pageList.SearchPage

storiesOf('Pages|Search', module)
  .add('기본', () => {
    return (
      <StoryRouter 
        routePath="/search" 
        to="/search"
        component={Page} />
    )
  })
  .add('검색어', () => {
    return (
      <StoryRouter 
        routePath="/search" 
        to="/search?123"
        component={Page} />
    )
  })