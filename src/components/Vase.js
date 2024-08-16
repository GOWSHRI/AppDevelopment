import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import { Grid, CardMedia } from '@mui/material';

// Styled components
const MainContent = styled('main')(({ theme }) => ({
    flex: 1,
}));

const CardGrid = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
}));

const Footer = styled('footer')(({ theme }) => ({
  backgroundColor: '#000', // Set the background color to black
  color: '#fff', // Set text color to white for contrast
  padding: theme.spacing(6),
  textAlign: 'center',
  marginTop: 'auto', // Ensures footer is pushed to the bottom of the page
}));

const ContactInfo = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

const Vase = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <MainContent>
        <Container sx={{ py: 8 }} maxWidth="md">
          <CardGrid maxWidth="lg">
            <Grid container spacing={4}>
              {/* Vase items */}
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ paddingRight: '8px', paddingLeft: '8px' }}>
                  <CardMedia
                    component="img"
                    sx={{
                      height: '300px',
                      width: '100%',
                      objectFit: 'cover',
                    }}
                    image="https://cdn.pixelspray.io/v2/black-bread-289bfa/Zu3Ns5/wrkr/t.resize(h:0,w:0)/data/pottery-barn/23052022newimg/7911003_1.jpg"
                    alt="Joshua Handcrafted Ceramic"
                  />
                  <Typography>
                    <b>Joshua Handcrafted Ceramic</b>
                  </Typography>
                  <Typography sx={{ fontSize: '16px', color: '#333' }}>
                    ₹1,200
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ paddingRight: '8px', paddingLeft: '8px' }}>
                  <CardMedia
                    component="img"
                    sx={{
                      height: '300px',
                      width: '100%',
                      objectFit: 'cover',
                    }}
                    image="https://cdn.pixelspray.io/v2/black-bread-289bfa/Zu3Ns5/wrkr/t.resize(h:450,w:500)/data/pottery-barn/24042024/10302357_2.jpg"
                    alt="Willow Cachepot"
                  />
                  <Typography>
                    <b>Willow Cachepot</b>
                  </Typography>
                  <Typography sx={{ fontSize: '16px', color: '#333' }}>
                    ₹900
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ paddingRight: '8px', paddingLeft: '8px' }}>
                  <CardMedia
                    component="img"
                    sx={{
                      height: '300px',
                      width: '100%',
                      objectFit: 'cover',
                    }}
                    image="https://cdn.pixelspray.io/v2/black-bread-289bfa/Zu3Ns5/wrkr/t.resize(h:450,w:500)/data/pottery-barn/24042024/10302352_2.jpg"
                    alt="Halldale Terracotta Vase Collection"
                  />
                  <Typography>
                    <b>Halldale Terracotta Vase Collection</b>
                  </Typography>
                  <Typography sx={{ fontSize: '16px', color: '#333' }}>
                    ₹1,500
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </CardGrid>
          <CardGrid maxWidth="lg">
            <Grid container spacing={4}>
              {/* More vase items */}
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ paddingRight: '8px', paddingLeft: '8px' }}>
                  <CardMedia
                    component="img"
                    sx={{
                      height: '300px',
                      width: '100%',
                      objectFit: 'cover',
                    }}
                    image="https://apisap.fabindia.com/medias/20143438-01.jpg?context=bWFzdGVyfGltYWdlc3w4NjQwMHxpbWFnZS9qcGVnfGFERmpMMmc0WVM4ME5qWTBNemd5TlRBNE1qTTVPQzh5TURFME16UXpPRjh3TVM1cWNHY3w3ZTg3MTg5NjQ5OTI1ODgwYzgyOWFhODczMmJhNTEzNzQzNjA5NTBiNTllZGFhYzBmMWU2NTVjYzY4ZjEyMzVh"
                    alt="Beige Ceramic Thar Painted Bud Vase"
                  />
                  <Typography>
                    <b>Beige Ceramic Thar Painted Bud Vase</b>
                  </Typography>
                  <Typography sx={{ fontSize: '16px', color: '#333' }}>
                    ₹750
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ paddingRight: '8px', paddingLeft: '8px' }}>
                  <CardMedia
                    component="img"
                    sx={{
                      height: '300px',
                      width: '100%',
                      objectFit: 'cover',
                    }}
                    image="https://apisap.fabindia.com/medias/20162091-01.jpg?context=bWFzdGVyfGltYWdlc3wxMTQ1NzB8aW1hZ2UvanBlZ3xhRGhpTDJnMFpTODBOalkwTXpnMU5qQTBPREUxT0M4eU1ERTJNakE1TVY4d01TNXFjR2N8NmMxNzNlNzBjMDBhMDM3ZTBhODFjZjA2NjQ1YjEzOGUxYThkZTg3NzkyZDI2MGE5ZTliMmMwMmQxN2IzMTJiNg"
                    alt="Blue Ceramic Neel Long Table Vase"
                  />
                  <Typography>
                    <b>Blue Ceramic Neel Long Table Vase</b>
                  </Typography>
                  <Typography sx={{ fontSize: '16px', color: '#333' }}>
                    ₹1,000
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ paddingRight: '8px', paddingLeft: '8px' }}>
                  <CardMedia
                    component="img"
                    sx={{
                      height: '300px',
                      width: '100%',
                      objectFit: 'cover',
                    }}
                    image="https://apisap.fabindia.com/medias/10735562-01.jpg?context=bWFzdGVyfGltYWdlc3wzNDU5OTJ8aW1hZ2UvanBlZ3xhRGMxTDJoaU5pODBOalkwTXpZME5qZzVNREF4TkM4eE1EY3pOVFUyTWw4d01TNXFjR2N8MzhhZWQ2OGVhNDY0NDRiMmJhZTQ2ZWViMDhhMTY5Y2RhNDc3NmI2NTk5ZjJlNWFmM2MwZWNiMjEyZDE4ODEzZA"
                    alt="Nabhraj Maaya Chselled Tall Vase"
                  />
                  <Typography>
                    <b>Nabhraj Maaya Chselled Tall Vase</b>
                  </Typography>
                  <Typography sx={{ fontSize: '16px', color: '#333' }}>
                    ₹1,800
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ paddingRight: '8px', paddingLeft: '8px' }}>
                  <CardMedia
                    component="img"
                    sx={{
                      height: '300px',
                      width: '100%',
                      objectFit: 'cover',
                    }}
                    image="https://cdn.pixelspray.io/v2/black-bread-289bfa/Zu3Ns5/wrkr/t.resize(h:0,w:0)/data/pottery-barn/30-may-2022/7910588_1.jpg"
                    alt="Terra cotta Speckled Vases"
                  />
                  <Typography>
                    <b>Terra cotta Speckled Vases</b>
                  </Typography>
                  <Typography sx={{ fontSize: '16px', color: '#333' }}>
                    ₹650
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ paddingRight: '8px', paddingLeft: '8px' }}>
                  <CardMedia
                    component="img"
                    sx={{
                      height: '300px',
                      width: '100%',
                      objectFit: 'cover',
                    }}
                    image="https://www.ellementry.com/cdn/shop/files/TCDEA3101_00.webp?v=1712213632"
                    alt="aamay terracotta vase - large"
                  />
                  <Typography>
                    <b>aamay terracotta vase - large</b>
                  </Typography>
                  <Typography sx={{ fontSize: '16px', color: '#333' }}>
                    ₹2,200
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ paddingRight: '8px', paddingLeft: '8px' }}>
                  <CardMedia
                    component="img"
                    sx={{
                      height: '300px',
                      width: '100%',
                      objectFit: 'cover',
                    }}
                    image="https://cdn.pixelspray.io/v2/black-bread-289bfa/Zu3Ns5/wrkr/t.resize(h:0,w:0)/data/pottery-barn/24-Aug-2023/9573971_1.jpg"
                    alt="FairFix Handcrafted Terracotta Ceramics"
                  />
                  <Typography>
                    <b>FairFix Handcrafted Terracotta Ceramics</b>
                  </Typography>
                  <Typography sx={{ fontSize: '16px', color: '#333' }}>
                    ₹1,400
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </CardGrid>
        </Container>
      </MainContent>
      <Footer>
        <Typography variant="body1" gutterBottom>
          © 2024 Your Company Name. All rights reserved.
        </Typography>
        <ContactInfo>
          <Typography variant="body2">123 Your Address, City, Country</Typography>
          <Typography variant="body2">Email: info@yourcompany.com</Typography>
          <Typography variant="body2">Phone: (123) 456-7890</Typography>
        </ContactInfo>
      </Footer>
    </div>
  );
};

export default Vase;
