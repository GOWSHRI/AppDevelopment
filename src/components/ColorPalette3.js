import React, { useState } from 'react';
import { Container, Grid, CardMedia, Box, Button, Typography, Rating } from '@mui/material';

const ColorPalette3 = () => {
  const swatches = {
    White: [
      { src: 'https://m.media-amazon.com/images/I/410IC-lz4hL.jpg', alt: 'Beige Recliner' },
      { src: 'https://m.media-amazon.com/images/I/414zWCL4qcL._SS100_.jpg', alt: 'Beige Recliner Different Angle' },
      { src: 'https://m.media-amazon.com/images/I/51k9z9DPg8L.jpg', alt: 'Beige Recliner Different Angle' },
      { src: 'https://m.media-amazon.com/images/I/41-y1XWMJgL.jpg', alt: 'Beige Recliner Different Angle' },
    ],
    Black: [
      { src: 'https://m.media-amazon.com/images/I/31AWR5p36WL.jpg', alt: 'Beige Recliner' },
      { src: 'https://m.media-amazon.com/images/I/419wTUglS4L.jpg', alt: 'Beige Recliner Different Angle' },
      { src: 'https://m.media-amazon.com/images/I/416khro61mL.jpg', alt: 'Beige Recliner Different Angle' },
      { src: 'https://m.media-amazon.com/images/I/417rwOahJ8L.jpg', alt: 'Beige Recliner Different Angle' },
    ],
    Beige: [
      { src: 'https://m.media-amazon.com/images/I/61pNI0vR5ZL.jpg', alt: 'Grey Recliner' },
      { src: 'https://m.media-amazon.com/images/I/51KmT8nYUrL.jpg', alt: 'Grey Recliner' },
      { src: 'https://m.media-amazon.com/images/I/51OvFwuktfL.jpg', alt: 'Grey Recliner' },
      { src: 'https://m.media-amazon.com/images/I/41L8ahBDmQL.jpg', alt: 'Grey Recliner' },
    ],
  };

  const [selectedColor, setSelectedColor] = useState('Beige');
  const [selectedSwatch, setSelectedSwatch] = useState(swatches.Beige[0].src);
  const [hoveredSwatch, setHoveredSwatch] = useState(null);
  const [zoomCoordinates, setZoomCoordinates] = useState(null);
  const [rating, setRating] = useState(4); // Default rating

  const handleSwatchClick = (src) => {
    setSelectedSwatch(src);
    setZoomCoordinates(null);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setSelectedSwatch(swatches[color][0].src);
    setZoomCoordinates(null);
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
          <Typography gutterBottom variant="h5" component="h2">
            Lotey Patio Indoor Outdoor Seating Chair and Table Furniture Set/Garden Seating Set,
            Balcony Coffee Table Set, Powder Coated (Apple Chair), Set of 2 Chair and 1 Table (Beige & Black)
          </Typography>
          <Rating
            name="product-rating"
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
            sx={{ marginBottom: 2 }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
            {swatches[selectedColor].map((swatch, index) => (
              <CardMedia
                key={index}
                component="img"
                height="100"
                image={swatch.src}
                alt={swatch.alt}
                sx={{ objectFit: 'contain', cursor: 'pointer', margin: 1 }}
                onClick={() => handleSwatchClick(swatch.src)}
                onMouseEnter={() => handleSwatchMouseEnter(swatch.src)}
                onMouseLeave={handleSwatchMouseLeave}
              />
            ))}
          </Box>
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
                height: 300,
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
                  top: `-${zoomCoordinates.y * 3}px`,
                  left: `-${zoomCoordinates.x * 3}px`,
                  width: '300%',
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

export default ColorPalette3;
