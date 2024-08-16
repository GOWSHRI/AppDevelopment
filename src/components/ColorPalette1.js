import React, { useState } from 'react';
import { Container, Grid, CardMedia, Box, Button, Typography, Rating } from '@mui/material';

const ColorPalette1 = () => {
  const swatches = {
    green: [
      { src: 'https://m.media-amazon.com/images/I/71HoZZmPNtL._SX679_.jpg', alt: 'Green Recliner' },
      { src: 'https://m.media-amazon.com/images/I/61WKl5IS0xL._SX679_.jpg', alt: 'Green Recliner Different Angle' },
      { src: 'https://m.media-amazon.com/images/I/61QNoaJoc7L._SX679_.jpg', alt: 'Green Recliner Different Angle' },
      { src: 'https://m.media-amazon.com/images/I/51t2BU7kUoL._SX679_.jpg', alt: 'Green Recliner Different Angle' },
    ],
    Grey: [
      { src: 'https://m.media-amazon.com/images/I/81rykjr7M5L._SX679_.jpg', alt: 'Grey Recliner' },
      { src: 'https://m.media-amazon.com/images/I/61I+wlQ3olL._SX679_.jpg', alt: 'Grey Recliner Different Angle' },
      { src: 'https://m.media-amazon.com/images/I/61gVyQ2OfQL._SX679_.jpg', alt: 'Grey Recliner Different Angle' },
      { src: 'https://m.media-amazon.com/images/I/61kPXCozJYL._SX679_.jpg', alt: 'Grey Recliner Different Angle' },
    ],
    Beige: [
      { src: 'https://m.media-amazon.com/images/I/51CxOCuiS5L.jpg', alt: 'Beige Recliner' },
      { src: 'https://m.media-amazon.com/images/I/41vqPR0+ADL.jpg', alt: 'Beige Recliner Different Angle' },
      { src: 'https://m.media-amazon.com/images/I/41ILf8iGfQL.jpg', alt: 'Beige Recliner Different Angle' },
      { src: 'https://m.media-amazon.com/images/I/31HHh4sb0CL.jpg', alt: 'Beige Recliner Different Angle' },
    ],
  };

  const [selectedColor, setSelectedColor] = useState('Beige');
  const [selectedSwatch, setSelectedSwatch] = useState(swatches.Beige[0].src);
  const [hoveredSwatch, setHoveredSwatch] = useState(null);
  const [zoomCoordinates, setZoomCoordinates] = useState(null);
  const [rating, setRating] = useState(4.5);

  const handleSwatchClick = (src) => {
    setSelectedSwatch(src);
    setZoomCoordinates(null); // Reset zoom when swatch changes
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setSelectedSwatch(swatches[color][0].src);
    setZoomCoordinates(null); // Reset zoom when color changes
  };

  const handleMainImageMouseMove = (event) => {
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setZoomCoordinates({ x, y });
  };

  const handleSwatchMouseEnter = (src) => {
    setHoveredSwatch(src);
  };

  const handleSwatchMouseLeave = () => {
    setHoveredSwatch(null);
  };

  return (
    <Container maxWidth="lg" sx={{ paddingTop: 8, paddingBottom: 8 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <CardMedia
            component="img"
            height="500"
            image={hoveredSwatch || selectedSwatch}
            alt="Main"
            sx={{ objectFit: 'contain', cursor: 'crosshair' }}
            onMouseMove={handleMainImageMouseMove}
          />
          <br />
          <Typography gutterBottom variant="h5" component="h2">
            OUTLIVING Garden Patio Seating Chair and Table Set Coffee Table Set <br />
            Balcony Outdoor Furniture with 1 Table and 4 Chair Set (Black)
          </Typography>
          <Rating
            name="product-rating"
            value={rating}
            precision={0.5}
            readOnly
            sx={{ marginBottom: 2 }}
          />
          <Grid container direction="row" justifyContent="center" spacing={2} sx={{ marginTop: 2 }}>
            {swatches[selectedColor].map((swatch, index) => (
              <Grid item key={index}>
                <CardMedia
                  component="img"
                  height="100"
                  image={swatch.src}
                  alt={swatch.alt}
                  sx={{ objectFit: 'contain', cursor: 'pointer' }}
                  onClick={() => handleSwatchClick(swatch.src)}
                  onMouseEnter={() => handleSwatchMouseEnter(swatch.src)}
                  onMouseLeave={handleSwatchMouseLeave}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
            {Object.keys(swatches).map((color) => (
              <Button
                key={color}
                color="primary"
                variant={color === selectedColor ? 'contained' : 'outlined'}
                onClick={() => handleColorClick(color)}
              >
                {color}
              </Button>
            ))}
          </Box>
          {zoomCoordinates && (
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: 300, // Increase the height of the zoom box
                overflow: 'hidden',
                border: '1px solid #ccc',
                marginTop: 4,
              }}
            >
              <CardMedia
                component="img"
                image={hoveredSwatch || selectedSwatch}
                alt="Zoomed"
                sx={{
                  position: 'absolute',
                  top: `-${zoomCoordinates.y / 2}px`, // Adjust the zoom factor
                  left: `-${zoomCoordinates.x / 2}px`, // Adjust the zoom factor
                  width: '200%', // Reduce the width of the zoomed image
                  height: 'auto',
                }}
              />
            </Box>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default ColorPalette1;
