import React from "react";
import './search-panel.css';

const SearcPanel = ({ onSearch, term }) => {

  const onSubmit = (e) => {
    e.preventDefault();
    onSearch(e.target.value)
  }

  return (
    <input type='text'
      className="form-control search-input"
      placeholder='type to search'
      onChange={onSubmit}
      value={term}
    />
  );
};

export default SearcPanel;