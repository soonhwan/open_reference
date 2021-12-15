import styled, { createGlobalStyle } from 'styled-components';
import 'antd/dist/antd.css';
import { Button, Select } from 'antd';

export const ButtonSt1 = styled(Button)`
  font-size: ${props => props.size}px;
  background: red;
  transition: all 0.3s;
  :hover {
    background: green;
  }
  &.ant-btn-circle {
    border-radius: 10%;
  }
`;

export const ButtonSt2 = styled(Button)`
  border: 2px solid red;
  background: blue;
  transition: all 0.3s;
  :hover {
    background: black;
  }
  &.ant-btn-text {color: red;}
  &[disabled] {opacity: 0.7;}
`;

export const SelectSt2 = styled(Select)`
  background: blue;
  color: gray;
`;

export const SelectOptionSt2 = createGlobalStyle`
  body {
    .ant-select-dropdown {
      color: yellow;
      background-color: green;
    }
  }
`;

/* export const TooltipSt2 = createGlobalStyle`
  body {
    .ant-tooltip-inner {
      color: yellow;
      background-color: green;
    }
  }
`; */
