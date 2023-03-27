import React from "react";

function Bottom(props) {
  const { bottom } = props;
  return (
    <div>
      <a href={bottom["url"]} target="_blank">
        <div className="flex-col ">
          <div className="flex-col">
            <h2 className="text-xl font-bold">{bottom["title"]} </h2>
            <p className="italic text-sm mb-4">{bottom["publishedAt"]}</p>
            <p className="mb-4">{bottom["description"]}</p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Bottom;
