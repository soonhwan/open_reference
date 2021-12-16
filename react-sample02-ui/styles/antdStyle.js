import styled, { createGlobalStyle } from 'styled-components';
import { Button, Select, Tooltip } from 'antd';

export const WC = {};

//Button
WC.Button = styled(Button)`
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
  &.btn-st1 {
    background: blue;  
  }
  &.btn-st2 {
    background: red;  
  }
  :hover {
    background: green;
  }
`;

//SelectDropdown
WC.SelectDropdown = createGlobalStyle`
  .ant-select-dropdown {
    &.select-st1 {
      color: yellow;
      background-color: green;
    }
  }
`;

//Select
WC.Select = styled(Select)`
  &.select-st1 {
    .ant-select-selector {
      background: blue;
      color: gray;
    }
  }
  ${WC.SelectDropdown}
`;

//TooltipOverlay
WC.TooltipOverlay = createGlobalStyle`
  .ant-tooltip {
    &.tooltip-st1 .ant-tooltip-inner {
      color: blue;
      background-color: green;
    }
    &.tooltip-st2 .ant-tooltip-inner {
      background-color: #f79595;
    }
  }
`;

//Tooltip
WC.Tooltip = styled(Tooltip)`
  &.tooltip-st1 {
    background-color: #333;
  }
  &.tooltip-st2 {
    background-color: #f79595;
  }
  ${WC.TooltipOverlay}
`;
