import React from "react";
import "./form.css";

export default ({ values, handleChange, handleSubmit }) => {
  const { searchBy, searchValue, year, type } = values;

  const movieForm = () => (
    <form>
      <select name="searchBy" value={searchBy} onChange={handleChange} required>
        <option value="0">Search By</option>
        <option value="title">Title</option>
        <option value="id">ID</option>
      </select>
      <input
        type="text"
        value={searchValue}
        name="searchValue"
        onChange={handleChange}
        placeholder="Search ..."
        required
      />
      <input
        type="text"
        name="year"
        value={year}
        onChange={handleChange}
        placeholder="Year ... (optional)"
      />
      <select name="type" value={type} onChange={handleChange}>
        <option value="0">Type (optional)</option>
        <option value="movie">Movie</option>
        <option value="series">Series</option>
        <option value="episode">Episode</option>
      </select>
      <button onClick={handleSubmit}>Search</button>
    </form>
  );

  return <>{movieForm()}</>;
};
