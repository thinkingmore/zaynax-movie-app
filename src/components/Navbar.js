"use client"
import { useState } from 'react';
import Link from 'next/link';
import SearchBar from './SearchBar/SearchBar';
import { FaGift,FaBell,FaBars,FaWindowClose } from 'react-icons/fa';

const Navbar = () => {
  // State to track whether the mobile menu is open or closed
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to close the mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="header-bg p-4">
      <div className="container mx-auto md:flex items-center justify-between">
        <div className="text-white text-2xl cursor-pointer">
          DRAMATIC
        </div>
        <div className="md:hidden absolute right-4 top-4">
          {/* Mobile Menu Button */}
          {!isMobileMenuOpen ? (
            <button
              className="text-white"
              onClick={toggleMobileMenu}
            >
              <FaBars/>
            </button>
          ) : (
            <button
              className="text-white "
              onClick={closeMobileMenu}
            >
              <FaWindowClose/>
            </button>
          )}
        </div>
        <div className={`md:flex ms-8 ${isMobileMenuOpen ? 'block' : 'hidden'}`} onClick={closeMobileMenu}>
          {/* Navbar Links */}
          <div className="me-auto md:flex items-center space-x-4">
            <Link href="/">
              <div className="text-white cursor-pointer">HOME</div>
            </Link>
            <Link href="/tv">
              <div className="text-white cursor-pointer">TV SHOWS</div>
            </Link>
            <Link href="/">
              <div className="text-white cursor-pointer">MOVIES</div>
            </Link>
            <Link href="/">
              <div className="text-white cursor-pointer">NEW</div>
            </Link>
          </div>
          <div className="md:ms-16 md:mt-0 mt-4">
            <SearchBar/>
          </div>
          <div className="md:ms-16 hidden space-x-2 md:flex items-center">
            <FaGift/>
            <FaBell/>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
