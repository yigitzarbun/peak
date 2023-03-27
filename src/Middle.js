import React from "react";

function Middle(props) {
  const { middle } = props;
  return (
    <div className="w-1/4 px-2">
      <a href={middle["url"]} target="_blank">
        <img className="h-1/2" src={middle.urlToImage} />
        <p>{middle.title} </p>
      </a>
    </div>
  );
}

export default Middle;
