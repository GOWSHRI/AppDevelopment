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

const Smalldecor = () => {
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
                    image="https://thepurplepony.com/cdn/shop/files/IMG_0039_bccf7f3e-ba7b-4766-932f-07f1aef41818_1800x1800.jpg?v=1718427403"
                    alt="Joshua Handcrafted Ceramic"
                  />
                  <Typography>
                    <b>Murano Glass Table Decor - Cherry Apple</b>
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
                    image="https://www.thedecorcircle.com/cdn/shop/products/26267026-271c-448f-b264-3b1445ce946d.jpg?v=1663510438&width=600"
                    alt="Willow Cachepot"
                  />
                  <Typography>
                    <b>Blue Crystal Tree of Life</b>
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
                    image="https://www.thedecorcircle.com/cdn/shop/products/the-decor-circle-sculptures-luxury-crystal-meraki-fish-decor-sculpture-tall-29054857609405.jpg?v=1628326691&width=600"
                    alt="Halldale Terracotta Vase Collection"
                  />
                  <Typography>
                    <b>	
                    Luxury Crystal Meraki Fish sculpture (Tall)</b>
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
                    image="https://www.thedecorcircle.com/cdn/shop/products/the-decor-circle-sculptures-animal-decor-crystal-brass-sculpture-29598386782397.jpg?v=1628234780&width=600"
                    alt="Beige Ceramic Thar Painted Bud Vase"
                  />
                  <Typography>
                    <b>Animal Decor Crystal Brass sculpture</b>
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
                    image="https://media-uk.landmarkshops.in/cdn-cgi/image/h=750,w=750,q=85,fit=cover/homecentre/1000011374829-1000011374828_01-2100.jpg"
                    alt="Blue Ceramic Neel Long Table Vase"
                  />
                  <Typography>
                    <b>Corsica Mystic India Set of 2 Metal Flamingo Figurine T-Light Holders</b>
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
                    image="https://nestasia.in/cdn/shop/files/ContemporaryNordicShowpiece_7.jpg?v=1694851941&width=600"
                    alt="Nabhraj Maaya Chselled Tall Vase"
                  />
                  <Typography>
                    <b>Contemporary Nordic Showpiece</b>
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
                    image="https://nestasia.in/cdn/shop/products/IMG_74231.jpg?v=1669714934&width=600"
                    alt="Terra cotta Speckled Vases"
                  />
                  <Typography>
                    <b>Yoga Showpiece Meditation</b>
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
                    image="https://nestasia.in/cdn/shop/products/IMG_0514.jpg?v=1648124820&width=600"
                    alt="aamay terracotta vase - large"
                  />
                  <Typography>
                    <b>Winsome Figurine With Balloons</b>
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
                    image="https://nestasia.in/cdn/shop/products/DSC_0279_c745861a-7ad5-4c53-a977-6644049acc32.jpg?v=1648534310&width=600"
                    alt="FairFix Handcrafted Terracotta Ceramics"
                  />
                  <Typography>
                    <b>Bunny Fairy Vase</b>
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

export default Smalldecor;
