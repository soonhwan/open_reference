/*
  - antd 기본 컴포넌트 이름을 그대로 사용하면서 style 변경하기 위한 구조
  - import 할때 경로가 다르다
      예) 기존 : import { Layout, Drawer, Button } from 'antd';
          변경 : import { Layout, Drawer, Button } from '@styles/antd';
*/

import styled from 'styled-components';

import iconSearch from "styles/svg/ico_search.svg";
import iconLogo50 from "styles/svg/ico_gnb_logo_W_50.svg";

const _IconSearch = styled(iconSearch)` width: 32px; height: 32px; `;
const _IconLogo50 = styled(iconLogo50)` width: 50px; height: 50px; `;

const icons: any = {
  IconSearch: _IconSearch,
  IconLogo50: _IconLogo50,
};

export const IconSearch = icons.IconSearch
export const IconLogo50 = icons.IconLogo50

export default icons