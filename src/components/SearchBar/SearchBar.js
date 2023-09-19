"use client"
import React from 'react';
import { useState,useEffect } from 'react';
import styles from './SearchBar.module.css';
import SearchModal from '../modals/Search/SearchModal';
import { searchedMovies } from '@/utils/api/movies';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [ searchResult, setSearchResult] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleInputChange = (e) => {
      setSearchTerm(e.target.value);
      setIsModalOpen(!!e.target.value); 
    };
  
    const closeModal = () => {
      setSearchTerm(''); 
      setIsModalOpen(false);
    };

    useEffect(()=>{
        const fetchMovies = async() =>{
            try{
                const data = await searchedMovies(searchTerm);
                setSearchResult(data?.results);
            }
            catch(error){
                console.error('Error fetching movies:', error);
            }
        }
        fetchMovies()
    },[searchTerm])
  
    return (
        <div className={styles.searchBar}>
            <input
            type="text"
            placeholder="SEARCH"
            className={styles.searchInput}
            onChange={handleInputChange}
            />
            <SearchModal isOpen={isModalOpen} onClose={closeModal} movies={searchResult}/>
        </div>
    );
};

export default SearchBar;