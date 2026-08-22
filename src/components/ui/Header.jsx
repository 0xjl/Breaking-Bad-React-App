import React from 'react';
import logo from '../../img/logo.png';

const Header = () => {
  return (
    <header className='site-header'>
      <img
        src={logo}
        alt='A logo from one of the greatest television shows of all time, Breaking Bad'
      />
      <p className='site-tagline'>The complete cast &amp; character archive</p>
    </header>
  );
};

export default Header;
