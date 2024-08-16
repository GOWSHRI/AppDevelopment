import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import { Grid, CardMedia } from '@mui/material';

const HeroSection = styled('div')(({ theme }) => ({
  position: 'relative',
  height: '80vh',
  backgroundImage: 'url(https://mir-s3-cdn-cf.behance.net/project_modules/fs/4ca8d1202994943.668f80198f4a5.jpg)',
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
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
}));

const TextContainer = styled(Box)(({ theme }) => ({
  maxWidth: '800px',
  margin: '0 auto',
}));

const MarqueeSection = styled(Box)(({ theme }) => ({
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  position: 'relative',
  backgroundColor: 'white',
  padding: theme.spacing(4),
}));

const MarqueeContent = styled(Box)(({ theme }) => ({
  display: 'inline-block',
  paddingLeft: '100%',
  animation: 'marquee 15s linear infinite',
  '& img': {
    height: '200px',
    margin: theme.spacing(1),
  },
  '@keyframes marquee': {
    '0%': { transform: 'translateX(100%)' },
    '100%': { transform: 'translateX(-100%)' },
  },
}));

const Product = () => {
  return (
    <div>
      <HeroSection>
        <HeroOverlay />
        <HeroText variant="h2">Cafe Interior Designs</HeroText>
      </HeroSection>

      <Container sx={{ py: 8 }} maxWidth="md">
        <TextContainer>
          <Typography align="left">
            We will leave the ceiling open, with visible communication lines painted green. This is not just a technical but also a conceptual solution: the green ceiling highlights the oasis concept. Pendant lights shaped like spheres will mimic morning dew or soap bubbles, adding lightness and playfulness to the space. The sandy-hued natural wood flooring will give you the feeling of walking on a forest path.​​​​​​​
          </Typography>
        </TextContainer>

        <CardGrid maxWidth="lg">
          <Grid container spacing={7}>
            <Grid item xs={12} sm={6} md={7}>
              <Box sx={{ paddingRight: '20px', paddingLeft: '16px', marginRight: '30px', marginLeft: '-250px' }}>
                <CardMedia
                  component="img"
                  sx={{ height: '300px', width: '100%', objectFit: 'cover' }}
                  image="https://liquidesign.co.uk/wp-content/uploads/2023/05/A7R1035-2048x1152.jpg"
                  alt="Modular Interiors"
                />
              </Box>
              <br /><br />
              <Box sx={{ paddingRight: '16px', paddingLeft: '16px', marginRight: '30px', marginLeft: '-250px' }}>
                <CardMedia
                  component="img"
                  sx={{ height: '600px', width: '200%', objectFit: 'cover' }}
                  image="https://liquidesign.co.uk/wp-content/uploads/2023/05/A7R0895-2048x1152.jpg"
                  alt="Modular Interiors"
                />
              </Box>
              <br /><br />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ paddingRight: '16px', paddingLeft: '16px', marginRight: '20px', marginLeft: '-110px' }}>
                <CardMedia
                  component="img"
                  sx={{ height: '300px', width: '200%', objectFit: 'cover' }}
                  image="https://liquidesign.co.uk/wp-content/uploads/2023/05/A7R0895-2048x1152.jpg"
                  alt="Luxury"
                />
              </Box>
            </Grid>
            <br /><br />
          </Grid>
        </CardGrid>
        <CardGrid maxWidth="lg">
          <Grid container spacing={7}>
            <Grid item xs={12} sm={6} md={7}>
              <Box sx={{ paddingRight: '20px', paddingLeft: '16px', marginRight: '30px', marginLeft: '-250px' }}>
                <CardMedia
                  component="img"
                  sx={{ height: '600px', width: '400%', objectFit: 'cover' }}
                  image="https://liquidesign.co.uk/wp-content/uploads/2023/05/A7R1005-2048x1152.jpg"
                  alt="Modular Interiors"
                />
              </Box>
            </Grid>
          </Grid>
        </CardGrid>
        
        <br />
        <TextContainer>
          <Typography><b>THE INTERIOR DESIGNING</b></Typography><br /><br /><br />

          <Typography align="left" paragraph>
            "An open plan restaurant with Bali influences woven into the interior design. The natural light and open space are complemented by the large woven shades of the pendant lighting. Natural woods have also been used throughout the interior of the interior design for such things as cupboard doors, shelves, screens, and the counter and table tops. Most notably, wood is used to great effect on the ceiling, both in the form of a tongue and grooved diagonal pattern above the cocktail bar and as large beams traversing the space elsewhere. The central bar is a bespoke design; long and serpentine. Its front is clad in vertical subway tiles adding a heritage look to the whole bar design."
          </Typography>
        </TextContainer>

        <CardGrid maxWidth="lg">
          <Grid container spacing={7}>
            <Grid item xs={12} sm={6} md={7}>
              <Box sx={{ paddingRight: '20px', paddingLeft: '16px', marginRight: '30px', marginLeft: '-250px' }}>
                <CardMedia
                  component="img"
                  sx={{ height: '300px', width: '100%', objectFit: 'cover' }}
                  image="https://liquidesign.co.uk/wp-content/uploads/2023/05/Farm-Cup-Echo-Park-FC-7-DAY-1024x576.jpg"
                  alt="Modular Interiors"
                />
              </Box>
              <br /><br />
              <Box sx={{ paddingRight: '16px', paddingLeft: '16px', marginRight: '30px', marginLeft: '-250px' }}>
                <CardMedia
                  component="img"
                  sx={{ height: '600px', width: '200%', objectFit: 'cover' }}
                  image="https://liquidesign.co.uk/wp-content/uploads/2023/05/A7R0895-2048x1152.jpg"
                  alt="Modular Interiors"
                />
              </Box>
              <br /><br />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ paddingRight: '16px', paddingLeft: '16px', marginRight: '20px', marginLeft: '-110px' }}>
                <CardMedia
                  component="img"
                  sx={{ height: '300px', width: '200%', objectFit: 'cover' }}
                  image="https://liquidesign.co.uk/wp-content/uploads/2023/05/Farm-Cup-Echo-Park-FC-14-DAY-1024x576.jpg"
                  alt="Luxury"
                />
              </Box>
            </Grid>
            <br /><br />
          </Grid>
        </CardGrid>
        <br />
        <TextContainer>
          <Typography variant="h4">The exterior design.</Typography><br />
          <Typography align="left" paragraph>
            Outside is a courtyard enclosed by a sloping wall in yellow tiles forming a bright background for the abundance of greenery 
            that surrounds the seating area. The canopy overhead is formed of triangular ‘sails’ in a natural fabric that create visual 
            interest as well as offering shade for diners. The structure is further decorated with festoon lights that help to create a 
            cosy ambience to the space in the evenings. Once again natural wood is used for the slats of the screens around the gate onto 
            the street. Overall, the cafe design is greatly enhanced by the outside space which is like a mini oasis serving food, coffee 
            and cocktails to the inhabitants of this fascinating area of Los Angeles.
          </Typography>
        </TextContainer><br />
        <CardGrid maxWidth="lg">
          <Grid container spacing={7}>
            <Grid item xs={12} sm={6} md={7}>
              <Box sx={{ paddingRight: '20px', paddingLeft: '16px', marginRight: '30px', marginLeft: '-250px' }}>
                <CardMedia
                  component="img"
                  sx={{ height: '300px', width: '100%', objectFit: 'cover' }}
                  image="https://liquidesign.co.uk/wp-content/uploads/2023/05/A7R1136-1024x576.jpg"
                  alt="Modular Interiors"
                />
              </Box>
              <br /><br />
              <Box sx={{ paddingRight: '16px', paddingLeft: '16px', marginRight: '30px', marginLeft: '-250px' }}>
                <CardMedia
                  component="img"
                  sx={{ height: '600px', width: '200%', objectFit: 'cover' }}
                  image="https://liquidesign.co.uk/wp-content/uploads/2023/05/A7R1106-2048x1152.jpg"
                  alt="Modular Interiors"
                />
              </Box>
              <br /><br />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ paddingRight: '16px', paddingLeft: '16px', marginRight: '20px', marginLeft: '-110px' }}>
                <CardMedia
                  component="img"
                  sx={{ height: '300px', width: '200%', objectFit: 'cover' }}
                  image="https://liquidesign.co.uk/wp-content/uploads/2023/05/A7R1141-1024x576.jpg"
                  alt="Luxury"
                />
              </Box>
            </Grid>
            <br /><br />
          </Grid>
        </CardGrid>

        <Box sx={{ backgroundColor: '#333', color: '#fff', padding: '3rem', textAlign: 'center' }}>
          <Typography variant="h3">
            Services provided.
          </Typography><br /><br />
          <Typography>
            Restaurant Interior Design | Coffee Shop Interior Design | Cocktail Bar Interior Design | Cafe Interior Design | CGI Visualisations | Specifications | Design Intent Drawings | FF&E Procurement
          </Typography>
        </Box><br /><br />

        <TextContainer>
          <Typography variant="h3">The Other Projects.</Typography><br />
        </TextContainer>

        {/* Marquee Section */}
        <MarqueeSection>
          <MarqueeContent>
            <img src="https://liquidesign.co.uk/wp-content/uploads/2023/05/A7R1035-2048x1152.jpg" alt="Project 1" />
            <img src="https://liquidesign.co.uk/wp-content/uploads/2023/05/A7R0895-2048x1152.jpg" alt="Project 2" />
            <img src="https://liquidesign.co.uk/wp-content/uploads/2023/05/A7R1005-2048x1152.jpg" alt="Project 3" />
            <img src="https://liquidesign.co.uk/wp-content/uploads/2023/05/Farm-Cup-Echo-Park-FC-7-DAY-1024x576.jpg" alt="Project 4" />
            {/* Add more images as needed */}
          </MarqueeContent>
        </MarqueeSection>

      </Container>
    </div>
  );
}

export default Product;
