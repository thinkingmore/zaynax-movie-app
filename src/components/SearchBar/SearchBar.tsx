import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = () => {
    return (
        <div className={styles.searchBar}>
            <input
            type="text"
            placeholder="SEARCH"
            className={styles.searchInput}
            />
        </div>
    );
};

export default SearchBar;