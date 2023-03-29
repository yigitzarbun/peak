import React from "react";
import { useDispatch } from "react-redux";
import { addArchive } from "./redux-stuff/actions";
function Middle(props) {
  const { middle } = props;
  const dispatch = useDispatch();
  const handleArchive = (data) => {
    const dataWide = {
      ...data,
      news_id: Date.now(),
    };
    dispatch(addArchive(dataWide));
  };
  return (
    <div className="w-1/4 px-2">
      <div className="flex" onClick={() => handleArchive(middle)}>
        <img className="w-6 h-6" src="/images/folder.png" />
        <p className="pl-2 font-bold">Archive</p>
      </div>
      <a href={middle["url"]} target="_blank">
        <img className="h-1/2" src={middle.urlToImage} />
        <p>{middle.title} </p>
      </a>
    </div>
  );
}

export default Middle;
