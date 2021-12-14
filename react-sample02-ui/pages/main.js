import React from 'react';
import { AppLayout } from 'components';
import { SubTitle } from 'styles/common';
import styled from 'styled-components';

import { StylesProvider } from '@material-ui/core/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const MyButton = styled(Button)`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border: 0;
  border-radius: 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
  color: white;
  height: 48px;
  padding: 0 30px;
  transition: all 0.3s;
  :hover {
    background: green;
  }
`;

const MyButton2 = styled(Button)`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border: 0;
  border-radius: 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
  color: white;
  height: 48px;
  padding: 0 30px;
  :hover {
    background: red;
  }
`;
const Main = () => {

  return (
    <AppLayout>
      <SubTitle size={24}>메인</SubTitle>

      <MyButton variant="outlined">Styled Components</MyButton>
      <br /><br />
      <StylesProvider injectFirst>
        <MyButton2>Styled Components</MyButton2>
      </StylesProvider>
      
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </AppLayout>
  )
}

export default Main;