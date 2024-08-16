import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Paper, Box, TextField, CardMedia, Menu, MenuItem } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; // Import ArrowForward icon
import MoreVertIcon from '@mui/icons-material/MoreVert'; // Import MoreVert icon
import ThumbUpIcon from '@mui/icons-material/ThumbUp'; // Import ThumbUp icon
import ThumbDownIcon from '@mui/icons-material/ThumbDown'; // Import ThumbDown icon

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
  position: 'relative',
  overflow: 'hidden', // Ensures no overflow of the zoomed image
}));

const CardContent = styled('div')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(2),
}));

const CardFooter = styled('div')(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  right: 0,
  padding: theme.spacing(1),
  borderTop: `1px solid ${theme.palette.divider}`,
  display: 'flex',
  alignItems: 'center',
}));

const Section = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
}));

const ZoomCardMedia = styled(CardMedia)(({ theme }) => ({
  transition: 'transform 1s ease', // Transition effect for zoom
  '&:hover': {
    transform: 'scale(1.1)', // Zoom effect on hover
  },
}));

const Pooja = () => {
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
            <MenuItem onClick={() => handleMenuClose(setAnchorElMagazines)}>Cafe Interior</MenuItem>
            <MenuItem onClick={() => handleMenuClose(setAnchorElMagazines)}>Hotel Interior</MenuItem>
            <MenuItem onClick={() => handleMenuClose(setAnchorElMagazines)}>Decor Items</MenuItem>
            <MenuItem onClick={() => handleMenuClose(setAnchorElMagazines)}>Pooja Room</MenuItem>
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
                <ZoomCardMedia
                  component="img"
                  height="300"
                  image="https://images.livspace-cdn.com/w:1440/dpr:2/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/amj-2024-1711965337-VsMIK/pooja-room-1713173445-WDVoG/pr-8-1718971856-8EG1A.jpg"
                  alt="Pooja Room Design"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                    Walnut Bronze And Nomadic Gold Contemporary Pooja Unit Design
                  </Typography>
                  <Typography align="left">Size: 8x16 feet</Typography>
                </CardContent>
                <CardFooter>
                <Link to="/bhk">
                  <Button variant="contained" sx={{ borderRadius: '16px' }}>
                    Learn More
                  </Button>
                  </Link>
                </CardFooter>
              </Card>
            </Grid>
            <Grid item xs={6} md={4}>
              <Card>
                <ZoomCardMedia
                  component="img"
                  height="300"
                  image="https://images.livspace-cdn.com/w:768/h:400/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/amj-2024-1711965337-VsMIK/pooja-room-1713173445-WDVoG/pr-7-1718971531-K9OTJ.jpg"
                  alt="Cozy Ambiance"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                  Classic Pooja Unit Design with Drawer Storage
                  </Typography>
                  <Typography>Size: 9x10 feet</Typography>
                </CardContent>
                <CardFooter>
                  <Link to="/bhk">
                  <Button variant="contained" sx={{ borderRadius: '16px' }}>
                    Learn More
                  </Button>
                  </Link>
                </CardFooter>
              </Card>
            </Grid>
            <Grid item xs={6} md={4}>
              <Card>
                <ZoomCardMedia
                  component="img"
                  height="300"
                  image="https://images.livspace-cdn.com/w:1024/h:400/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/amj-2024-1711965337-VsMIK/pooja-room-1713173445-WDVoG/pr-6-1718971536-niDpc.jpg"
                  alt="Cafe Gloria"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                  Contemporary Pooja Unit Design with Lotus Chandelier
                  </Typography>
                  <Typography> Size: 9x10 feet</Typography>
                </CardContent><br></br><br></br>
                <CardFooter>
                  <Link to="/bhk">
                  <Button variant="contained" sx={{ borderRadius: '16px' }}>
                    Learn More
                  </Button>
                  </Link>
                </CardFooter>
              </Card>
            </Grid>
          </Grid>
        </CardGrid>

        {/* Menu Section */}
        <Section>
          <Container maxWidth="l">
            <Grid container spacing={4}>
              <Grid item xs={6} md={4}>
                <Card>
                  <ZoomCardMedia
                    component="img"
                    height="300"
                    image="https://images.livspace-cdn.com/w:1024/h:400/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/amj-2024-1711965337-VsMIK/pooja-room-1713173445-WDVoG/pr-2-1718971543-otzzX.jpg"
                    alt="NUNU"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Contemporary wall mounted pooja unit design with drawers
                    </Typography>
                    <Typography>Size: 12x11 feet</Typography>
                  </CardContent>
                  <CardFooter>
                    <Link to="/bhk">
                  <Button variant="contained" sx={{ borderRadius: '16px' }}>
                    Learn More
                  </Button>
                  </Link>
                  </CardFooter>
                </Card>
              </Grid>
              <Grid item xs={6} md={4}>
                <Card>
                  <ZoomCardMedia
                    component="img"
                    height="300"
                    image="https://images.livspace-cdn.com/w:1024/h:400/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/amj-2024-1711965337-VsMIK/pooja-room-1713173445-WDVoG/pr10-1716793794-TRzBR.jpg"
                    alt="BALAGAN gastro market"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Modern Mandir Design with floor-mounted storage units and wall-mounted shelves
                    </Typography>
                   <Typography> Size:8x9 feet</Typography> 
                  </CardContent>
                  <CardFooter>
                    <Link to="/bhk">
                  <Button variant="contained" sx={{ borderRadius: '16px' }}>
                    Learn More
                  </Button>
                  </Link>
                  </CardFooter>
                </Card>
              </Grid>
              <Grid item xs={6} md={4}>
                <Card>
                  <ZoomCardMedia
                    component="img"
                    height="300"
                    image="https://images.livspace-cdn.com/w:1024/h:400/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/amj-2024-1711965337-VsMIK/real-home-images-1712567973-YCrUk/may-1715239570-6yWI4/pooja-room-145-1715947550-XK0Ib.jpg"
                    alt="Cafe Nostalgie"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                   Contemporary Floor-Mounted wooden mandir design with blue wall niche
                    </Typography>
                    <Typography>Size: 10x12 Feet</Typography>
                  </CardContent><br></br><br></br>
                  <CardFooter>
                    <Link to="/bhk">
                  <Button variant="contained" sx={{ borderRadius: '16px' }}>
                    Learn More
                  </Button>
                  </Link>
                  </CardFooter>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Section>

        {/* Contact Section 
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
        </Section>*/}
      </main>
    </Root>
  );
};

export default Pooja;
