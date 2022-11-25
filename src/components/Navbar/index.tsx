import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeMode } from '../index';
function Navbar() {
  return (
    <nav className="navbar w-full shadow-md  py-[20px] flex flex-row justify-between px-6 items-center">
      <Link to={'/'}>
        <h1 className="font-bold ml-[40px] text-[30px]">Where is the world</h1>
      </Link>
      <div className="themeColor mr-[40px]">
        <ThemeMode />
      </div>
    </nav>
  );
}

export default Navbar;
