import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  let pageNumbers = [];
  const maxPageButtons = 5;
  let startIndex = Math.max(currentPage - Math.floor(maxPageButtons / 2), 1);
  let endIndex = Math.min(startIndex + maxPageButtons - 1, totalPages);
  
  for (let i = startIndex; i <= endIndex; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center mt-4">
      <ul className="flex space-x-2">
      <li
          className='px-4 py-2 rounded-md cursor-pointer bg-gray-200 text-gray-700 hover:bg-blue-400 hover:text-white'
          onClick={() => onPageChange(currentPage-1)}
        >
            prev
          </li>
        {pageNumbers.map((page) => (
          <li
            key={page}
            className={`px-4 py-2 rounded-md cursor-pointer ${
              currentPage === page
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-blue-400 hover:text-white'
            }`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </li>
        ))}
        <li
          className='px-4 py-2 rounded-md cursor-pointer bg-gray-200 text-gray-700 hover:bg-blue-400 hover:text-white'
          onClick={() => onPageChange(currentPage !== totalPages ? currentPage + 1 : currentPage)}
        >
          next
        </li>
      </ul>
    </div>
  );
};

export default Pagination;


