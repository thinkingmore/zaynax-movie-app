import React from 'react';

const FilterButton = ({ text,handleFilter,isSelected }) => {

  return (
    <button onClick={handleFilter}
      className={`${isSelected? "bg-red-800" : "bg-gray-800"} text-white font-semibold rounded-full py-2 px-6 focus:outline-none`}
    >
      {text} 
    </button>
  );
};

export default FilterButton;