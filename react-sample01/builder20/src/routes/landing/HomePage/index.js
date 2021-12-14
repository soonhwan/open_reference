import React from 'react';
import Loadable from 'react-loadable';
import axios from 'axios';

const getLoadable = (loadingComponent, defaultDelay) => {
  return Loadable.Map({
    loader: {
      page: () => { 
        console.log('Loadable - page - Home');
        return import('../../../components/pages/samples/HomePage');
      }, 
      // 페이지 로딩에 필요한 데이터 조회
      userData: () => axios.post('/api/user/metaInfo').then(res => {
        console.log(res)
        return res
      }).catch(function (error) {
        console.log(error)
        return {}
      })
    },
    render(loaded, props) {
      const LoadedPage = loaded.page.default;
      const userData = loaded.userData;

      console.log('------------------------------');
      console.log(LoadedPage);
      console.log(userData);

      return <LoadedPage />;
    },
    loading: loadingComponent,
    delay: defaultDelay
  });
}

export default getLoadable