import React from 'react';
import ReactDOM from 'react-dom';

import ImageSlider from './components/ImageSlider';
import Bomb from './components/Bomb';

ReactDOM.render(
  <div>
    <ImageSlider></ImageSlider>
    <br></br>
    <Bomb initialCount={120} />
  </div>,
  document.getElementById('global')
);
