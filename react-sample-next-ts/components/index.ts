/*
  - 컴포넌트 경로를 처리하는 index 
  - import 호출 방법
      예) import { MainLayout, Header } from 'components';
*/

//common - 단순 재사용이 많은 공통 컴포넌트
export { default as Header } from './common/Header';
export { default as Footer } from './common/Footer';
export { default as BottomNav } from './common/BottomNav';
export { default as BtnTop } from './common/BtnTop';
export { default as Pagination } from './common/Pagination';
export { default as GnbMenu } from './common/GnbMenu';
export { default as TopSellerCategory } from './common/TopSellerCategory';
export { default as TopSellerCategoryDepth2 } from './common/TopSellerCategoryDepth2';
export { default as TopSellerSort } from './common/TopSellerSort';
export { default as TopSellerList } from './common/TopSellerList';
export { default as MainKv } from './common/MainKv';
export { default as MainMDPick } from './common/MainMDPick';
export { default as MainPreOpen } from './common/MainPreOpen';
export { default as CategoryTab } from './common/CategoryTab';
export { default as MDPickList } from './common/MDPickList';

//dependency - 재사용성은 잘 없으나 특정화면에서 사용


//containers - data fetch / store
export { default as TopSellerContainer } from './containers/TopSellerContainer';
export { default as HomeContainer } from './containers/HomeContainer';

//layout - 레이아웃 모음
export { default as MainLayout } from './layouts/MainLayout';

//popup - 팝업 컨텐츠 모음



