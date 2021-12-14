import React, { Fragment, memo } from 'react';
import { Helmet } from 'react-helmet'
import { logConfig } from '_constants'

const BooksHelmet = ({ children }) => {
  logConfig.render && console.log('%r BooksHelmet')
  return (
    <Helmet>
      {children}

      {/* TODO. 기존 정책 정의 필요 */}
      <meta property="og:url" id="og_url" content={'ogPageUrl'} />
      <meta property="og:type" id="og_type" content="website" />
      <meta property="og:title" id="og_title" content={'snsProdNm'} />
      <meta property="og:description" id="og_description" content={'snsDesc'} />
      <meta property="og:image" id="og_image" content={'snsFilePos'} />
      <meta property="fb:app_id" content="875368495909356" />
    </Helmet>
  ) 
}  


export default memo(BooksHelmet);

