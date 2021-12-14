import { addParameters } from '@storybook/client-api';
import { addDecorator } from '@storybook/react';
import React, { Fragment } from 'react';
import StyleContext from 'isomorphic-style-loader/StyleContext' // ssr style 적용 처리
import '../src/styles/base.scss' // storybook 에 공통 css 적용
import { Router } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import StoryRouter from 'storybook-react-router';
import { Provider } from 'react-redux'
import configureStore from 'store'
import { PopupContainer, ScreenMaskContainer } from 'containers'

let store = configureStore()

const insertCss = (...styles) => {
  const removeCss = styles.map(style => style._insertCss())
  return () => removeCss.forEach(dispose => dispose())
}

addDecorator(StoryRouter())

addDecorator((story) => {
  // storybook 내부 페이지(좌측 메뉴) 변경 시 강제로 store 정보 초기화
  // TODO. 정보 수정을 위해 init 정보는 받아올 것
  store = configureStore({
    base:{
      isShowScreenMask: false,
      popup: {
        visible: false,
        info: {}
      },
      toast: []
    }
  })
  // console.log('addDecorator preview', store.getState())

  return (
    <StyleContext.Provider value={{ insertCss }}>
      <Provider store={store}>
        
          <div className="storybook-container">
            { story() }
          </div>
          <style>{`
            body { background:#ffffff; }
            .storybook-container { background:#ffffff !important; }
            // .storybook-container {
            //   background: #f5f5f5;
            // }
          `}</style>
          <PopupContainer/>
          <ScreenMaskContainer/>

      </Provider>
    </StyleContext.Provider>
  )
})

const customViewports = {
  w250: {
    name: 'Width 250',
    styles: {
      width: '250px',
      height: '420px',
    },
    type: 'mobile',
  },
  w280: {
    name: 'Width 280',
    styles: {
      width: '280px',
      height: '420px',
    },
    type: 'mobile',
  },
  w360: {
    name: 'Width 360',
    styles: {
      width: '360px',
      height: '550px',
    },
    type: 'mobile',
  },
  w768: {
    name: 'Width 768',
    styles: {
      width: '768px',
      height: '550px',
    },
    type: 'tablet',
  },
  w1080: {
    name: 'Width 1080',
    styles: {
      width: '1080px',
      height: '550px',
    },
    type: 'desktop',
  },
  w1440: {
    name: 'Width 1440',
    styles: {
      width: '1440px',
      height: '550px',
    },
    type: 'desktop',
  },
};

addParameters({
  viewport: {
    viewports: customViewports,
    defaultViewport: 'w320',
  },
});