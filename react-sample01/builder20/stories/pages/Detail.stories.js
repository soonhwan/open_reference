import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';
import StoryRouter from '../hocs/StoryRouter.js'
import pageList from 'routes'

const Page = pageList.DetailPage

storiesOf('Pages|Detail', module)
  .add('판타지', () => {
    return (
      <StoryRouter 
        routePath="/detail/:channelId" 
        to="/detail/daily"
        component={Page} />
    )
  })
  .add('로맨스', () => {
    return (
      <StoryRouter 
        routePath="/detail/:channelId" 
        to="/detail/daily"
        component={Page} />
    )
  })
  .add('웹소설', () => {
    return (
      <StoryRouter 
        routePath="/detail/:channelId" 
        to="/detail/daily"
        component={Page} />
    )
  })
  .add('만화', () => {
    return (
      <StoryRouter 
        routePath="/detail/:channelId" 
        to="/detail/daily"
        component={Page} />
    )
  })
  .add('웹툰', () => {
    return (
      <StoryRouter 
        routePath="/detail/:channelId" 
        to="/detail/daily"
        component={Page} />
    )
  })
  .add('일반도서', () => {
    return (
      <StoryRouter 
        routePath="/detail/:channelId" 
        to="/detail/daily"
        component={Page} />
    )
  })
  .add('오디오북', () => {
    return (
      <StoryRouter 
        routePath="/detail/:channelId" 
        to="/detail/daily"
        component={Page} />
    )
  })
  .add('세트', () => {
    return (
      <StoryRouter 
        routePath="/detail/:channelId" 
        to="/detail/daily"
        component={Page} />
    )
  })

 