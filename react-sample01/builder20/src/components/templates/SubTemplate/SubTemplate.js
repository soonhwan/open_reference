import React, { Fragment, memo } from 'react';
import { GnbContainer } from 'containers'
import { Footer } from 'components';
import { logConfig } from '_constants'

const SubTemplate = ({ children, mode = 'sub' }) => {
  logConfig.render && console.log('%r SubTemplate')
  return (
    <Fragment>
      <div id="wrap" className="sub">
        <GnbContainer mode={mode}/>
        <div id="container">
          {children}
        </div>
        <Footer />
      </div>
    </Fragment>
  )
}
export default memo(SubTemplate)
