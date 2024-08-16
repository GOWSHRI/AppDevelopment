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
  height: '100%', // Set desired height here
  display: 'flex',
  flexDirection: 'column',
  width: '100%', // Set desired width here
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

const ImageOnlySection = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}));

const Service = () => {
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
          <Typography variant="h6" sx={{ flexGrow: 0, paddingLeft: "50px", textAlign: 'left', fontFamily: "Helvetica Neue" }}>
            CozyCorners
          </Typography>

          <Typography
            variant="h6"
            sx={{ flexGrow: 0, paddingLeft: "200px", textAlign: 'left', fontFamily: "Helvetica Neue", cursor: 'pointer' }}
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
            Service
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
            About us
          </Typography>

          <Typography
            variant="h6"
            sx={{ flexGrow: 0, paddingLeft: "50px", textAlign: 'left', fontFamily: "Helvetica Neue", cursor: 'pointer' }}
            onClick={(event) => handleMenuOpen(event, setAnchorElCities)}
          >
            Contact us
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
      <main><br />
        <Container maxWidth="l" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h5" align="center" gutterBottom>
            Luxury Architecture & Interior Designing Consultancy
          </Typography><br />
          <Typography variant="h6" align="center" color={"green"} paragraph>
            That Combines Your Taste With Style & Elegance
          </Typography>
          <Typography variant="h7" align="center" paragraph textAlign="left">
            Since 2002, we, at ANSA Architecture & Interiors, have worked hard to make our company a <b>top
             architecture</b> and interior design company in Delhi NCR, Srinagar & the rest of North India. 
             With our transparent costs, luxurious design vision, and automation-led approach, we’ve completed several residential & 
             commercial interior design projects across 36 cities and 6 countries that exceed the satisfaction of our clients.
          </Typography>
          <Link to="/con" style={{ color: '#fff', textDecoration: 'none' }}> <Button variant="contained" sx={{ borderRadius: '16px' }}>
            Schedule A Consultation
          </Button>
          </Link>
        </Container>
         <Section>
          <Container maxWidth="l">
            <Typography variant="h4" align="center" color="textPrimary" gutterBottom></Typography>
            <Grid container spacing={4}>
              <Grid item xs={6} md={4}>
                <Card sx={{ height: 250, width: 300 }}>
                  <CardMedia
                    component="img"
                    height="350"
                    width="100%"
                    image="https://ansainteriors.com/wp-content/uploads/2019/01/4-2-768x461.jpg"
                    alt="Appetizers"
                    sx={{ width: '100%', objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      BEDROOM INTERIOR
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} md={4}>
                <Card sx={{ height: 250, width: 300 }}>
                  <CardMedia
                    component="img"
                    height="300"
                    width="100%"
                    image="https://ansainteriors.com/wp-content/uploads/2019/01/2-4-768x461.jpg"
                    alt="Main Courses"
                    sx={{ width: '100%', objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      DRAWING ROOM
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} md={4}>
                <Card sx={{ height: 250, width: 300 }}>
                  <CardMedia
                    component="img"
                    height="300"
                    width="100%"
                    image="https://ansainteriors.com/wp-content/uploads/2020/06/ANSA-Interiors.jpg"
                    alt="Main Courses"
                    sx={{ width: '100%', objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      FACADE INTERIOR
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
             
            </Grid>
          </Container>
        </Section>
         <Section>
          <Container maxWidth="l">
            <Typography variant="h4" align="center" color="textPrimary" gutterBottom></Typography>
            <Grid container spacing={4}>
              <Grid item xs={6} md={4}>
                <Card sx={{ height: 250, width: 300 }}>
                  <CardMedia
                    component="img"
                    height="300"
                    width="100%"
                    image="https://ansainteriors.com/wp-content/uploads/2019/01/LAB-1.jpg"
                    alt="Appetizers"
                    sx={{ width: '100%', objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      INSTITUTIONAL INTERIOR
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} md={4}>
                <Card sx={{ height: 250, width: 300 }}>
                  <CardMedia
                    component="img"
                    height="300"
                    width="100%"
                    image="https://ansainteriors.com/wp-content/uploads/2019/01/LAB-1-1400x800.jpg"
                    alt="Main Courses"
                    sx={{ width: '100%', objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      SHOWROOM INTERIOR
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} md={4}>
                <Card sx={{ height: 250, width: 300 }}>
                  <CardMedia
                    component="img"
                    height="300"
                    width="100%"
                    image="https://ansainteriors.com/wp-content/uploads/2020/06/FACADE.jpg"
                    alt="Desserts"
                    sx={{ width: '100%', objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      COMMERICAL FACADE 
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Section>
        <Typography paragraph textAlign="left">As  experienced architects and interior  designers  in Delhi NCR, we are responsible for the outside and inside out persona of a project we undertake to complete.</Typography><br></br>
        <Typography gutterBottom variant="h5" component="h2" color="green"><b>Our Interior Design Interior</b></Typography><br></br>
        <Typography>First, we design the architectural lay out of the place and then proceed to fill up the place with interiors that literally breathe life into the living or working space as the case may be.</Typography>
        <CardGrid maxWidth="lg">
          <Grid container spacing={7} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ padding: '16px' }}>
                <Typography variant="h4" gutterBottom paragraph textAlign="left">
                Our Unique Approach To Architecture & Interior Designing
                </Typography><br></br>
                <Typography variant="body1" paragraph textAlign="left">
                At CozyCorners Architecture & Interiors, we hold a common belief that the approach to each architectural  & interior design project should be a comprehensive design solution.<br></br><br></br>
            Most of our interior designing projects & work exhibits this commitment; encompassing the building envelope, the interior space, the finishes, furnishings, and lighting; all of which are generally custom designed by us.<br></br><br></br>
                The composition of forms, use of varied materials, and the manipulations of color throughout identify the work that we undertake.
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
                  image="https://ansainteriors.com/wp-content/uploads/2023/01/ansa-architects-and-interior-designers-team-768x512.jpg"
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
                <Typography variant="h4" gutterBottom>
                Why Us?
                </Typography><br></br>
                <Typography variant="body1" paragraph textAlign="left">
                We’re a one-stop shop for both architecture & interiors with a team of 86 people – architects, interior designers, site supervisors and more. <br></br><br></br>
                All your project’s needs can be completed at one place, ensuring smooth coordination between various teams involved in bringing an architecture and design project to reality. <br></br><br></br>
                Due to our team size, we’re not limited to one design thinking. <br></br><br></br>
                We’re excellent at managing budget expectations and guide you on that in real-time.<br></br><br></br>
                We maintain 100% transparency with our client by ensuring you connect with vendors directly. <br></br><br></br>
                We follow a collaborative approach with our clients. We put your needs first.<br></br><br></br>
                We offer timely delivery.<br></br><br></br>
                We entirely focus on creativity and understand the competency of our workforce.<br></br><br></br>
               So, if you’re looking for best interior designers in Delhi NCR and India, get in touch with us & discuss your dream project with us. We’ll help you transform it into reality!<br></br><br></br>
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
                  image="https://ansainteriors.com/wp-content/uploads/2022/09/luxury-hotel-in-srinagar-bedroom-3d.jpg"
                  alt="Modular Interiors"
                /><br></br>
                <CardMedia
                  component="img"
                  sx={{
                    height: '400px',
                    width: '100%',
                    objectFit: 'cover',
                  }}
                  image="https://ansainteriors.com/wp-content/uploads/2022/09/office-entrance.jpg"
                  alt="Modular Interiors"
                />
              </Box>
            </Grid>
          </Grid>
        </CardGrid>
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

export default Service;
