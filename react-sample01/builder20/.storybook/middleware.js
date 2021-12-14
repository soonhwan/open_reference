// https://github.com/chimurai/http-proxy-middleware
const { createProxyMiddleware } = require('http-proxy-middleware')
const mockProxy = require('../mockData/mockProxy')

module.exports = function expressMiddleware (app) {
  mockProxy(app)

  // /static/images 요청은 내부 /images 폴더 참조
  app.get('/static/images/**', (req, res, next) => {
    const target = (req.path + '').replace('/static/images', '/images')
    console.log('redirect : ' + req.path + ' => ' + target)
    res.redirect(target);
  })

}