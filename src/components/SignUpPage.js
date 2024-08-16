import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box, Link, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/users/register', formData)
      .then(response => {
        navigate('/login');
      })
      .catch(error => {
        console.error('There was an error registering the user!', error);
      });
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
        Sign Up
      </Typography>
      <Box component="form" sx={{ mt: 2, width: '100%' }} onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <TextField
            label="First Name"
            name="firstName"
            fullWidth
            variant="outlined"
            required
            value={formData.firstName}
            onChange={handleChange}
          />
          <TextField
            label="Last Name"
            name="lastName"
            fullWidth
            variant="outlined"
            required
            value={formData.lastName}
            onChange={handleChange}
          />
        </Box>
        <TextField
          label="Email"
          name="email"
          fullWidth
          margin="normal"
          variant="outlined"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          label="Password"
          name="password"
          fullWidth
          margin="normal"
          type="password"
          variant="outlined"
          required
          value={formData.password}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2, backgroundColor: '#D2B48C' }}>
          Sign Up
        </Button>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography variant="body2">
          <Link component={RouterLink} to="/login" underline="hover" color="black">Already a learner? Sign In</Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default SignUpPage;