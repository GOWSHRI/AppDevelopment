import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Paper, Box, CardMedia, Menu, MenuItem, TextField } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Define keyframes for animation
const animation = `
  @keyframes moveUp {
    0% {
      transform: translateY(50px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const Root = styled('div')(({ theme }) => ({
  flexGrow: 1,
}));

const HeroContent = styled('div')(({ theme }) => ({
  position: 'relative',
  color: 'white',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: 'url(https://thearchitectsdiary.com/wp-content/uploads/2023/07/feminist-design-3-jpg.webp)',
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

const Card = styled(Paper)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  animation: 'moveUp 1s ease-out', // Apply animation
  '@keyframes moveUp': {
    '0%': {
      transform: 'translateY(50px)',
      opacity: 0,
    },
    '100%': {
      transform: 'translateY(0)',
      opacity: 1,
    },
  },
}));

const CardContent = styled('div')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(2),
}));

const Section = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
}));

const FormContainer = styled('div')(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: '#f5f5f5',
  borderRadius: '8px',
  maxWidth: '600px',
  margin: '20px auto',
}));

const Cafe = () => {
  const [anchorElDesignIdeas, setAnchorElDesignIdeas] = useState(null);
  const [anchorElMagazines, setAnchorElMagazines] = useState(null);
  const [anchorElLivespaceTv, setAnchorElLivespaceTv] = useState(null);
  const [anchorElCities, setAnchorElCities] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleMenuOpen = (event, setAnchorEl) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (setAnchorEl) => {
    setAnchorEl(null);
  };

  const handleLearnMoreClick = () => {
    setShowForm(!showForm);
    console.log("Form visibility toggled: ", !showForm); // Debugging line
  };

  return (
    <Root>
      <AppBar position="static" sx={{ background: "#006064" }}>
        <Toolbar>
        <Link to="/home" style={{ color: '#fff', textDecoration: 'none' }}><Typography variant="h6" sx={{ flexGrow: 0, paddingLeft: "50px", textAlign: 'left', fontFamily: "Helvetica Neue" }}>
            CozyCorners
          </Typography></Link>

          <Typography
            variant="h6"
            sx={{ flexGrow: 0, paddingLeft: "200px", textAlign: 'left', fontFamily: "Helvetica Neue", cursor: 'pointer' }}
            onClick={(event) => handleMenuOpen(event, setAnchorElDesignIdeas)}
          >
            What we do
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
            Products
          </Typography>
          <Menu
            anchorEl={anchorElMagazines}
            open={Boolean(anchorElMagazines)}
            onClose={() => handleMenuClose(setAnchorElMagazines)}
          >
            <MenuItem onClick={() => handleMenuClose(setAnchorElMagazines)}>Cafe Design</MenuItem>
            <MenuItem onClick={() => handleMenuClose(setAnchorElMagazines)}>Hotel Design</MenuItem>
            <MenuItem onClick={() => handleMenuClose(setAnchorElMagazines)}>Pooja Room</MenuItem>
            <MenuItem onClick={() => handleMenuClose(setAnchorElMagazines)}>Decorative Units</MenuItem>
          </Menu>

          <Typography
            variant="h6"
            sx={{ flexGrow: 0, paddingLeft: "50px", textAlign: 'left', fontFamily: "Helvetica Neue", cursor: 'pointer' }}
            onClick={(event) => handleMenuOpen(event, setAnchorElLivespaceTv)}
          >
            Offer
          </Typography>

          <Typography
            variant="h6"
            sx={{ flexGrow: 0, paddingLeft: "50px", textAlign: 'left', fontFamily: "Helvetica Neue", cursor: 'pointer' }}
            onClick={(event) => handleMenuOpen(event, setAnchorElCities)}
          >
            Location
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
            Chillin' with my latte at the cafe.
            </Typography>
          </Container>
        </HeroContent>

        <CardGrid maxWidth="l">
          <Grid container spacing={4}>
            <Grid item xs={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="300"
                  image="https://mir-s3-cdn-cf.behance.net/project_modules/fs/67ef02200797563.66704d8070a9f.jpg"
                  alt="Delicious Food"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Eggsellent | breakfast cafe
                  </Typography>
                  <Box sx={{ textAlign: 'center', mt: 2 }}>
                    <Link to="/cafe1">
                      <Button endIcon={<ArrowForwardIcon />}></Button>
                    </Link>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="300"
                  image="https://mir-s3-cdn-cf.behance.net/project_modules/fs/567d3c201709981.6679c618e1c62.jpg"
                  alt="Cozy Ambiance"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Kafeterija | Cafe
                  </Typography>
                  <Box sx={{ textAlign: 'center', mt: 2 }}>
                    <Link to="/modular">
                      <Button endIcon={<ArrowForwardIcon />}></Button>
                    </Link>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="300"
                  image="https://mir-s3-cdn-cf.behance.net/project_modules/fs/59d26a202994943.668f80198ea01.jpg"
                  alt="Excellent Service"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    CAFE GLORIA
                  </Typography>
                  <Box sx={{ textAlign: 'center', mt: 2 }}>
                    <Link to="/cafe3">
                      <Button endIcon={<ArrowForwardIcon />}></Button>
                    </Link>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </CardGrid>

        <Section>
          <Container maxWidth="l">
            <Typography variant="h4" align="center" color="textPrimary" gutterBottom></Typography>
            <Grid container spacing={4}>
              <Grid item xs={6} md={4}>
                <Card>
                  <CardMedia
                    component="img"
                    height="300"
                    image="https://mir-s3-cdn-cf.behance.net/project_modules/fs/31a10a202365327.6684fdc2ee543.jpg"
                    alt="Appetizers"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      NUNU
                    </Typography>
                    <Box sx={{ textAlign: 'center', mt: 2 }}>
                      <Link to="/cafe2">
                        <Button endIcon={<ArrowForwardIcon />}></Button>
                      </Link>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} md={4}>
                <Card>
                  <CardMedia
                    component="img"
                    height="300"
                    image="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/92e472186510615.664743d228612.jpg"
                    alt="Main Courses"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      BALAGAN gastro market
                    </Typography>
                    <Box sx={{ textAlign: 'center', mt: 2 }}>
                      <Link to="/cafe4">
                        <Button endIcon={<ArrowForwardIcon />}></Button>
                      </Link>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} md={4}>
                <Card>
                  <CardMedia
                    component="img"
                    height="300"
                    image="https://mir-s3-cdn-cf.behance.net/project_modules/fs/312ae2183563451.654227ce6d9ce.jpg"
                    alt="Desserts"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Cafe "Nostalgie"
                    </Typography>
                    <Box sx={{ textAlign: 'center', mt: 2 }}>
                      <Link to="/cafe5">
                        <Button endIcon={<ArrowForwardIcon />}></Button>
                      </Link>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Section>

        {showForm && (
          <FormContainer>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <TextField
              fullWidth
              label="Name"
              margin="normal"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Email"
              margin="normal"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Address"
              margin="normal"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="location"
              margin="normal"
              multiline
              variant="outlined"
            />
            <Button
              variant="contained"
              color="primary"
              sx={{ marginTop: 2 }}
              onClick={() => alert('Message sent!')}
            >
              Send
            </Button>
          </FormContainer>
        )}
        
        <Button
          variant="contained"
          sx={{ borderRadius: '16px', display: 'block', margin: '0 auto', mt: 4 }}
          onClick={handleLearnMoreClick}
        >
          Learn More
        </Button>
      </main>
    </Root>
  );
};

export default Cafe;
