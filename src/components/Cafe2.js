import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import { Grid, CardMedia } from '@mui/material';

const HeroSection = styled('div')(({ theme }) => ({
  position: 'relative',
  height: '80vh',
  backgroundImage: 'url(https://mir-s3-cdn-cf.behance.net/project_modules/fs/31a10a202365327.6684fdc2ee543.jpg)',
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

const Cafe1 = () => {
  return (
    <div>
      <HeroSection>
        <HeroOverlay />
        <HeroText variant="h2">Cafe Interior Designs</HeroText>
      </HeroSection>

      <Container sx={{ py: 8 }} maxWidth="md">
       
        <Typography align="left">
        It's a two-level structure: the main hall on the first floor, and a corridor, restroom, and technical room on the -1 level. In the main seating area, there is plenty of light coming in from windows on three sides, visually expanding the space.
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
                  image="https://mir-s3-cdn-cf.behance.net/project_modules/disp/774899202365327.66855ea5c3bbc.jpg"
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
                  image="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/cd4640202365327.66855ea213e52.jpg"
                  alt="Modular Interiors"
                  
                />
                
              </Box>
              <br></br><br></br>              
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
                  image="https://mir-s3-cdn-cf.behance.net/project_modules/disp/4b03d5202365327.66855ea5c41f7.jpg"
                  alt="Full Home Interior"
                />
              </Box>
              
            </Grid><br></br>
            <Typography>It's a two-level structure: the main hall on the first floor, and a corridor, restroom, and 
                technical room on the -1 level. In the main seating area, there is plenty of light coming in from windows on three sides, 
                visually expanding the space.</Typography>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ paddingRight: '16px', paddingLeft: '16px', marginRight: '20px', marginLeft: '16px' }}>
                <CardMedia
                  component="img"
                  sx={{
                    height: '950px',
                    width: '400%',
                    objectFit: 'cover',
                  }}
                  image="https://mir-s3-cdn-cf.behance.net/project_modules/fs/bc28c1202365327.6684fdc2efc9e.png"
                  alt="Luxury"
                />
              </Box>
            </Grid><br></br><br></br>
            <Typography paddingLeft={"150px"} variant='h4'>PLAN</Typography>
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
                  image="https://mir-s3-cdn-cf.behance.net/project_modules/disp/b9a900202365327.66855eae55459.jpg"
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
                  image="https://mir-s3-cdn-cf.behance.net/project_modules/disp/149379202365327.66855eb25cd11.jpg"
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

export default Cafe1;
