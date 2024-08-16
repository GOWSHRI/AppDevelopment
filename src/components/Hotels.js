import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Box, CardMedia, Menu, MenuItem, colors } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

const Root = styled('div')(({ theme }) => ({
  flexGrow: 1,
}));

const HeroContent = styled('div')(({ theme }) => ({
  position: 'relative',
  color: 'white',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: 'url(https://ansainteriors.com/wp-content/uploads/2022/02/luxury-interiors-ansa3.webp)',
  padding: theme.spacing(0, 0, 0),
  height: '80vh',
}));

const HeroOverlay = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  backgroundColor: 'rgba(0,0,0,.3)',
}));

const CardGrid = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
}));

const CardContent = styled('div')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(2),
}));

const Section = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
}));

const ImageTextOverlay = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '500px', // Adjust height as needed
}));

const TextOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2),
}));

const Hotels = () => {
  const [anchorElDesignIdeas, setAnchorElDesignIdeas] = useState(null);
  const [anchorElMagazines, setAnchorElMagazines] = useState(null);
  const [anchorElLivespaceTv, setAnchorElLivespaceTv] = useState(null);
  const [anchorElCities, setAnchorElCities] = useState(null);

  const handleMenuOpen = (event, setAnchorEl) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (setAnchorEl) => {
    setAnchorEl(null);
  };

  return (
    <Root>
      <AppBar position="static" sx={{ background: "#006064" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 0, paddingLeft: "50px", textAlign: 'left', fontFamily: "Helvetica Neue" }}>
            CozyCorners
          </Typography>

          <Typography
            variant="h6"
            sx={{ flexGrow: 0, paddingLeft: "100px", textAlign: 'left', fontFamily: "Helvetica Neue", cursor: 'pointer' }}
            onClick={(event) => handleMenuOpen(event, setAnchorElDesignIdeas)}
          >
            Home
          </Typography>
          <Menu
            anchorEl={anchorElDesignIdeas}
            open={Boolean(anchorElDesignIdeas)}
            onClose={() => handleMenuClose(setAnchorElDesignIdeas)}
          >
            <MenuItem onClick={() => handleMenuClose(setAnchorElDesignIdeas)}>
              <Link to="/customized-design" style={{ textDecoration: 'none', color: 'inherit' }}>Customized Design</Link>
            </MenuItem>
            <MenuItem onClick={() => handleMenuClose(setAnchorElDesignIdeas)}>Design and Build</MenuItem>
          </Menu>

          <Typography
            variant="h6"
            sx={{ flexGrow: 0, paddingLeft: "50px", textAlign: 'left', fontFamily: "Helvetica Neue", cursor: 'pointer' }}
            onClick={(event) => handleMenuOpen(event, setAnchorElMagazines)}
          >
            Services
          </Typography>
          <Menu
            anchorEl={anchorElMagazines}
            open={Boolean(anchorElMagazines)}
            onClose={() => handleMenuClose(setAnchorElMagazines)}
          >
            <Link to="/service" style={{color: 'black', textDecoration: 'none' }}>
              <MenuItem onClick={() => handleMenuClose(setAnchorElMagazines)}>
                Interior Design Consultancy
              </MenuItem>
            </Link>
            <MenuItem onClick={() => handleMenuClose(setAnchorElMagazines)}>Residential Interior Design</MenuItem>
            <MenuItem onClick={() => handleMenuClose(setAnchorElMagazines)}>Commercial Interior Design</MenuItem>
            <Link to="/fur" style={{ textDecoration: 'none', color: 'black' }}> 
              <MenuItem onClick={() => handleMenuClose(setAnchorElMagazines)}>Furniture Design</MenuItem>
            </Link>
          </Menu>

          <Typography
            variant="h6"
            sx={{ flexGrow: 0, paddingLeft: "50px", textAlign: 'left', fontFamily: "Helvetica Neue", cursor: 'pointer' }}
            onClick={(event) => handleMenuOpen(event, setAnchorElLivespaceTv)}
          >
            <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>
              About us
            </Link>
          </Typography>

          <Typography
            variant="h6"
            sx={{ flexGrow: 0, paddingLeft: "50px", textAlign: 'left', fontFamily: "Helvetica Neue", cursor: 'pointer' }}
            onClick={(event) => handleMenuOpen(event, setAnchorElCities)}
          >
            <Link to="/con" style={{ color: '#fff', textDecoration: 'none' }}>
              Contact us
            </Link>
          </Typography>
          <Typography
            variant="h6"
            sx={{ flexGrow: 0, paddingLeft: "50px", textAlign: 'left', fontFamily: "Helvetica Neue", cursor: 'pointer' }}
            onClick={(event) => handleMenuOpen(event, setAnchorElCities)}
          >
            Our portfolio
          </Typography>
          <Menu
            anchorEl={anchorElCities}
            open={Boolean(anchorElCities)}
            onClose={() => handleMenuClose(setAnchorElCities)}
          >
            <MenuItem onClick={() => handleMenuClose(setAnchorElCities)}>City 1</MenuItem>
            <MenuItem onClick={() => handleMenuClose(setAnchorElCities)}>City 2</MenuItem>
            <MenuItem onClick={() => handleMenuClose(setAnchorElCities)}>City 3</MenuItem>
          </Menu>

          <Button color="error" sx={{ backgroundColor: '#006064', paddingLeft: "200px", color: 'white', '&:hover': { backgroundColor: '#C70039' } }}>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>LOGOUT</Link>
          </Button>
        </Toolbar>
      </AppBar>
      <main>
        <HeroContent>
          <HeroOverlay />
          <Container maxWidth="l" sx={{ position: 'relative', zIndex: 1 }}>
            <Typography variant="h2" align="center" gutterBottom>
              Welcome to CozyCorners
            </Typography>
            <Typography variant="h5" align="center" paragraph>
              Happiness looks good on you, especially in our hotel.
            </Typography>
          </Container>
        </HeroContent>

        {/* Features Section */}
        <CardGrid maxWidth="lg">
          <Grid container spacing={7}>
            <Grid item xs={12} sm={6} md={7}>
              <ImageTextOverlay>
                <CardMedia
                  component="img"
                  sx={{
                    height: '500px',
                    width: '100%',
                    objectFit: 'cover',
                  }}
                  image="https://ansainteriors.com/wp-content/uploads/2021/12/luxury-interior-designers-in-delhi-ncr-.jpg"
                  alt="Modular Interiors"
                />
                <TextOverlay>
                  <Typography variant="h5">
                    Interior Designing Consultancy
                  </Typography>
                </TextOverlay>
              </ImageTextOverlay>
            </Grid>
            <Grid item xs={12} sm={6} md={5}>
              <ImageTextOverlay>
                <CardMedia
                  component="img"
                  sx={{
                    height: '500px',
                    width: '100%',
                    objectFit: 'cover',
                  }}
                  image="https://ansainteriors.com/wp-content/uploads/2020/06/Building-B-1.jpg"
                  alt="Full Home Interior"
                />
                <TextOverlay>
                  <Typography variant="h5">
                    Architectural Design Consultancy
                  </Typography>
                </TextOverlay>
              </ImageTextOverlay>
            </Grid>
          </Grid>
        </CardGrid>

        {/* Additional Sections */}
        <CardGrid maxWidth="lg">
          <Grid container spacing={7} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ padding: '16px' }}>
                <Typography variant="h4" gutterBottom>
                  COZYCORNERS ARCHITECTURE & INTERIORS
                </Typography><br></br>
                <Typography variant="body1" paragraph textAlign="left">
                  Setting an unmatched standard of beauty and perfection, we are known amongst the best architects and interior designers
                  in Delhi NCR. Our expertise, our unmatched passion, our insatiable hunger to achieve excellence, and our willingness to
                  listen to our customers and offer pathbreaking solutions make us the top architects and interior designers, with ongoing
                  and delivered projects all across India.
                </Typography><br></br>
                <Typography variant="body1" paragraph textAlign="left">
                  At CozyCorners Architecture & Interiors, we have constantly challenged the conventional way of thinking and thus, given
                  a new dimension to interior designing combined with luxury & automation. We specialize both in residential interior
                  design & commercial interior design projects, including hotels & resorts, office spaces, retail centers, healthcare,
                  & educational institutions, and delivering a unique blend of comfort and style.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ padding: '16px' }}>
                <CardMedia
                  component="img"
                  sx={{
                    height: '400px',
                    width: '100%',
                    objectFit: 'cover',
                  }}
                  image="https://ansainteriors.com/wp-content/uploads/2020/06/misc_1.png"
                  alt="Modular Interiors"
                />
              </Box>
            </Grid>
          </Grid>
        </CardGrid>

        <CardGrid maxWidth="lg">
          <Grid container spacing={7} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ padding: '16px' }}>
                <Typography variant="h6" gutterBottom>
                  Interior Expertise
                </Typography>
                <br />
                <Typography variant="body1" paddingLeft={'10px'} paragraph>
                  Our forte is not just to deliver a design but a place that creates memories
                  and is the epitome of quality & automation.
                </Typography>
                <br />
                <Typography variant="h6" gutterBottom>
                  Reasonable Prices
                </Typography>
                <Typography variant="body1" paragraph>
                  At the promised quality and timeliness of contract performance, our rates are
                  reasonable & transparent for the services offered.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ padding: '16px' }}>
                <CardMedia
                  component="img"
                  sx={{
                    height: '400px',
                    width: '100%',
                    objectFit: 'cover',
                  }}
                  image="https://ansainteriors.com/wp-content/uploads/2020/06/deco_3.png"
                  alt="Modular Interiors"
                />
              </Box>
            </Grid>
          </Grid>
        </CardGrid>

      </main>
    </Root>
  );
};

export default Hotels;
