// node 서버 proxy 처리
const { createProxyMiddleware } = require('http-proxy-middleware')
const express = require('express')
const fs = require('fs')
const path = require('path')
const appDirectory = fs.realpathSync(process.cwd())
const mockProxy = require('../mockData/mockProxy')
/*
"start:json": "DATA_TYPE=mock PORT=3000 node commandNpm/start.js",            -> 로컬 자원에 직접 접근
"start:local": "DATA_TYPE=local PORT=3000 node commandNpm/start.js",          -> 로컬 서버(java)에 접근 
"start:dev": "DATA_TYPE=dev PORT=3000 node commandNpm/start.js",              -> dev 서버
"start:qa": "DATA_TYPE=qa PORT=3000 node commandNpm/start.js",                -> QA 서버
"start:ssr": "DATA_TYPE=local PORT=4000 node _build_ssr/server",              -> 로컬 서버(java)에 접근 (render server)
"start:ssrf": "DATA_TYPE=local nodemon --watch src/lib _build_ssr/server",    -> 로컬 서버(java)에 접근 (front-end 빌드)
*/

module.exports = function(app) {
  const type = process.env.DATA_TYPE

  // 환경 정보 
  const envLocal = { 
    target: 'http://localhost:8080/', 
    changeOrigin: true 
  }
  const envNode = { 
    target: 'http://localhost:3300/', 
    changeOrigin: true 
  }

  
  if (type === 'mock') {
    mockProxy(app)
  } else {
    app.use(
      createProxyMiddleware(['/resources', '/api'], envLocal)
    )
  }
  
}