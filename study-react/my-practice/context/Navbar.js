import React, { useContext, memo } from 'react';
import { AllContext } from '../context/Context';

const Navbar = memo(() => {
  console.log('rendering = Navbar');
  const { login, handleLogin } = useContext(AllContext);
  return (
    <nav>
      <ul>
        {!login ? (
          <>
            <li onClick={handleLogin(true)}>LOGIN</li>
            <li>SIGNUP</li>
          </>
        ) : (
          <>
            <li onClick={handleLogin(false)}>LOGOUT</li>
            <li>MYPAGE</li>
          </>
        )}
      </ul>
    </nav>
  )
});

export default Navbar;