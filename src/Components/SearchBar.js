import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './SearchBar.css'
import { Link } from 'react-router-dom';
const Header = () => {

  const [searchInput,setSearch] = useState('');
  const onChangeSearch = query => setSearch(query.target.value);
  
 
  return (
    <nav>
      <div className="navigation-wrapper">
        <div className="logo">
          <h1>Infinity</h1>
        </div>
        <div className="searchbar">
          <input onChange={ onChangeSearch } type="text" value={searchInput} placeholder="Search for Shows" />
          <Link to={{
            pathname:`/info/${searchInput}`,
        }} >
          <button>
            <FontAwesomeIcon icon={faSearch}/>
          </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};



export default Header;
