import React, { useState } from "react";
import DataDisplayer from "./DataDisplayer";

export default function DataFetching() {
  const [currentId, setCurrentId] = useState("1");

  const handleClick = () => {
    const idToFetch = Math.round(Math.random() * 80);
    setCurrentId(idToFetch.toString());
  };

  return (
    <div>
      <div>
        <p>Requesting ID: {currentId}</p>
        <button type="button" onClick={handleClick}>
          Fetch data!
        </button>
      </div>
      <hr />
      <DataDisplayer id={currentId} />
    </div>
  );
}
