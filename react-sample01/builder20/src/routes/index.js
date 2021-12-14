/*
ssr code-splitting

react-loadable vs loadable-components + React.lazy
  https://loadable-components.com/docs/loadable-vs-react-lazy/

react-loadable
  https://github.com/jamiebuilds/react-loadable
  react-loadable이 Webpack v4+과 Babel v7+에 더이상 호환이 되지 않으며, 유지보수가 되지 않는 문제가 있다고함
  -> 2020-02에 babel 7 대응한 흔적이 있음 

loadable-components + React.lazy
  https://loadable-components.com/docs/loadable-vs-react-lazy/
  https://gloriajun.github.io/frontend/2019/04/11/react-code-splitting.html
  https://dev.to/itmayziii/better-performance-using-dynamic-code-splitting-in-gatsby-with-loadable-components-6am
  http://egloos.zum.com/cplusplus5/v/6461269

// https://github.com/jamiebuilds/react-loadable
// https://github.com/jamiebuilds/react-loadable#loading-multiple-resources 추가로 체크 필요 
// https://github.com/jamiebuilds/react-loadable#loadable
*/

import React from 'react'
import Loadable from 'react-loadable'
import { logConfig, DEFAULT_ROUTE_DELAY } from '_constants'
import utils from 'utils'

logConfig.routeList && utils.log(utils.chalk.yellow('*** Loadable router list ***'))

const Loading = (props) => {
  if (props.error) {
    console.log('[react-loadable] loading props.error => ', props.error)
    return <div>Error! <button onClick={ props.retry }>Retry</button></div>
  } else if (props.pastDelay) { // delay 시간보다 늦을 경우 로딩중 표현
    return <div>Loading...</div>
  } else {
    return null // Avoiding Flash Of Loading Component
  }
}

const getLoadable = (importPath) => {
  return Loadable({
    loader: () => { 
      return importPath
    },
    loading: Loading,
    delay: DEFAULT_ROUTE_DELAY
  })
}

const routesMap = {}
const pagePathMap = {
  // 구. sample
  'SubPage': import('../components/pages/main/SubPage'),
  'Type1Page': import('../components/pages/samples/Type1Page'),
  'Type2Page': import('../components/pages/samples/Type2Page'),
  'CommentPage': import('../components/pages/comment/CommentPage'),

  // OSB2.5
  // 전시 
  'DisplayCardPage': import('../components/pages/display/DisplayCardPage'),
  'DisplayCategoryPage': import('../components/pages/display/DisplayCategoryPage'),
  'MainPage': import('../components/pages/main/MainPage'),

  // 마이
  'SearchPage': import('../components/pages/search/SearchPage'),
  'MyCouponPage': import('../components/pages/my/MyCouponPage'),

}
Object.keys(pagePathMap).forEach((key) => {
  routesMap[key] = getLoadable(pagePathMap[key])
})

// 폴더 탐색하여 목록에 추가
const pageList = require.context('.', true, /\.\/[^/]+\/[^/]+\/index\.js$/)
pageList.keys().forEach((key) => {
  const pageName = key.replace(/^.+\/([^/]+)\/index\.js/, '$1')
  logConfig.routeList && console.log('======== pageName => ' + pageName)
  logConfig.routeList && utils.log(utils.chalk.yellow(`  * ${utils.chalk.bold(pageName)}: ${utils.chalk.cyan(key)}`))
  let page = pageList(key).default
  page = page(Loading, DEFAULT_ROUTE_DELAY)

  routesMap[pageName] = page
})

export default routesMap

