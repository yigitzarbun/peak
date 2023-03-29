import React from "react";
import { useDispatch } from "react-redux";
import { addArchive } from "./redux-stuff/actions";
function Rest(props) {
  const { rest } = props;
  const dispatch = useDispatch();
  const handleArchive = () => {
    dispatch(addArchive(rest));
  };
  return (
    <div className=" w-1/4 mt-4 pl-4">
      <div className="flex" onClick={handleArchive}>
        <img className="w-6 h-6" src="/images/folder.png" />
        <p className="pl-2 font-bold">Archive</p>
      </div>
      <a href={rest["url"]} target="_blank" className="flex-col">
        <img src={rest.urlToImage} className="h-2/4" />
        <p>{rest.title}</p>
      </a>
    </div>
  );
}

export default Rest;
