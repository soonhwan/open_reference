import styled, { createGlobalStyle, css } from 'styled-components';
import { Dropdown } from 'antd';

//DropdownOverlay
const DropdownOverlay = createGlobalStyle`
  .ant-dropdown {
    .ant-dropdown-menu-item {
      a {
        color: blue;
      }
    }
  
    ${(props) => {
      switch (props.overlayClassName) {
        case "type01":
          return css`
            &.type01 .ant-dropdown-menu-item {
              &.ant-dropdown-menu-item-active {
                a {
                  color: #333;
                }
                background-color: green;
              }
            }
          `;
        case "type02":
          return css`
            &.type02 .ant-dropdown-menu-item {
              a {
                color: red;
              }
            }
          `;
      }
    }}
  }
`;

//Dropdown
const WDropdown = styled(Dropdown)`
  ${(props) => {
    switch (props.className) {
      case "type01":
        return css`
          color: red;
          background: #333;
        `;
      case "type02":
        return css`
          color: gray;
        `;
    }
  }} 
  ${DropdownOverlay}
`;

export default WDropdown