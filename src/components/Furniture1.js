import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Paper, Box, CardMedia, Menu, MenuItem, TextField, Rating } from '@mui/material';
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

const Furniture1 = () => {
  const [anchorElDesignIdeas, setAnchorElDesignIdeas] = useState(null);
  const [anchorElMagazines, setAnchorElMagazines] = useState(null);
  const [anchorElLivespaceTv, setAnchorElLivespaceTv] = useState(null);
  const [anchorElCities, setAnchorElCities] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [ratings, setRatings] = useState({
    card1: 4,
    card2: 5,
    card3: 3.5,
    card4: 4,
    card5: 4.5,
    card6: 4,
  });

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

  const handleRatingChange = (card, newRating) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [card]: newRating,
    }));
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

        <CardGrid maxWidth="l">
          <Grid container spacing={4}>
            <Grid item xs={6} md={4}>
              <Card>
                <Link to="/color"> 
                  <CardMedia
                    component="img"
                    height="300"
                    image="https://m.media-amazon.com/images/I/61qtn1TG9kL._SX679_.jpg"
                    alt="Delicious Food"
                  />
                </Link>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    BN Furniture Sheesham Wood Dining Table 4 Seater | Wooden Dining Room Furniture (Teak Finish) (Traditional)
                  </Typography>
                  <Rating
                    name="card1-rating"
                    value={ratings.card1}
                    precision={0.5}
                    onChange={(event, newValue) => handleRatingChange('card1', newValue)}
                  />
                 {/*<Typography variant="body2" color="textSecondary" component="p">
                  <span style={{ color: 'red', fontWeight: 'bold', fontSize: '1.2em' }}>-89%</span> ₹14,890
                 </Typography>
                 <Typography variant="body2" color="textSecondary" component="p">
                 <strike> ₹84,890</strike> 
                 </Typography>*/}


                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} md={4}>
              <Card>
                <Link to="/color1"> 
                  <CardMedia
                    component="img"
                    height="300"
                    image="https://m.media-amazon.com/images/I/518T1Y2BBsL._SX300_SY300_QL70_FMwebp_.jpg"
                    alt="Delicious Food"
                  />
                </Link>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  OUTLIVING Garden Patio Seating Chair and Table Set Coffee Table Set Balcony Outdoor Furniture with 1 Tables and 4 Chair Set (Black)
                  </Typography>
                  <Rating
                    name="card1-rating"
                    value={ratings.card1}
                    precision={0.5}
                    onChange={(event, newValue) => handleRatingChange('card1', newValue)}
                  />
                {/* <Typography variant="body2" color="textSecondary" component="p">
                  <span style={{ color: 'red', fontWeight: 'bold', fontSize: '1.2em' }}>-89%</span> ₹14,890
                 </Typography>
                 <Typography variant="body2" color="textSecondary" component="p">
                 <strike> ₹84,890</strike> 
                 </Typography>*/}


                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} md={4}>
              <Card>
                <Link to="/color3"> 
                  <CardMedia
                    component="img"
                    height="300"
                    image="https://m.media-amazon.com/images/I/410IC-lz4hL._AC_UF480,480_SR480,480_.jpg"
                    alt="Delicious Food"
                  />
                </Link>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  Lotey Patio Indoor Outdoor Seating Chair and Table Furniture Set/Garden Seating Set, Balcony Coffee Table Set, Powder Coated (Apple Chair), Set of 2 Chair and 1 Table (Beige & Black)
                  </Typography>
                  <Rating
                    name="card1-rating"
                    value={ratings.card1}
                    precision={0.5}
                    onChange={(event, newValue) => handleRatingChange('card1', newValue)}
                  />
                {/* <Typography variant="body2" color="textSecondary" component="p">
                  <span style={{ color: 'red', fontWeight: 'bold', fontSize: '1.2em' }}>-89%</span> ₹14,890
                 </Typography>
                 <Typography variant="body2" color="textSecondary" component="p">
                 <strike> ₹84,890</strike> 
                 </Typography>*/}


                </CardContent>
              </Card>
            </Grid>

            {/* Repeat similar structure for other cards */}

          </Grid>
        </CardGrid>

        <CardGrid maxWidth="l">
          <Grid container spacing={4}>
            <Grid item xs={6} md={4}>
              <Card>
                <Link to="/color"> 
                  <CardMedia
                    component="img"
                    height="300"
                    image="https://m.media-amazon.com/images/I/71sThAvMnOL._AC_UL960_FMwebp_QL65_.jpg"
                    alt="Delicious Food"
                  />
                </Link>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    BN Furniture Sheesham Wood Dining Table 4 Seater | Wooden Dining Room Furniture (Teak Finish) (Traditional)
                  </Typography>
                  <Rating
                    name="card1-rating"
                    value={ratings.card1}
                    precision={0.5}
                    onChange={(event, newValue) => handleRatingChange('card1', newValue)}
                  />
                {/* <Typography variant="body2" color="textSecondary" component="p">
                  <span style={{ color: 'red', fontWeight: 'bold', fontSize: '1.2em' }}>-89%</span> ₹14,890
                 </Typography>
                 <Typography variant="body2" color="textSecondary" component="p">
                 <strike> ₹84,890</strike> 
                 </Typography>*/}


                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} md={4}>
              <Card>
                <Link to="/color1"> 
                  <CardMedia
                    component="img"
                    height="300"
                    image="https://m.media-amazon.com/images/I/51kd3l8oRjL._AC_UF480,480_SR480,480_.jpg"
                    alt="Delicious Food"
                  />
                </Link>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  OUTLIVING Garden Patio Seating Chair and Table Set Coffee Table Set Balcony Outdoor Furniture with 1 Tables and 4 Chair Set (Black)
                  </Typography>
                  <Rating
                    name="card1-rating"
                    value={ratings.card1}
                    precision={0.5}
                    onChange={(event, newValue) => handleRatingChange('card1', newValue)}
                  />
                {/* <Typography variant="body2" color="textSecondary" component="p">
                  <span style={{ color: 'red', fontWeight: 'bold', fontSize: '1.2em' }}>-89%</span> ₹14,890
                 </Typography>
                 <Typography variant="body2" color="textSecondary" component="p">
                 <strike> ₹84,890</strike> 
                 </Typography>*/}


                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} md={4}>
              <Card>
                <Link to="/color3"> 
                  <CardMedia
                    component="img"
                    height="300"
                    image="https://m.media-amazon.com/images/I/51wIUqdrKFL._AC_UF480,480_SR480,480_.jpg"
                    alt="Delicious Food"
                  />
                </Link>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  Lotey Patio Indoor Outdoor Seating Chair and Table Furniture Set/Garden Seating Set, Balcony Coffee Table Set, Powder Coated (Apple Chair), Set of 2 Chair and 1 Table (Beige & Black)
                  </Typography>
                  <Rating
                    name="card1-rating"
                    value={ratings.card1}
                    precision={0.5}
                    onChange={(event, newValue) => handleRatingChange('card1', newValue)}
                  />
                {/*} <Typography variant="body2" color="textSecondary" component="p">
                  <span style={{ color: 'red', fontWeight: 'bold', fontSize: '1.2em' }}>-89%</span> ₹14,890
                 </Typography>
                 <Typography variant="body2" color="textSecondary" component="p">
                 <strike> ₹84,890</strike> 
                 </Typography>*/}


                </CardContent>
              </Card>
            </Grid>

            {/* Repeat similar structure for other cards */}

          </Grid>
        </CardGrid>
      </main>
    </Root>
  );
};

export default Furniture1;
