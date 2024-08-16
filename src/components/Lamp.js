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

const Lamp = () => {
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
                    image="https://cdn.pixelspray.io/v2/black-bread-289bfa/Zu3Ns5/wrkr/t.resize(h:450,w:500)/data/pottery-barn/18012023/8643007_2.jpg"
                    alt="Joshua Handcrafted Ceramic"
                  />
                  <Typography>
                    <b>Unscented Filled Glass Votive Candles</b>
                  </Typography>
                  <Typography sx={{ fontSize: '16px', color: '#333' }}>
                    ₹700
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
                    image="https://cdn.pixelspray.io/v2/black-bread-289bfa/Zu3Ns5/wrkr/t.resize(h:0,w:0)/data/pottery-barn/23052022newimg/7910524_1.jpg"
                    alt="Willow Cachepot"
                  />
                  <Typography>
                    <b>Premium Flickering Flameless wax pillar</b>
                  </Typography>
                  <Typography sx={{ fontSize: '16px', color: '#333' }}>
                    ₹590
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
                    image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSHLcAZz13Kzyyja58aFNDhgdeSFHK18Eafpt2DQSSzhgWgJZtBtSS7oJxyIf7oPGEYq5rCFmVQGSyMVdJwO7Ucs11PVQOTrf8KwGD3p-ccSjV3ZwWxpRAjuQ&usqp=CAc"
                    alt="Halldale Terracotta Vase Collection"
                  />
                  <Typography>
                    <b>	
                    IRIS Shot Glass Scented Candle - Lavender</b>
                  </Typography>
                  <Typography sx={{ fontSize: '16px', color: '#333' }}>
                    ₹600
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
                    image="https://kashfnaturalistic.com/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-22-at-21.26.41_c755154f-e1698030993294.jpg"
                    alt="Beige Ceramic Thar Painted Bud Vase"
                  />
                  <Typography>
                    <b>RIPPED JAR CANDLE</b>
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
                    image="https://kashfnaturalistic.com/wp-content/uploads/2021/12/WhatsApp-Image-2023-10-18-at-17.18.56_2d755c81-570x760.jpg"
                    alt="Blue Ceramic Neel Long Table Vase"
                  />
                  <Typography>
                    <b>BOWL CANDLE</b>
                  </Typography><Typography sx={{ fontSize: '16px', color: '#333' }}>
                    ₹800
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
                    image="https://kashfnaturalistic.com/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-18-at-17.24.12_70db45d9-570x760.jpg"
                    alt="Nabhraj Maaya Chselled Tall Vase"
                  />
                  <Typography>
                    <b>CONCRETE CANDLE</b>
                  </Typography>
                  <Typography sx={{ fontSize: '16px', color: '#333' }}>
                    ₹600
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
                    image="https://kashfnaturalistic.com/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-22-at-21.27.05_7b15a959-570x760.jpg"
                    alt="Terra cotta Speckled Vases"
                  />
                  <Typography>
                    <b>LADOO CANDLE</b>
                  </Typography>
                  <Typography sx={{ fontSize: '16px', color: '#333' }}>
                    ₹1000
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
                    image="https://cdn.pixelspray.io/v2/black-bread-289bfa/Zu3Ns5/wrkr/t.resize(h:0,w:0)/data/pottery-barn/02062022lot5/7967660_1.jpg"
                    alt="aamay terracotta vase - large"
                  />
                  <Typography>
                    <b>Manor Round Glass & Iron Pendant</b>
                  </Typography>
                  <Typography sx={{ fontSize: '16px', color: '#333' }}>
                    ₹500
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
                    image="https://kashfnaturalistic.com/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-18-at-17.23.07_20d6f8b6-570x760.jpg"
                    alt="FairFix Handcrafted Terracotta Ceramics"
                  />
                  <Typography>
                    <b>COMBO PEARLS CANDLE</b>
                  </Typography><Typography sx={{ fontSize: '16px', color: '#333' }}>
                    ₹2,50
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

export default Lamp;
