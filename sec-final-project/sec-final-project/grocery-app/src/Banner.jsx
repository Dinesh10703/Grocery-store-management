// Banner.js
import React from 'react';
import './Banner.css';

function Banner() {
  return (
    <div className="banner">
      <div className="slider">
        <img src="/public/ibbn-sb101713837-27151_hp_ch_c_h.png" alt="Banner 1" className="banner-image" />
        <img src="/public/Banner-2.webp" alt="Banner 2" className="banner-image" />
        <img src="/public/Banner 3.webp" alt="Banner 3" className="banner-image" />
      </div>
    </div>
  );
}

export default Banner;
