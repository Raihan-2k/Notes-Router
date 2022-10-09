import React from 'react';
import PropTypes from 'prop-types';
 
function SearchBar({ keyword, keywordChange }) {
  return (
    <section className="search-bar">
    <input
      
      type="text"
      placeholder="Cari berdasarkan nama"
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