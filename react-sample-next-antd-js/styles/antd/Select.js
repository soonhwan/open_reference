import styled, { createGlobalStyle, css } from 'styled-components';
import { Select } from 'antd';

//SelectDropdown
const SelectDropdown = createGlobalStyle`
  .ant-select-dropdown {
    &.type01 {
      color: yellow;
      background-color: green;
    }
  }
`;

//Select
const _Select = styled(Select)`
  &.type01 {
    .ant-select-selector {
      background: blue;
      color: gray;
    }
  }
  ${SelectDropdown}
`;

export default _Select