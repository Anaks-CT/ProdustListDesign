import React from "react";

export const Header = ({ category }) => {
  const options = [...category]?.map((item) => (
    <option value={item}> {item} </option>
  ));
  return (
    <div id="headerContainer">
      <input id="searchInput" type="search" placeholder="Search Product" />
      <select name="" id="category" value={"SortBy: category"}>
        {options}
      </select>
    </div>
  );
};
