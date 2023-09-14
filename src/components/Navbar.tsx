import Image from 'next/image';
import React from 'react';
import SearchBar from './SearchBar/SearchBar';

const Header: React.FC = () => {
  return (
    <header className="header-bg flex items-center justify-between">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className=" text-2xl font-semibold font-montserrat">
          <a href="/">Dramatic</a>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-4 ">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">TV SHOWS</a>
          </li>
          <li>
            <a href="/contact">Movies</a>
          </li>
          <li>
            <a href="/contact">New</a>
          </li>
        </ul>

        <div className="relative">
            <SearchBar/>
        </div>

        {/* Profile Image */}
        <a href="/">
        <Image
            src="/profile.png"
            width={59}
            height={59}
            alt="Picture of the author"
        />
        </a>
      </div>
    </header>
  );
};

export default Header;


