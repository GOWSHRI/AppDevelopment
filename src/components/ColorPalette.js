import React, { useState, useEffect } from 'react';
import { Container, Grid, CardMedia, Box, Button, Typography, Rating } from '@mui/material';

const ColorPalette = () => {
  const swatches = {
    Multicolor: [
      { src: 'https://m.media-amazon.com/images/I/61qtn1TG9kL._SX679_.jpg', alt: 'Blue Recliner' },
      { src: 'https://m.media-amazon.com/images/I/51MnYO2L6xL._SX679_.jpg', alt: 'Blue Recliner Different Angle' },
      { src: 'https://m.media-amazon.com/images/I/41hmmX4b9GL._SX679_.jpg', alt: 'Blue Recliner Different Angle' },
      { src: 'https://m.media-amazon.com/images/I/51WsMhAcjFL._SX679_.jpg', alt: 'Blue Recliner Different Angle' },
      { src: 'https://m.media-amazon.com/images/I/61qtn1TG9kL._SX679_.jpg', alt: 'Blue Recliner Different Angle' },
    ],
    Honeyfinish: [
      { src: 'https://m.media-amazon.com/images/I/61b5v9DCqpL._SX679_.jpg', alt: 'Grey Recliner' },
      { src: 'https://m.media-amazon.com/images/I/41SsJXSc6RL.jpg', alt: 'Grey Recliner Different Angle' },
      { src: 'https://m.media-amazon.com/images/I/61tA8H7SqhL._SX679_.jpg', alt: 'Grey Recliner Different Angle' },
      { src: 'https://m.media-amazon.com/images/I/818hlZz-ukL._SX679_.jpg', alt: 'Grey Recliner Different Angle' },
      { src: 'https://m.media-amazon.com/images/I/718GI4PwVtL._SX679_.jpg', alt: 'Grey Recliner Different Angle' },
    ],
    Beige: [
      { src: 'https://m.media-amazon.com/images/I/61VY88GFVCL._SX679_.jpg', alt: 'Beige Recliner' },
      { src: 'https://m.media-amazon.com/images/I/41uskB-vE7L._SX679_.jpg', alt: 'Beige Recliner Different Angle' },
      { src: 'https://m.media-amazon.com/images/I/41ULOefqpwL._SX679_.jpg', alt: 'Beige Recliner Different Angle' },
      { src: 'https://m.media-amazon.com/images/I/61VY88GFVCL._SX679_.jpg', alt: 'Beige Recliner Different Angle' },
      { src: 'https://m.media-amazon.com/images/I/41uskB-vE7L._SX679_.jpg', alt: 'Beige Recliner Different Angle' },
    ],
  };

  const ratings = {
    Multicolor: 4.5,
    Honeyfinish: 3.5,
    Beige: 4.0,
  };

  const [selectedColor, setSelectedColor] = useState('Beige');
  const [selectedSwatch, setSelectedSwatch] = useState(null); 
  const [zoomCoordinates, setZoomCoordinates] = useState(null);
  const [isMouseOver, setIsMouseOver] = useState(false); 
  const [rating, setRating] = useState(ratings['Beige']); 

  useEffect(() => {
    if (swatches[selectedColor] && swatches[selectedColor].length > 0) {
      setSelectedSwatch(swatches[selectedColor][0].src);
      setRating(ratings[selectedColor]); // Update rating when color changes
    }
  }, [selectedColor]);

  const handleSwatchClick = (src) => {
    setSelectedSwatch(src);
    setZoomCoordinates(null); 
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleMainImageMouseMove = (event) => {
    setIsMouseOver(true); 
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setZoomCoordinates({ x, y, width: rect.width, height: rect.height });
  };

  const handleMainImageMouseLeave = () => {
    setIsMouseOver(false); 
    setZoomCoordinates(null);
  };

  if (!selectedSwatch) {
    return <div>Loading...</div>; 
  }

  return (
    <Container maxWidth="lg" sx={{ paddingTop: 8, paddingBottom: 8 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <CardMedia
            component="img"
            height="450"
            image={selectedSwatch}
            alt="Main"
            sx={{ objectFit: 'contain', cursor: 'crosshair' }}
            onMouseMove={handleMainImageMouseMove}
            onMouseLeave={handleMainImageMouseLeave}
          />
          <br />
          <Typography>
            <b>BN Furniture Sheesham Wood Dining Table 4 Seater <br />| Wooden Dining Room Furniture (Teak Finish) (Traditional)</b>
          </Typography>
          <Rating
            name="read-only-rating"
            value={rating}
            readOnly
            precision={0.5}
            sx={{ marginTop: 1 }}
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
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
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
          <br />
          {isMouseOver && zoomCoordinates && (
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: 350,
                overflow: 'hidden',
                border: '1px solid #ccc',
                marginTop: 4,
              }}
            >
              <CardMedia
                component="img"
                image={selectedSwatch}
                alt="Zoomed"
                sx={{
                  position: 'absolute',
                  top: `-${(zoomCoordinates.y / zoomCoordinates.height) * 150}%`,
                  left: `-${(zoomCoordinates.x / zoomCoordinates.width) * 150}%`,
                  width: '150%',
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

export default ColorPalette;
