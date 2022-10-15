import React from 'react';
import logo from '../../img/logo.png';

const Header = () => {
  return (
    <div className='center'>
      <img
        src={logo}
        alt='A logo from one of the greatest television shows of all time, Breaking Bad'
      />
    </div>
  );
};

export default Header;
