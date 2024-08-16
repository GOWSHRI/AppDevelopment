import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Paper, Box, TextField, CardMedia, Menu, MenuItem, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; // Import ArrowForward icon
import MoreVertIcon from '@mui/icons-material/MoreVert'; // Import MoreVert icon

const Root = styled('div')(({ theme }) => ({
  flexGrow: 1,
}));

const HeroContent = styled('div')(({ theme }) => ({
  position: 'relative',
  color: 'white',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: 'url(https://wallpapers.com/images/hd/interior-design-2560-x-1440-background-6num4hacxur9w2nh.jpg)',
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

const Waterfall= () => {
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
            <MenuItem onClick={() => handleMenuClose(setAnchorElMagazines)}>Kitchen</MenuItem>
            <MenuItem onClick={() => handleMenuClose(setAnchorElMagazines)}>Bed Room</MenuItem>
            <MenuItem onClick={() => handleMenuClose(setAnchorElMagazines)}>Dinning Room</MenuItem>
            <MenuItem onClick={() => handleMenuClose(setAnchorElMagazines)}>Living Room</MenuItem>
            <MenuItem onClick={() => handleMenuClose(setAnchorElMagazines)}>Decorative Units</MenuItem>
            <MenuItem onClick={() => handleMenuClose(setAnchorElMagazines)}>Kids Room</MenuItem>
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
              Make a reservation easily with our app.
            </Typography>
          </Container>
        </HeroContent>

        {/* Features Section */}
        <CardGrid maxWidth="l">
          <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
            Why Choose Us?
          </Typography>
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
                    Modular Interiors
                  </Typography>
                  <Typography>
                    Functional Kitchen, wardrobe and storage
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
                    Full Home Interior
                  </Typography>
                  <Typography>
                    Experience a comfortable and welcoming atmosphere.
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
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLbTGWnADS-iYHrvrCjM5BmmJ4RIDr_mx0Xg&s"
                  alt="Excellent Service"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Luxury
                  </Typography>
                  <Typography>
                    Our staff is dedicated to providing the best service.
                  </Typography>
                  <Box sx={{ textAlign: 'center', mt: 2 }}>
                    <Button endIcon={<ArrowForwardIcon />}>
                    </Button>
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
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQFaVfABaG3dFWiAzj9Y0FivZ89i6-rkHSA&s"
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
                  <CardMedia
                    component="img"
                    height="300"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROQbBy1jdYZKRtugv95kGDd1RiBTdC9vmruQ&s"
                    alt="Main Courses"
                  />
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
    </Root>
  );
};

export default Waterfall;
