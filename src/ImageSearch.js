import React, { useState } from "react";

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };
  return (
    <form className="mb-3" onSubmit={onSubmit}>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search Here"
          onChange={(e) => setText(e.target.value)}
        />
        <span className="input-group-btn">
          <input className="btn btn-success" type="submit" value="Search" />
        </span>
      </div>
    </form>
  );
};

export default ImageSearch;
