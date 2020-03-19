import Document, { Main, NextScript } from 'next/document'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

class MyDocument extends Document {
  render() {
    return (
      <html lang="ko">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="description" content="중고차" />
          <meta name="keywords" content="현대자동차그룹, 현대글로비스, 오토옥션, 중고차매매, 중고차경매, 입찰대행, 홈페이지" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Hyundai GLOVIS" />
          <meta property="og:title" content="Hyundai GLOVIS" />
          <meta property="og:description" content="중고차" />
          <meta property="og:image" content="" />
          <meta name="format-detection" content="telephone=no, address=no, email=no" />
          <title>메인 | Hyundai GLOVIS</title>

          <link rel="stylesheet" href={`${publicRuntimeConfig.staticFolder}/css/reset.css`} />
          <link rel="stylesheet" href={`${publicRuntimeConfig.staticFolder}/css/common.css`} />
          <link rel="stylesheet" href={`${publicRuntimeConfig.staticFolder}/css/layout.css`} />

          {/* 플러그인 css */}
          <link rel="stylesheet" href={`${publicRuntimeConfig.staticFolder}/css/slick.css`} />
          <link rel="stylesheet" href={`${publicRuntimeConfig.staticFolder}/css/slick-theme.css`} />
          <link rel="stylesheet" href={`${publicRuntimeConfig.staticFolder}/css/calendar.css`} />
          <link rel="stylesheet" href={`${publicRuntimeConfig.staticFolder}/css/rodal.css`} />
          <link rel="stylesheet" href={`${publicRuntimeConfig.staticFolder}/css/input-range.css`} />

          {/* 가이드 css */}
          <link rel="stylesheet" href={`${publicRuntimeConfig.staticFolder}/css/prism.css`} />
          <link rel="stylesheet" href={`${publicRuntimeConfig.staticFolder}/css/style.css`} />

          {/* 섹션별 css */}
          <link rel="stylesheet" href={`${publicRuntimeConfig.staticFolder}/css/main.css`} />
          <link rel="stylesheet" href={`${publicRuntimeConfig.staticFolder}/css/buy.css`} />
          <link rel="stylesheet" href={`${publicRuntimeConfig.staticFolder}/css/sell.css`} />
          <link rel="stylesheet" href={`${publicRuntimeConfig.staticFolder}/css/marketPrice.css`} />
          <link rel="stylesheet" href={`${publicRuntimeConfig.staticFolder}/css/homeService.css`} />
          <link rel="stylesheet" href={`${publicRuntimeConfig.staticFolder}/css/mypageDealer.css`} />
          <link rel="stylesheet" href={`${publicRuntimeConfig.staticFolder}/css/mypage.css`} />
          <link rel="stylesheet" href={`${publicRuntimeConfig.staticFolder}/css/autoAuction.css`} />
          <link rel="stylesheet" href={`${publicRuntimeConfig.staticFolder}/css/pricingSystem.css`} />
          <link rel="stylesheet" href={`${publicRuntimeConfig.staticFolder}/css/member.css`} />
          <link rel="stylesheet" href={`${publicRuntimeConfig.staticFolder}/css/event.css`} />
          <link rel="stylesheet" href={`${publicRuntimeConfig.staticFolder}/css/help.css`} />
          <link rel="stylesheet" href={`${publicRuntimeConfig.staticFolder}/css/report.css`} />
        </head>
        <body>
          <Main />
          <script src="https://polyfill.io/v3/polyfill.min.js?features=es6,es7,es8,es9,NodeList.prototype.forEach&flags=gated" />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument
