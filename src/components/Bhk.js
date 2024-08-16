import React, { useState } from 'react';
import { Container, Typography, FormControl, FormControlLabel, Radio, RadioGroup, Button, Box, Snackbar, Alert, Select, MenuItem, InputLabel } from '@mui/material';

function Bhk() {
  const [bhkType, setBhkType] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [bhkSize, setBhkSize] = useState('');

  const handleBhkChange = (event) => {
    setBhkType(event.target.value);
    setBhkSize(''); // Reset size when BHK type changes
  };

  const handleNextClick = () => {
    console.log('Selected BHK Type:', bhkType, 'Selected BHK Size:', bhkSize);
    // Add navigation logic here
  };

  const handleLinkClick = (event) => {
    event.preventDefault();
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleBhkSizeChange = (event) => {
    setBhkSize(event.target.value);
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Box sx={{ border: '1px solid #ddd', padding: 4, borderRadius: 2, margin: 4 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Select your BHK type
        </Typography>
        <Typography variant="body2" align="center" color="textSecondary">
          To know more about this, <a href="#" onClick={handleLinkClick}>click here</a>
        </Typography>
        <FormControl component="fieldset" style={{ marginTop: '20px' }}>
          <RadioGroup name="bhkType" value={bhkType} onChange={handleBhkChange}>
            <FormControlLabel value="1 BHK" control={<Radio />} label="1 BHK" />
            <FormControlLabel value="2 BHK" control={<Radio />} label="2 BHK" />
            <FormControlLabel value="3 BHK" control={<Radio />} label="3 BHK" />
            <FormControlLabel value="4 BHK" control={<Radio />} label="4 BHK" />
          </RadioGroup>
        </FormControl>
        
        {bhkType === '2 BHK' && (
          <FormControl fullWidth style={{ marginTop: '20px' }}>
            <InputLabel id="bhk-size-label">Select Size</InputLabel>
            <Select
              labelId="bhk-size-label"
              id="bhk-size"
              value={bhkSize}
              label="Select Size"
              onChange={handleBhkSizeChange}
            >
              <MenuItem value="Small">Small</MenuItem>
              <MenuItem value="Large">Large</MenuItem>
            </Select>
          </FormControl>
        )}
        
        {bhkType === '3 BHK' && (
          <FormControl fullWidth style={{ marginTop: '20px' }}>
            <InputLabel id="bhk-size-label">Select Size</InputLabel>
            <Select
              labelId="bhk-size-label"
              id="bhk-size"
              value={bhkSize}
              label="Select Size"
              onChange={handleBhkSizeChange}
            >
              <MenuItem value="Small">Small</MenuItem>
              <MenuItem value="Large">Large</MenuItem>
            </Select>
          </FormControl>
        )}
        
        <Box display="flex" justifyContent="center" style={{ marginTop: '30px' }}>
          <Button variant="contained" color="primary" onClick={handleNextClick} disabled={bhkType === '2 BHK' && !bhkSize}>
            Next
          </Button>
        </Box>
      </Box>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleSnackbarClose} severity="info" sx={{ width: '100%' }}>
          <b>Why it matters?</b><br />
          The configuration and size of your home gives us a better idea of the magnitude of the project and helps us calculate the full home interior cost.
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default Bhk;
