import Loadable from 'react-loadable'
import serverRouter from './__server/serverRouter.js'

// process.env.DATA_TYPE = 'local'; // 선언시 빌드 에러 발생

const app = serverRouter
const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 4000

// 스플리팅된 코드들을 모두 불러오고 난 다음에 서버 가동
Loadable.preloadAll().then(() => {
  app.listen(DEFAULT_PORT, () => {
    console.log(`Running on http://localhost:${DEFAULT_PORT}/`)
  })
})
