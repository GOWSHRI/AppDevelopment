import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import { Grid, CardMedia } from '@mui/material';

const HeroSection = styled('div')(({ theme }) => ({
  position: 'relative',
  height: '80vh',
  backgroundImage: 'url(https://mir-s3-cdn-cf.behance.net/project_modules/fs/312ae2183563451.654227ce6d9ce.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#fff',
  textAlign: 'center',
  padding: theme.spacing(4),
}));

const HeroOverlay = styled('div')({
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
});

const HeroText = styled(Typography)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  fontWeight: 'bold',
  fontSize: '2.5rem',
}));

const CardGrid = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
}));

const Cafe5 = () => {
  return (
    <div>
      <HeroSection>
        <HeroOverlay />
        <HeroText variant="h2">Cafe Interior Designs</HeroText>
      </HeroSection>

      <Container sx={{ py: 8 }} maxWidth="md">
        <Typography align="left">
        Broteria is a modern bakery located in the residential complex Rodos in Odesa. It's a place where it's nice to stop for fresh pastries and coffee during a stroll to the sea.
        </Typography>
        <CardGrid maxWidth="lg">
          <Grid container spacing={7}>
            <Grid item xs={12} sm={6} md={7}>
              <Box sx={{ paddingRight: '20px', paddingLeft: '16px', marginRight: '30px', marginLeft: '-250px' }}>
                <CardMedia
                  component="img"
                  sx={{
                    height: '950px',
                    width: '100%',
                    objectFit: 'cover',
                  }}
                  image="https://mir-s3-cdn-cf.behance.net/project_modules/fs/130f59183563451.654227ce6cc87.jpg"
                  alt="Modular Interiors"
                />
              </Box>
              <br></br>
              <Box sx={{ paddingRight: '16px', paddingLeft: '16px', marginRight: '30px', marginLeft: '-250px' }}>

                <CardMedia
                  component="img"
                  sx={{
                    height: '950px',
                    width: '200%',
                    objectFit: 'cover',
                  }}
                  image="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/81e12a183563451.65424830c9fde.jpg"
                  alt="Modular Interiors"
                  
                />
                
              </Box>
              <br></br><br></br>              
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ paddingRight: '16px', paddingLeft: '16px', marginRight: '20px', marginLeft: '-110px' }}>
                <CardMedia
                  component="img"
                  sx={{
                    height: '950px',
                    width: '400%',
                    objectFit: 'cover',
                  }}
                  image="https://mir-s3-cdn-cf.behance.net/project_modules/disp/943a08183563451.654227c698ba1.jpg"
                  alt="Luxury"
                />
              </Box>
            </Grid><br></br><br></br>
            
          </Grid>
        </CardGrid>
        <CardGrid maxWidth="lg">
          <Grid container spacing={7}>
            <Grid item xs={12} sm={6} md={7}>
              <Box sx={{ paddingRight: '20px', paddingLeft: '16px', marginRight: '30px', marginLeft: '-250px' }}>
                <CardMedia
                  component="img"
                  sx={{
                    height: '950px',
                    width: '100%',
                    objectFit: 'cover',
                  }}
                  image="https://mir-s3-cdn-cf.behance.net/project_modules/disp/c5c086183563451.654227c697f65.jpg"
                  alt="Modular Interiors"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ paddingRight: '16px', paddingLeft: '16px', marginRight: '150px', marginLeft: '-110px' }}>
                <CardMedia
                  component="img"
                  sx={{
                    height: '950px',
                    width: '500%',
                    objectFit: 'cover',
                  }}
                  image="https://mir-s3-cdn-cf.behance.net/project_modules/disp/429e8a183563451.654227c84bf6c.jpg"
                  alt="Full Home Interior"
                />
              </Box>
              
            </Grid>
            
            
          </Grid>
        </CardGrid>
      </Container>
    </div>
  );
};

export default Cafe5;
