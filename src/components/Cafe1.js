import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import { Grid, CardMedia } from '@mui/material';

const HeroSection = styled('div')(({ theme }) => ({
  position: 'relative',
  height: '80vh',
  backgroundImage: 'url(https://mir-s3-cdn-cf.behance.net/project_modules/fs/67ef02200797563.66704d8070a9f.jpg)',
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
        <Typography variant="h4" align="left" gutterBottom>
        Eggselent | Breakfast cafe
        </Typography><br></br>
        <Typography align="left">
        2024 | 117,85 sq.m.<br></br>
        Architects: Polina Onischuk, Alexandra Zemtsova, Angelina Gorelova, Leonid Sobolev<br></br>
        Visualization: Antonina Polevaya<br></br>
        Photo: Dmitrii Suvorov
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
                  image="https://mir-s3-cdn-cf.behance.net/project_modules/fs/ad7c8d200797563.66704d652ac40.jpg"
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
                  image="https://mir-s3-cdn-cf.behance.net/project_modules/fs/943e92200797563.66704d8071c91.jpg"
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
                  image="https://mir-s3-cdn-cf.behance.net/project_modules/fs/372d3b200797563.66704d652a380.jpg"
                  alt="Full Home Interior"
                />
              </Box>
              
            </Grid><br></br>
           
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ paddingRight: '16px', paddingLeft: '16px', marginRight: '20px', marginLeft: '16px' }}>
                <CardMedia
                  component="img"
                  sx={{
                    height: '950px',
                    width: '400%',
                    objectFit: 'cover',
                  }}
                  image="https://mir-s3-cdn-cf.behance.net/project_modules/fs/fd8b50200797563.66704d8072abd.png"
                  alt="Luxury"
                />
              </Box>
            </Grid>
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
                  image="https://mir-s3-cdn-cf.behance.net/project_modules/disp/87d13e200797563.66704d67be4aa.jpg"
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
                  image="https://mir-s3-cdn-cf.behance.net/project_modules/disp/83a914200797563.66704d67becba.jpg"
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
