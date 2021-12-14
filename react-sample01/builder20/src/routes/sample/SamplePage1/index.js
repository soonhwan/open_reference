import React from 'react';
import Loadable from 'react-loadable';
import axios from 'axios';

const getLoadable = (loadingComponent, defaultDelay) => {
  return Loadable.Map({
    loader: {
      page: () => { 
        console.log('Loadable - page - sample1');
        return import('../../../components/pages/samples/SamplePage1');
      },
      
    },
    render(loaded, props) {
      console.log('Loadable - page - sample1 -------------------------');
      const LoadedPage = loaded.page.default;

      return <LoadedPage />;
    },
    loading: loadingComponent,
    delay: defaultDelay
  });
}

export default getLoadable