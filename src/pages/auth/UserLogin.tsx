import React from 'react';
import LoginForm from '../../components/auth/LoginForm';

const UserLogin: React.FC = () => {
  return <LoginForm userType="individual" />;
};

export default UserLogin;