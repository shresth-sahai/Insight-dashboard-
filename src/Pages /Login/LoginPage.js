import React from 'react';
import LogoSection from './LoginSection';
import LoginForm from './LoginForm';

const LoginPage = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/2">
        <LogoSection />
      </div>
      <div className="flex items-center justify-center w-1/2">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
