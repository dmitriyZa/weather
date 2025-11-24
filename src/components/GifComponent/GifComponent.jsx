import React from 'react';
import rain from './Gifs/rain.gif'

const GifComponent = () => {
  return (
    <div style={{ marginTop: '10px'}}>      
      <img src={rain} width='125px' height='125px' alt="Animated GIF" />
    </div>
  );
};

export default GifComponent;