import React from 'react';
import { useHistory } from 'react-router-dom';
import mimc from '@/assets/images/mimc.png';
import { LoginForm } from '../LoginForm';
import './styles.scss';

export const Login = () => {
  const history = useHistory();

  return (
    <div className="login-block">
      <img src={mimc} alt="logo" className="login-block__logo" />
      <LoginForm onLogin={() => history.push('/')} />
    </div>
  );
};
