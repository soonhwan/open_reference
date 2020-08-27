import React, { useContext, memo } from 'react';
import { AllContext } from '../context/Context';
import Button from '../components/Button';

const Navbar = memo(() => {
  //console.log('rendering = Navbar');
  const { login, handleLogin } = useContext(AllContext);
  return (
    <nav>
      <ul>
        {!login ? (
          <>
            <li><Button className="btn-st1" onClick={handleLogin(true)}>LOGIN</Button></li>
            <li>SIGNUP</li>
          </>
        ) : (
          <>
            <li><Button className="btn-st1" onClick={handleLogin(false)}>LOGOUT</Button></li>
            <li>MYPAGE</li>
          </>
        )}
      </ul>
    </nav>
  )
});

export default Navbar;