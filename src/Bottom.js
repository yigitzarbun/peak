import React from "react";
import { useDispatch } from "react-redux";
import { addArchive } from "./redux-stuff/actions";
function Bottom(props) {
  const { bottom } = props;
  const dispatch = useDispatch();
  const handleArchive = (data) => {
    const dataWide = {
      ...data,
      news_id: Date.now(),
    };
    dispatch(addArchive(dataWide));
  };
  return (
    <div>
      <div className="flex" onClick={() => handleArchive(bottom)}>
        <img className="w-6 h-6" src="/images/folder.png" />
        <p className="pl-2 font-bold">Archive</p>
      </div>
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
