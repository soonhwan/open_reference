import styled, { css } from 'styled-components';

export const Container = styled.section`
  position: relative;
  padding: 30px 10px;
  min-height: 100vh;
`;

export const SubTitle = styled.h2<{ size?: number; }>`
  font-size: ${props => props.size}px;
  font-weight: 500;
  margin-bottom: 10px;
  text-align: center;
`;
