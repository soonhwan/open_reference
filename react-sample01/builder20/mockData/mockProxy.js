// node 서버 proxy 처리
const { createProxyMiddleware } = require('http-proxy-middleware')
const express = require('express')
const fs = require('fs')
const path = require('path')
const appDirectory = fs.realpathSync(process.cwd())
// const queryString = require('query-string')

module.exports = function(app) {
  // api 요청은 json 데이터 처리 
  app.all('/api/**', (req, res) => {
    const target = path.resolve(appDirectory, (req.path + '').replace('/api', './mockData') + '.json')
    console.log('mock-api => ' + target, req.query)

    // queryString.parse(location.search)
    
    try {
      const dataBuffer = fs.readFileSync(target)
      const dataJson = dataBuffer.toString()
      // console.log(dataJson)
      res.send(dataJson)  
    } catch (e) {
      console.error(e)  
      res.send(404, { errorMsg: 'Not Found' }) // TODO. 공통 에러 처리화 필요
    }
  })
  
  // resources 요청은 내부 resources 폴더 참조
  app.all('/resources/**', (req, res, next) => {
    const target = path.resolve(appDirectory, '../' + req.path)
    console.log('mock-api => ' + target)

    res.download(target, function(err) {
      if (err) {
        // Check if headers have been sent
        if (res.headersSent) {
          // You may want to log something here or do something else
        } else {
          return res.sendStatus(404); // 404, maybe 500 depending on err
        }
      }
      // Don't need res.end() here since already sent
    })
  })
}