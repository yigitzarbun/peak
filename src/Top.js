import React from "react";
import { useDispatch } from "react-redux";
import { addArchive } from "./redux-stuff/actions";
function Top(props) {
  const { top } = props;
  const dispatch = useDispatch();
  const handleArchive = (data) => {
    const dataWide = {
      ...data,
      news_id: Date.now(),
    };
    dispatch(addArchive(dataWide));
  };
  return (
    <div className="flex-col ">
      <div className="flex" onClick={() => handleArchive(top)}>
        <img className="w-6 h-6" src="/images/folder.png" />
        <p className="pl-2 font-bold">Archive</p>
      </div>
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
