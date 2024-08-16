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
  backgroundImage: 'url(https://cdn-bnokp.nitrocdn.com/QNoeDwCprhACHQcnEmHgXDhDpbEOlRHH/assets/images/optimized/rev-12bea38/www.decorilla.com/online-decorating/wp-content/uploads/2023/10/Interior-design-styles-Eclectic-contemporary-living-room-by-Jamie-C-3-2048x1365.jpeg)',
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
  transition: 'transform 1s ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)', // Scale up by 10%
  },
}));

const CardContent = styled('div')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(2),
}));

const Section = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
}));

const Decor1 = () => {
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
          <Grid container spacing={4}>
            <Grid item xs={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="300"
                  image="https://cdn.pixelspray.io/v2/black-bread-289bfa/Zu3Ns5/wrkr/t.resize(h:0,w:0)/data/pottery-barn/14-july-2022/8358738_1.jpg"
                  alt="Delicious Food"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Vases
                  </Typography>
                  <Typography>
                    A beautiful vase can transform a simple bouquet into a statement piece.
                  </Typography>
                  <Box sx={{ textAlign: 'center', mt: 2 }}>
                    <Link to="/vase">
                      <Button endIcon={<ArrowForwardIcon />}>
                      </Button>
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
                  image="https://cdn.pixelspray.io/v2/black-bread-289bfa/Zu3Ns5/wrkr/t.resize(h:0,w:0)/data/pottery-barn/30-may-2022/7910873_1.jpg"
                  alt="Cozy Ambiance"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Lights
                  </Typography>
                  <Typography>
                    Where there is light, there is hope.
                  </Typography>
                  <Box sx={{ textAlign: 'center', mt: 2 }}>
                    <Link to="/light">
                      <Button endIcon={<ArrowForwardIcon />}>
                      </Button>
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
                  image="https://cdn.pixelspray.io/v2/black-bread-289bfa/Zu3Ns5/wrkr/t.resize(h:450,w:500)/data/pottery-barn/24-Aug-2023/9574508_2.jpg"
                  alt="Excellent Service"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Decor items
                  </Typography>
                  <Typography>
                    Simplicity is the ultimate sophistication
                  </Typography>
                  <Box sx={{ textAlign: 'center', mt: 2 }}>
                    <Link to="/sdecor">
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
        <Section>
          <Container maxWidth="l">
            <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={6} md={4}>
                <Card>
                  <CardMedia
                    component="img"
                    height="300"
                    image="https://cdn.pixelspray.io/v2/black-bread-289bfa/Zu3Ns5/wrkr/t.resize(h:450,w:500)/data/pottery-barn/30-may-2022/7911163_2.jpg"
                    alt="Appetizers"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      clock
                    </Typography>
                    <Typography>
                      Time is what we want most, but what we use worst.
                    </Typography>
                    <Box sx={{ textAlign: 'center', mt: 2 }}>
                      <Link to="/clock">
                        <Button endIcon={<ArrowForwardIcon />}>
                        </Button>
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
                    image="https://cdn.pixelspray.io/v2/black-bread-289bfa/Zu3Ns5/wrkr/t.resize(h:450,w:500)/data/pottery-barn/24-Aug-2023/9574195_2.jpg"
                    alt="Main Courses"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Lamp
                    </Typography>
                    <Typography>
                      Lamps are different, but lights are the same.
                    </Typography>
                    <Box sx={{ textAlign: 'center', mt: 2 }}>
                      <Link to="/lamp">
                        <Button endIcon={<ArrowForwardIcon />}>
                        </Button>
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
                    image="https://cdn.pixelspray.io/v2/black-bread-289bfa/Zu3Ns5/wrkr/t.resize(h:450,w:500)/data/pottery-barn/02062022lot5/7911170_2.jpg"
                    alt="Desserts"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Mirror
                    </Typography>
                    <Typography>
                      Mirror should think longer before it reflects.
                    </Typography>
                    <Box sx={{ textAlign: 'center', mt: 2 }}>
                      <Link to="/mirror">
                        <Button endIcon={<ArrowForwardIcon />}>
                        </Button>
                      </Link>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Section>
      </main>
    </Root>
  );
};

export default Decor1;
