import React from "react";

function Top(props) {
  const { top } = props;
  return (
    <div className="flex-col ">
      <a href={top["url"]} target="_blank">
        <div className="flex-col mb-12">
          <h2 className="text-xl font-bold">{top["title"]}</h2>
          <p className="italic text-sm mb-4">{top["publishedAt"]}</p>
          <p className="mb-4">{top["description"]}</p>
        </div>
      </a>
    </div>
  );
}

export default Top;
