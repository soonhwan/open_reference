import React from 'react'
import { Router } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from 'store'
import { PopupContainer, ScreenMaskContainer } from 'containers'

const store = configureStore()

const StoryWrapperPage = (story) => {
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
export default StoryWrapperPage
