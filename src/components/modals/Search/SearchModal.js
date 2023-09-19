import SearchItem from '@/components/Movies/SearchItem/SearchItem';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaWindowClose } from 'react-icons/fa';

const SearchModal = ({ isOpen, onClose, movies }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="bg-black bg-opacity-75 p-4 rounded-sm text-white relative overflow-auto">
        <button
          className="absolute top-2 right-2 text-gray-200 hover:text-gray-300"
          onClick={onClose}
        >
          <FaWindowClose />
        </button>
        <div className='mt-4 mx-auto px-4 h-72 overflow-y-scroll'>
            {movies.length === 0 ? (
              <p>No results found</p>
            ) : (
              movies.map((movie) => (
                <Link key={movie.id} href={`/movies/${movie.id}`}>
                  <SearchItem movie={movie} />
                </Link>
              ))
            )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;

