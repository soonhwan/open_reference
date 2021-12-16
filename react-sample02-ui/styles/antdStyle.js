import styled, { createGlobalStyle, css } from 'styled-components';
import { Button, Select, Tooltip, Dropdown } from 'antd';

export const W = {};

//Button
W.Button = styled(Button)`
  font-size: ${props => props.size}px;
  background: #333;
  transition: all 0.3s;
  color: #fff;
  &.ant-btn-text { 
    color: #333; 
  }
  &[disabled] { 
    opacity: 0.7; 
  }
  &.ant-btn-circle { 
    border-radius: 10%; 
  }
  :hover {
    background: green;
  }
  ${(props) => {
    switch (props.className) {
      case "type01":
        return css`
          background: blue;
          &::after {
            content: 'st1';
          }
        `;
      case "type02":
        return css`
          background: red;
          &::after {
            content: 'st2';
          }
        `;
    }
  }}
`;

//SelectDropdown
W.SelectDropdown = createGlobalStyle`
  .ant-select-dropdown {
    &.type01 {
      color: yellow;
      background-color: green;
    }
  }
`;

//Select
W.Select = styled(Select)`
  &.type01 {
    .ant-select-selector {
      background: blue;
      color: gray;
    }
  }
  ${W.SelectDropdown}
`;

//TooltipOverlay
W.TooltipOverlay = createGlobalStyle`
  .ant-tooltip {
    ${(props) => {
      switch (props.overlayClassName) {
        case "type01":
          return css`
            &.type01 .ant-tooltip-inner {
              color: blue;
              background-color: green;
            }
          `;
        case "type02":
          return css`
            &.type02 .ant-tooltip-inner {
              background-color: #bd7272;
            }
          `;
      }
    }}
  }
`;

//Tooltip
W.Tooltip = styled(Tooltip)`
  ${(props) => {
    switch (props.className) {
      case "type01":
        return css`
          background-color: #333;
        `;
      case "type02":
        return css`
          background-color: #f79595;
        `;
    }
  }} 
  ${W.TooltipOverlay}
`;


//DropdownOverlay
W.DropdownOverlay = createGlobalStyle`
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
W.Dropdown = styled(Dropdown)`
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
  ${W.DropdownOverlay}
`;