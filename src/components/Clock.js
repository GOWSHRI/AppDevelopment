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

const Clock = () => {
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
                    image="https://ik.imagekit.io/2xkwa8s1i/img/decor/wall%20clock/AshBricks/b.jpg"
                    alt="Joshua Handcrafted Ceramic"
                  />
                  <Typography>
                    <b>
Ash Bricks Wall Clock</b>
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
                    image="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTdlTi934gmmMCYTvVr0-bZOvT5nOk8iFkxQ6gxLLA9NH8zI-G3yHpTx_f_SigtVr1Es8D_dxxpMY1DIKGqqFSSXVPMqS-qQBqmTjgdZTnU3x_2CyI6_ssn&usqp=CAE"
                    alt="Willow Cachepot"
                  />
                  <Typography>
                    <b>	
                    Glaceon Large Wall Clock Creative Resin Ginkgo </b>
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
                    image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQsAREmP0Yrko0lm5p0HlENN_FlLUm0NGodkwlvVGkl-A-SRWTlCmoM_8lrMWZJCEo9LStYBAJF_fRW5rOBsc2-OT0LBnnxRXoDUw2NblQ&usqp=CAE"
                    alt="Halldale Terracotta Vase Collection"
                  />
                  <Typography>
                    <b>	
                   	Floral Resin Wall Clock</b>
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
                    image="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRxBazqAvTpmvPd3oagwzYwbSReNZSAqnYZ2rU4DZt5G12Xzys8xKiX6MllZsKfpYWYiN_6zouG7eRT-l6UIpMqXX-euIpGnc_Tb-aL3bDzLOG3jIIl_M-o_Q&usqp=CAE"
                    alt="Beige Ceramic Thar Painted Bud Vase"
                  />
                  <Typography>
                    <b>OLIVE TREE</b>
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
                    image="https://modernquests.com/cdn/shop/files/karlsson-netherlands-modern-cuckoo-pendulum-wall-clock-jungle-green-6.jpg?v=1690044990&width=800"
                    alt="Blue Ceramic Neel Long Table Vase"
                  />
                  <Typography>
                    <b>Modern Cuckoo Pendulum Wall Clock - Jungle Green</b>
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
                    image="https://westattic.com/cdn/shop/files/RoundandSleekMetalWallClock_4.jpg?v=1704783701&width=1200"
                    alt="Nabhraj Maaya Chselled Tall Vase"
                  />
                  <Typography>
                    <b>Round and Sleek Metal Wall Clock</b>
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
                    image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQj_dCVF47Urz4erC6-FQ_offFpXMJ-ImlWSCIYJ1_djyFfYnZFhhEZWQPKi82fDnfwBKdqi8VmG2a1gZ52X5nLcqJLRXm5uCopC4sv-1c_&usqp=CAE"
                    alt="Terra cotta Speckled Vases"
                  />
                  <Typography>
                    <b>MDF And Acrylic Analog Mandala Traditional Wall Clock</b>
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
                    image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcREhMXpw7OULOqIfLfg1t25-0HzCvZfRXzcf2ENlyHE4zT3piBDaP320ZZ0ibjmz_F0FPgVBavPF1IczB-gCcNUqFCKvyRF3QBvBRp8JEpUatxMz9TzYxNpqA&usqp=CAE"
                    alt="aamay terracotta vase - large"
                  />
                  <Typography>
                    <b>Green Waves Acrylic Wall Clock</b>
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
                    image="https://ii1.pepperfry.com/media/catalog/product/g/a/1600x1760/gabriel-engineered-wood-black-wall-clock-gabriel-engineered-wood-black-wall-clock-ovtbbp.jpg"
                    alt="FairFix Handcrafted Terracotta Ceramics"
                  />
                  <Typography>
                    <b>Gabriel Engineered Wood Black Wall Clock</b>
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

export default Clock;
