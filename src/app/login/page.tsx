// pages/login.tsx
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import LoginForm from '@/components/LoginForm';

const LoginPage: React.FC = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100vh',
    }}
  >
    <Card style={{ marginTop: '4rem', padding: '2rem', width:'max-content' }}>
      <CardContent>
        <h2 style={{ textAlign: 'center' }}>Login</h2>
        <LoginForm />
      </CardContent>
    </Card>
  </div>
);
export default LoginPage;
