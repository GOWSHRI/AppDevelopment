import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Paper, Box, TextField, CardMedia, Menu, MenuItem } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

// Styled components
const Root = styled('div')(({ theme }) => ({
  flexGrow: 1,
}));

const HeroContent = styled('div')(({ theme }) => ({
  position: 'relative',
  color: 'white',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: 'url(https://www.franciscosegarra.com/wp-content/uploads/2022/03/restaurant-decoration.jpg)',
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
}));

const CardContent = styled('div')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(2),
}));

const Section = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
}));

const Footer = styled('footer')(({ theme }) => ({
  backgroundColor: '#006064',
  color: '#fff',
  padding: theme.spacing(6),
  textAlign: 'center',
  position: 'relative',
}));

const SocialMediaIcons = styled('div')(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(2),
  right: theme.spacing(2),
  display: 'flex',
  gap: theme.spacing(2),
}));

// Custom styled Link for MenuItem
const CustomLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: 'inherit',
  '&:hover': {
    textDecoration: 'none',
  },
}));

const CustomPage = () => {
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
              <CustomLink to="/custom">Customized Design</CustomLink>
            </MenuItem>
            <MenuItem onClick={() => handleMenuClose(setAnchorElDesignIdeas)}>
              <CustomLink to="/design-and-build">Design and Build</CustomLink>
            </MenuItem>
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
            <MenuItem onClick={() => handleMenuClose(setAnchorElMagazines)}>
              <CustomLink to="/cafe">Cafe Interior</CustomLink>
            </MenuItem>
            <MenuItem onClick={() => handleMenuClose(setAnchorElMagazines)}>
              <CustomLink to="/hotel">Hotel Interior</CustomLink>
            </MenuItem>
            <MenuItem onClick={() => handleMenuClose(setAnchorElMagazines)}>
              <CustomLink to="/decor">Decor Interior</CustomLink>
            </MenuItem>
            <MenuItem onClick={() => handleMenuClose(setAnchorElMagazines)}>
              <CustomLink to="/pooja">Pooja Room</CustomLink>
            </MenuItem>
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

          <Button color="error" sx={{ paddingLeft: "200px", color: 'white' }}>
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
              “Design is the silent ambassador of your brand.”
            </Typography>
          </Container>
        </HeroContent>

        {/* Features Section */}
        <CardGrid maxWidth="l">
          <Grid container spacing={4}>
            <Grid item xs={6} md={4}>
              <Card sx={{}}>
                <CardMedia
                  component="img"
                  height="300"
                  image="https://images.livspace-cdn.com/w:768/h:400/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/amj-2024-1711965337-VsMIK/kitchen-1711966833-sXfwY/ki-57-1718969892-jNcJf.jpg"
                  alt="Delicious Food"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Cafe Interior
                  </Typography>
                  <Typography>
                    Functional interiors, storage and good looking
                  </Typography>
                  <Box sx={{ textAlign: 'center', mt: 2 }}>
                    <Link to="/cafe">
                      <Button endIcon={<ArrowForwardIcon />}>
                      </Button>
                    </Link>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} md={4}>
              <Card sx={{}}>
                <CardMedia
                  component="img"
                  height="300"
                  image="https://ashlos.com/cdn/shop/products/71HE7MD1yYL._AC_SL1500.jpg?v=1671198476"
                  alt="Cozy Ambiance"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Decor Items
                  </Typography>
                  <Typography>
                    This makes our place beautiful
                  </Typography>
                  <Box sx={{ textAlign: 'center', mt: 2 }}>
                    <Link to="/decor">
                      <Button endIcon={<ArrowForwardIcon />}>
                      </Button>
                    </Link>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} md={4}>
              <Card sx={{}}>
                <CardMedia
                  component="img"
                  height="300"
                  image="https://images.adsttc.com/media/images/654b/7bd3/08e4/441a/ed1b/55e3/large_jpg/the-bond-by-hide-and-seek-bar-and-restaurant-daga-architects_20.jpg?1699445737"
                  alt="Excellent Service"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Hotels
                  </Typography>
                  <Typography>
                    Every hotel has a story, and every guest leaves a part of theirs behind
                  </Typography>
                  <Box sx={{ textAlign: 'center', mt: 2 }}>
                    <Link to="/hotel">
                      <Button endIcon={<ArrowForwardIcon />}>
                      </Button>
                    </Link>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </CardGrid>

        {/* Menu Section */}
        <Section sx={{}}>
          <Container maxWidth="l">
            <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={6} md={4}>
                <Card sx={{}}>
                  <CardMedia
                    component="img"
                    height="300"
                    image="https://i.pinimg.com/474x/86/68/5d/86685d70942c72c78ebbf5c4aa829203.jpg"
                    alt="Appetizers"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Interior Gardening
                    </Typography>
                    <Typography>
                      Start your meal with a variety of appetizers.
                    </Typography>
                    <Box sx={{ textAlign: 'center', mt: 2 }}>
                      <Button endIcon={<ArrowForwardIcon />}>
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} md={4}>
                <Card sx={{}}>
                  <Link to="/water">
                    <CardMedia
                      component="img"
                      height="300"
                      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROQbBy1jdYZKRtugv95kGDd1RiBTdC9vmruQ&s"
                      alt="Main Courses"
                    />
                  </Link>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Waterfall
                    </Typography>
                    <Typography>
                      Savor our delicious main courses.
                    </Typography>
                    <Box sx={{ textAlign: 'center', mt: 2 }}>
                      <Button endIcon={<ArrowForwardIcon />}>
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} md={4}>
                <Card sx={{}}>
                  <CardMedia
                    component="img"
                    height="300"
                    image="https://images.livspace-cdn.com/w:768/h:400/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/amj-2024-1711965337-VsMIK/real-home-images-1712567973-YCrUk/may-1715239570-6yWI4/wall-design-153-1715947540-nFw3S.jpg"
                    alt="Desserts"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Master
                    </Typography>
                    <Typography>
                      Indulge in our delightful desserts.
                    </Typography>
                    <Box sx={{ textAlign: 'center', mt: 2 }}>
                      <Button endIcon={<ArrowForwardIcon />}>
                        <Link to="/del"></Link>
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Section>

        {/* Contact Section */}
        <Section sx={{ backgroundColor: '#e0f7fa' }}>
          <Container maxWidth="sm">
            <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              Have any questions? Get in touch with us!
            </Typography>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Message"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" color="primary" fullWidth>
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Container>
        </Section>
      </main>

      {/* Footer Section */}
      <Footer>
        <Typography variant="body1">
          © {new Date().getFullYear()} CozyCorners. All rights reserved.
        </Typography>
        <Typography variant="body2">
          Address: abc street,t
        </Typography>
        <Typography variant="body2">
          Email: contact@cozycorners.com | Phone: (123) 456-7890
        </Typography>
        <SocialMediaIcons>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <InstagramIcon style={{ color: 'white', fontSize: '2rem' }} />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FacebookIcon style={{ color: 'white', fontSize: '2rem' }} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <TwitterIcon style={{ color: 'white', fontSize: '2rem' }} />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <YouTubeIcon style={{ color: 'white', fontSize: '2rem' }} />
          </a>
        </SocialMediaIcons>
      </Footer>
    </Root>
  );
};

export default CustomPage;
