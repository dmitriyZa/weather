import React from 'react';
import rainGif from './Gifs/rain.gif';
import snowGif from './Gifs/snow.gif';

const GifComponent = ({ gifName = 'rain', size = 'large' }) => {
  const gifs = {
    rain: rainGif,
    snow: snowGif,
  };

  const sizes = {
    large: '125px',
    small: '40px',
  };

  return (
    <div>
      <img
        src={gifs[gifName]}
        width={sizes[size]}
        height={sizes[size]}
        alt="Animated GIF"
      />
    </div>
  );
};

export default GifComponent;
