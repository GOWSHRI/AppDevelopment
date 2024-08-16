import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import { Grid, CardMedia } from '@mui/material';

const HeroSection = styled('div')(({ theme }) => ({
  position: 'relative',
  height: '80vh',
  backgroundImage: 'url(https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/92e472186510615.664743d228612.jpg)',
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

const Cafe4 = () => {
  return (
    <div>
      <HeroSection>
        <HeroOverlay />
        <HeroText variant="h2">Cafe Interior Designs</HeroText>
      </HeroSection>

      <Container sx={{ py: 8 }} maxWidth="md">
        <Typography align="left">
        We will leave the ceiling open, with visible communication lines painted green. This is not just a technical but also a conceptual solution: the green ceiling highlights the oasis concept. Pendant lights shaped like spheres will mimic morning dew or soap bubbles, adding lightness and playfulness to the space. The sandy-hued natural wood flooring will give you the feeling of walking on a forest path.​​​​​​​
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
                  image="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/826b9a186510615.6647462ad0e5c.jpg"
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
                  image="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/cc0a7b186510615.664757fab2e63.jpg"
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
                  image="https://mir-s3-cdn-cf.behance.net/project_modules/disp/65f977186510615.6698f3fb95e69.jpg"
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
                  image="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/92e472186510615.664743d228612.jpg"
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
                  image="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/1052ad186510615.664c74f6b5872.jpg"
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

export default Cafe4;
