import React, { useContext }from 'react';
import PropTypes from 'prop-types';
import LocaleContext from '../contexts/LocaleContext';
 
const SearchBar = ({ keyword, keywordChange }) =>{
  const { locale } = useContext(LocaleContext);
  return (
    <section className="search-bar">
    <input
      className="search-bar"
      type="text"
      placeholder={locale === 'id' ? 'Cari berdasarkan nama' : 'Search by name'}
      value={keyword}
      onChange={(r) => keywordChange(r.target.value)} />
      </section>
      )
      }
    
  
 
SearchBar.propType = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired
}
 
export default SearchBar;