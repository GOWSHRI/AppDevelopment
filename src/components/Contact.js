import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid, TextField } from '@mui/material';
import { styled } from '@mui/system';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Autocomplete from '@mui/material/Autocomplete';
import 'leaflet/dist/leaflet.css';
import { database, ref, set } from './firebasec'; // Import Firebase functions

// Styled components
const Root = styled('div')(({ theme }) => ({
  flexGrow: 1,
}));

const Section = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
}));

// Sample options for the Autocomplete search field with coordinates
const searchOptions = [
  { title: 'Rspuram', coordinates: [11.0036, 76.9663] },
  { title: 'Saravanampatti', coordinates: [11.1271, 77.0160] },
  { title: 'Avinashi', coordinates: [11.1950, 77.2670] },
  { title: 'Peelamedu', coordinates: [11.0183, 77.0277] },
  { title: 'Gandhipuram', coordinates: [11.0184, 76.9709] },
];

const Contact = () => {
  // State to store form values and selected location coordinates
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [mapCenter, setMapCenter] = useState([11.0168, 76.9558]);
  const [markerPosition, setMarkerPosition] = useState(null);

  // Function to handle the selection from Autocomplete
  const handleSelectLocation = (event, value) => {
    if (value) {
      setMapCenter(value.coordinates);
      setMarkerPosition(value.coordinates);
    }
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create a new record with a unique ID
    const newContactRef = ref(database, 'contact/' + Date.now());
    try {
      await set(newContactRef, {
        name,
        email,
        phone,
        message,
        location: markerPosition
      });
      alert('Contact details submitted successfully!');
      // Reset form fields
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setMarkerPosition(null);
    } catch (error) {
      console.error('Error storing contact details:', error);
      alert('Error submitting contact details. Please try again.');
    }
  };

  return (
    <Root>
      <AppBar position="static" sx={{ background: "#006064" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 0, paddingLeft: "50px", textAlign: 'left', fontFamily: "Helvetica Neue" }}>
            CONTACT US
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Contact and Map Section */}
        <Section sx={{ backgroundColor: 'white' }}>
          <Container maxWidth="md">
            <Grid container spacing={4}>
              {/* Contact Form */}
              <Grid item xs={12} md={6}>
                <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
                  Contact Us
                </Typography>
                <Typography variant="h6" align="center" color="textSecondary" paragraph>
                  Have any questions? Get in touch with us!
                </Typography>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        label="Name"
                        variant="outlined"
                        fullWidth
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Phone Number"
                        variant="outlined"
                        fullWidth
                        required
                        placeholder="Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        InputProps={{
                          startAdornment: (
                            <Typography sx={{ paddingRight: "8px" }}>
                              +91
                            </Typography>
                          ),
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Autocomplete
                        options={searchOptions}
                        getOptionLabel={(option) => option.title}
                        onChange={handleSelectLocation}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Search"
                            variant="outlined"
                            fullWidth
                            placeholder="Search..."
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Message"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button variant="contained" color="primary" fullWidth type="submit">
                        Submit Form
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Grid>

              {/* Map */}
              <Grid item xs={12} md={6}>
                <Typography variant="h5" align="center" gutterBottom>
                  Find Us
                </Typography>
                <MapContainer center={mapCenter} zoom={13} style={{ height: '100%', width: '100%' }}>
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  {markerPosition && (
                    <Marker position={markerPosition}>
                      <Popup>
                        {searchOptions.find(option => option.coordinates === markerPosition)?.title}
                      </Popup>
                    </Marker>
                  )}
                </MapContainer>
              </Grid>
            </Grid>
          </Container>
        </Section>
      </main>
    </Root>
  );
};

export default Contact;
