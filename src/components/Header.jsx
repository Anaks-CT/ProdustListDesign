import React from "react";

export const Header = ({ setSearchInput, selectedCategory, setSelectedCategory, category, searchInput }) => {
  const options = [...category]?.map((item) => (
    <option value={item}> {item} </option>
  ));
  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  return (
    <div id="header-container">
      <input id="search-input"
        type="search"
        placeholder="Search Product"
        value={searchInput}
        onChange={handleSearchInputChange} />
      <select name="" id="category" onChange={handleCategoryChange} value={selectedCategory}>
        {options}
      </select>
    </div>
  );
};
