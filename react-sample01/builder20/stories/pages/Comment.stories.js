import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';
import StoryRouter from '../hocs/StoryRouter.js'
import pageList from 'routes'

const Page = pageList.CommentPage

storiesOf('Pages|Comment/Comment', module)
  .add('Empty data', () => {
    return (
      <StoryRouter 
        routePath="/comment" 
        to="/comment"
        component={Page} />
    )
  })
  .add('H040078838/recommend', () => {
    return (
      <StoryRouter 
        routePath="/comment/:channelId" 
        to="/comment/H040078838?orderBy=recommend"
        component={Page} />
    )
  })
  .add('H040048067', () => {
    return (
      <StoryRouter 
        routePath="/comment/:channelId" 
        to="/comment/H040048067"
        component={Page} />
    )
  })
