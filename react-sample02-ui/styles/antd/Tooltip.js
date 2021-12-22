import styled, { createGlobalStyle, css } from 'styled-components';
import { Tooltip } from 'antd';

//TooltipOverlay
const TooltipOverlay = createGlobalStyle`
  .ant-tooltip {
    ${(props) => {
      console.log('props ===> ', props);
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
const _Tooltip = styled(Tooltip)`
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
  ${TooltipOverlay}
`;

export default _Tooltip