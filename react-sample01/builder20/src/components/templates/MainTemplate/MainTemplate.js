import React, { Fragment, memo } from 'react';
import { GnbContainer } from 'containers' 
import { Footer } from 'components';
import { logConfig } from '_constants'

const MainTemplate = ({ children }) => {
  logConfig.render && console.log('%r MainTemplate')
  return (
    <Fragment>
      <div id="wrap" className="main">
        <GnbContainer mode="main"/>
        <div id="container">
          {children}
        </div>
        <Footer />
      </div>
    </Fragment>
  )
}
export default memo(MainTemplate)
