import React, { Fragment } from 'react';

const StoryWrapperComponent = (story) => {

  // console.log('StoryWrapperComponent')

  return (
    <Fragment>
      { story() }
    </Fragment>
  )
}
export default StoryWrapperComponent
/*
import React from 'react'
import { Router } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from 'store'
import { PopupContainer, ScreenMaskContainer } from 'containers'

const store = configureStore()

console.log(store.getState())

const StoryWrapperComponent = (story) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="storybook-container">
          { story() }
        </div>
        <style>{`
          .storybook-container {
            background: #f5f5f5;
          }
        `}</style>
        <PopupContainer/>
        <ScreenMaskContainer/>
      </BrowserRouter>
    </Provider>
  )
}
export default StoryWrapperComponent

*/