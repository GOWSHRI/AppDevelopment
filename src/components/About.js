import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Box, CardMedia, Menu, MenuItem } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

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

const About = () => {
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
            ABOUT US
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Additional Sections */}
        <CardGrid maxWidth="lg">
          <Grid container spacing={7} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ padding: '16px' }}>
                <Typography variant="h4" gutterBottom textAlign="left">
                CozyCorners Interior and Architectural Design Consultancy – The best Interior Designers in Delhi NCR
                </Typography><br></br>
                <Typography variant="body1" paragraph textAlign="left">
                Setting an unmatched standard of beauty and perfection, we introduce ourselves as <b>CozyCorners</b> Interior and Architectural Design 
                Consultancy – one of the best interior designers in Delhi NCR. CozyCorners Interior and Architectural Design Consultancy has challenged
                 the conventional way of interior designing and given new dimensions to the art of interior designing. Our specialization lies in 
                 interior design of  residential and commercial projects and delivering a unique blend of comfort and style to our clients. 
                 We are also known for our premium consultancy services related to Vaastu, and 3D View.
                </Typography><br></br>
                <Typography variant="body1" paragraph textAlign="left">
                We have an innate capacity to understand our client’s choice and taste with respect to interior design and thus with their
                close collaboration, we convert their dreams into reality by offering a unique and personal touch to the interiors. 
                The interiors designed by us represent a unique panorama of elegance, style, unmatched designs, diversity and colors that 
                are sure to captivate anyone. We are there with our clients at every step right from making layouts, supervising the site 
                and helping our clients in purchasing, ordering and overseeing budgets. With the help of our experienced and creative personnel 
                 we help our clients in building their dream home or offices. We take up both- renovations and new constructions, planning and decoration 
                 from flooring to false ceiling, electrical, plumbing, furniture designing, wall art. We give attention to detail and the level of our interior design service is unmatchable. 
                 Every client has a dedicated interior designer to follow their project from start to finish ensuring a personalized service delivered to an uncompromisingly high standards.
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
                  image="https://ansainteriors.com/wp-content/uploads/2019/03/18_68-West-Punjabi-Bagh_SS0023.jpg"
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
                <Typography variant="h4" gutterBottom textAlign="left">
                Our Interior Design Capabilities
                </Typography>
                <br />
                <Typography variant="h5" paragraph textAlign="left">
                We exhibit an absolute different and unique work culture that includes unique services like, space planning, decorating, 
                renovation and new construction and all done in a manner that is exclusive.
                </Typography>
                <br />
                <Typography variant="h7" gutterBottom  paragraph textAlign="left">
                From contemporary to modern, we are able to offer different look to your interiors. We entirely focus on creativity and 
                understand the competency of our workforce. We believe in maintaining a cordial and healthy relation with our client 
                so that they openly express their views. With our capability to understand the client and their budget we are always able to surpass 
                their expectations.
                </Typography>
                <Typography variant="h4" gutterBottom textAlign="left">
                Our Achievements
                </Typography>
                <Typography variant="body1" paragraph textAlign="left">
                We have some unique and appreciable interior design work that can be proudly added to our name. Some worth mentioning works are-
                </Typography>
                <Typography variant="body1" paragraph textAlign="left">
                Designing of texture paint at Wagah Border and Hussaini Wala Border, India
                </Typography>
                <Typography variant="body1" paragraph textAlign="left">
                Designing of DG Bar at Chawla Camp, Najafgarh, Delhi (India)
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
                  image="https://ansainteriors.com/wp-content/uploads/2019/01/2-4.jpg"
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
                <Typography variant="h4" gutterBottom textAlign="left">
                Ankush Aggarwal
                </Typography>
                <br />
                <Typography variant="h7" paragraph textAlign="left">
                Ankush a graduate in Commerce and Post graduate in Interior Designing from International Academy of Design is an ambitious
                 & dynamic entrepreneur. With a firm determination and fresh ideas he set to spell magic in the world of interior designing 
                 with his creative skills.
                </Typography>
                <br />
                <Typography variant="h7" gutterBottom  paragraph textAlign="left">
                Creativity is Ankush’s best traits and his team his strength. With the help of his experienced and creative team he 
                helped people build their dream home or offices into reality.
                </Typography>
                <Typography variant="body1" paragraph textAlign="left">
                From space planning to decorating & designing, Ankush Aggarwal brought a revolution in the interior designing arena
                 by offering bespoke services, promising utmost satisfaction. He has been writing articles for magazines like – 
                 Design Today, India Today, Architectue Update and many more.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ padding: '16px' }}>
                <CardMedia
                  component="img"
                  sx={{
                    height: '600px',
                    width: '100%',
                    objectFit: 'cover',
                  }}
                  image="https://ansainteriors.com/wp-content/uploads/2019/03/an.jpg"
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
                <Typography variant="h4" gutterBottom textAlign="left">
                OUR DESIGN VISIONARIES – The Team at CozyCorners Interior and Architectural Design Consultancy
                </Typography>
                <br />
                <Typography variant="h4" gutterBottom textAlign="left">
                Sapna Aggarwal
                </Typography>
                <br />
                <Typography variant="h7" paragraph textAlign="left">
                Sapna graduated in Home Science (Hons) from Lady Irwin College and acquired professional qualification in Interior 
                Design and Decoration from IAD and diploma in AutoCAD from CAD Centre in year 2001. Sapna’s innate creativity and passion
                 for designing has carved a niche in the interior designing industry. She is in the panel of guest invitees to judge 
                 INIFD exhibitions. and a guest lecturer to JIMS,an external examiner in INIFD. She has also been writing articles for 
                 magazines like -femina, Society Interiors and also featured in designing shows on Zee Business.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ padding: '16px' }}>
                <CardMedia
                  component="img"
                  sx={{
                    height: '600px',
                    width: '100%',
                    objectFit: 'cover',
                  }}
                  image="https://ansainteriors.com/wp-content/uploads/2019/03/sa.jpg"
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

export default About;
