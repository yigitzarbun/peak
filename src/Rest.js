import React from "react";

function Rest(props) {
  const { rest } = props;
  return (
    <a href={rest["url"]} target="_blank" className="flex  w-1/2 mt-4">
      <img className="w-1/2" src={rest.urlToImage} />
      <p className="w-1/2 pl-4">{rest.title}</p>
    </a>
  );
}

export default Rest;
