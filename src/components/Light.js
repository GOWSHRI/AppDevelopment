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

const Light = () => {
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
                    image="https://cdn.pixelspray.io/v2/black-bread-289bfa/Zu3Ns5/wrkr/t.resize(h:1240,w:1400)/data/pottery-barn/30-may-2022/7910873_4.jpg"
                    alt="Joshua Handcrafted Ceramic"
                  />
                  <Typography>
                    <b>Eclectic Mercury Votive Holders</b>
                  </Typography>
                  <Typography sx={{ fontSize: '16px', color: '#333' }}>
                    ₹3,900
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
                    image="https://cdn.pixelspray.io/v2/black-bread-289bfa/Zu3Ns5/wrkr/t.resize(h:0,w:0)/data/pottery-barn/23052022newimg/7978082_1.jpg"
                    alt="Willow Cachepot"
                  />
                  <Typography>
                    <b>Atticus Metal Floor Lamp</b>
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
                    image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTWGdaGwkK12i1CmHhfTUZpjJMzO_T1FAMjgU6R2Kc5LJu8vPflme3yBUQbwppiMyHkL8_ujm3eDEhLsCbXZIEjy7vbvfe8i9ZSLexB4To&usqp=CAE"
                    alt="Halldale Terracotta Vase Collection"
                  />
                  <Typography>
                    <b>	
                    WHITE (ROUND) DEER HEAD</b>
                  </Typography>
                  <Typography sx={{ fontSize: '16px', color: '#333' }}>
                    ₹3,200
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
                    image="https://images.meesho.com/images/products/362753384/oxed6_512.webp"
                    alt="Beige Ceramic Thar Painted Bud Vase"
                  />
                  <Typography>
                    <b>ANTIQUE DESIGN Diamond Metal Cag</b>
                  </Typography>
                  <Typography sx={{ fontSize: '16px', color: '#333' }}>
                    ₹2,500
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
                    image="https://cdn.pixelspray.io/v2/black-bread-289bfa/Zu3Ns5/wrkr/t.resize(h:450,w:500)/data/pottery-barn/02062022lot5/7967656_2.jpg"
                    alt="Blue Ceramic Neel Long Table Vase"
                  />
                  <Typography>
                    <b>penni Recycled Glass Chandlier</b>
                  </Typography>
                  <Typography sx={{ fontSize: '16px', color: '#333' }}>
                    ₹2,900
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
                    image="https://cdn.pixelspray.io/v2/black-bread-289bfa/Zu3Ns5/wrkr/t.resize(h:450,w:500)/data/pottery-barn/02062022lot5/7967703_2.jpg"
                    alt="Nabhraj Maaya Chselled Tall Vase"
                  />
                  <Typography>
                    <b>Easton Forged-Iron 5-Arm Chandelier</b>
                  </Typography>
                  <Typography sx={{ fontSize: '16px', color: '#333' }}>
                    ₹4,200
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
                    image="https://cdn.pixelspray.io/v2/black-bread-289bfa/Zu3Ns5/wrkr/t.resize(h:450,w:500)/data/pottery-barn/26022024img/10001689_2.jpg"
                    alt="Terra cotta Speckled Vases"
                  />
                  <Typography>
                    <b>Windham Alabaster Bowl Pendant</b>
                  </Typography>
                  <Typography sx={{ fontSize: '16px', color: '#333' }}>
                    ₹3,200
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
                    image="https://cdn.pixelspray.io/v2/black-bread-289bfa/Zu3Ns5/wrkr/t.resize(h:0,w:0)/data/pottery-barn/24042024/10302347_1.jpg"
                    alt="FairFix Handcrafted Terracotta Ceramics"
                  />
                  <Typography>
                    <b>Remington Iron Lantern Pendant</b>
                  </Typography>
                  <Typography sx={{ fontSize: '16px', color: '#333' }}>
                    ₹2,700
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

export default Light;
