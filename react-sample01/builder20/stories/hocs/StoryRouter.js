import React, { Fragment } from 'react'
import { action } from '@storybook/addon-actions';
import { Route, Switch, Link } from 'react-router-dom';
import { useRef, useReactRouter } from 'hooks';

const NotFound = () => {
  const { history, location, match } = useReactRouter()
  return (
    <div>
      <h2>
        Not found "{ location.pathname + location.search }"
      </h2>
    </div>
  );
};

const StoryWrapperPage = ({ routePath, to, component }) => {
  const linkRef = useRef(null)
  setTimeout(() => {
    linkRef.current.click()
  }, 5) 

  return (
    <Fragment>

      <Link style={{ display: 'none' }} to={to} ref={linkRef} onClick={action(to)}>Page link</Link>

      <Switch>
        {/* target */}
        <Route exact path={routePath} component={component}/>
        <Route exact path="/" component={component}/>
        {/* NotFound */}
        <Route component={NotFound} />
      </Switch>
      
    </Fragment>
  )
}
export default StoryWrapperPage
