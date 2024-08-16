import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import { Grid, CardMedia } from '@mui/material';

const HeroSection = styled('div')(({ theme }) => ({
  position: 'relative',
  height: '80vh',
  backgroundImage: 'url(https://mir-s3-cdn-cf.behance.net/project_modules/fs/567d3c201709981.6679c618e1c62.jpg)',
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

const Modular = () => {
  return (
    <div>
      <HeroSection>
        <HeroOverlay />
        <HeroText variant="h2">Cafe Interior Designs</HeroText>
      </HeroSection>

      <Container sx={{ py: 8 }} maxWidth="md">
        <Typography variant="h4" align="left" gutterBottom>
          Kafeterija | Cafe
        </Typography>
        <Typography align="left">
          cafe in Belgrade, Serbia | 50 sq.m.<br />
          Architects: Egor Bogomolov, Ruben Movsisian, Artem Lebedev<br />
          Visualization: Tatiana Kurochkina<br />
          Photo: Ilya Ivanov
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
                  image="https://mir-s3-cdn-cf.behance.net/project_modules/fs/f27f75201709981.6679c60068d99.jpg"
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
                  image="https://mir-s3-cdn-cf.behance.net/project_modules/fs/d6251a201709981.6679c618e251d.jpg"
                  alt="Modular Interiors"
                  
                />
                
              </Box>
              <br></br><br></br>
              <Box sx={{ align:'center',padding: '16px', marginRight: '16px', marginLeft: '16px' }}>
                <Typography>
                The first meeting, held in July 2023, kicked off the project. We were asked to maximize its vision of the ideal guest space. Analyzing the locations of the Kafeterija, we captured the spirit of the workshop, where each product is unique and the interiors emphasize craftsmanship and natural materials.
                </Typography>
              </Box><br></br><br></br>
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
                  image="https://mir-s3-cdn-cf.behance.net/project_modules/fs/e75fc0201709981.6679c60069524.jpg"
                  alt="Full Home Interior"
                />
              </Box>
              
            </Grid><br></br>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ paddingRight: '16px', paddingLeft: '16px', marginRight: '20px', marginLeft: '16px' }}>
                <CardMedia
                  component="img"
                  sx={{
                    height: '1050px',
                    width: '350%',
                    objectFit: 'cover',
                  }}
                  image="https://mir-s3-cdn-cf.behance.net/project_modules/fs/35f63e201709981.6679c618e3b13.jpg"
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
                  image="https://mir-s3-cdn-cf.behance.net/project_modules/fs/8d368e201709981.6679c602d1796.jpg"
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
                  image="https://mir-s3-cdn-cf.behance.net/project_modules/fs/27b268201709981.6679c60ac5d70.jpg"
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

export default Modular;
