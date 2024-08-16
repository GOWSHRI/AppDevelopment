import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box, Link } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage1 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://localhost:8080/api/users/login', {
        email,
        password
      });

      console.log('Response data:', response.data); // Debug response data
      const { role } = response.data;

      if (role === 'teacher') {
        console.log('Navigating to teacher dashboard');
        navigate('/teacher-dashboard');
      } 
      if (role === 'student') {
        console.log('Navigating to student dashboard');
        navigate('/student-dashboard');
      } 
      else {
        console.log('Role is not teacher');
        setError('Invalid role or permissions.');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Invalid email or password.');
    }
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Log In
      </Typography>
      {error && (
        <Typography color="error" variant="body2" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}
      <Box component="form" sx={{ mt: 2, width: '100%' }} onSubmit={handleLogin}>
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          variant="outlined"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          fullWidth
          margin="normal"
          type="password"
          variant="outlined"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2, backgroundColor: '#D2B48C' }}>
          Log In
        </Button>
      </Box>
      <Box
        sx={{
          mt: 2,
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Link href="#" underline="hover" color="black">
          Forgot Password?
        </Link>
        <Link component={RouterLink} to="/signup" underline="hover" color="black">
          Not a learner? Sign Up
        </Link>
      </Box>
    </Container>
  );
};

export default LoginPage1;