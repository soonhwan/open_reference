import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles'
import { DisplayTemplate } from 'components'

const HomePage = ({ match }) => {
  return (
    <DisplayTemplate>
      <div>
        <h1>Home - !!</h1>
      </div>
    </DisplayTemplate>
  );
};

export default HomePage
