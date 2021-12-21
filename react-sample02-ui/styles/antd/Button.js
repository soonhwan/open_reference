import styled, { createGlobalStyle, css } from 'styled-components';
import { Button } from 'antd';

//Button
const _Button = styled(Button)`
  font-size: ${props => props.size}px;
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
      default :
        return css`
          /* background: #333;
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
          } */
        `;
    }
  }}
`;

export default _Button