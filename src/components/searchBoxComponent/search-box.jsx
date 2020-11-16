import React from 'react';
import './searchBox-style.css';

export const SearchBox = ({placeholder , handlechange }) => {
                return(
                        <input className="search"
                        type="search" 
                        placeholder={placeholder} 
                        onChange={handlechange}
                        />
                );
        }
