import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeArchive } from "./redux-stuff/actions";

function ArchivedNews(props) {
  const { news, handleNoteArea } = props;
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeArchive(news.news_id));
  };
  return (
    <div className="w-1/4 flex flex-col justify-between px-4 my-2 border-r-2 border-black py-2">
      <h2>{news.title}</h2>
      <div className="flex justify-between mt-4">
        <div onClick={handleRemove}>
          <img
            src="/images/unarchive.png"
            alt="unarchive"
            className="w-8 h-8 mx-auto"
          />
          <p className="text-xs">Unarchive</p>
        </div>
        <div onClick={() => handleNoteArea(news.news_id)}>
          <img src="/images/edit.png" className="w-8 h-8  mx-auto" />
          <p className="text-xs">Add Note</p>
        </div>
      </div>
    </div>
  );
}

export default ArchivedNews;
