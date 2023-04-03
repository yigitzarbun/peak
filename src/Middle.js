import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addArchive, getArchive, removeArchive } from "./redux-stuff/actions";
function Middle(props) {
  const { middle } = props;
  const archive = useSelector((store) => store.archive);
  const dispatch = useDispatch();
  const handleArchive = (data) => {
    const dataWide = {
      ...data,
      news_id: Date.now(),
    };
    dispatch(addArchive(dataWide));
  };
  let news;
  let archived;
  if (
    archive &&
    archive != undefined &&
    Array.isArray(archive) &&
    archive != null &&
    archive.length > 0
  ) {
    news = archive.filter((n) => n.title == middle.title)[0];
  }
  if (news) {
    archived = true;
  }
  const handleRemove = () => {
    dispatch(removeArchive(news.news_id));
  };
  useEffect(() => {
    dispatch(getArchive());
  }, []);
  return (
    <div className="w-1/4 px-2 max-[800px]:w-full max-[800px]:mt-8 max-[800px]:px-0">
      {archived != true ? (
        <div
          className="flex cursor-pointer"
          onClick={() => handleArchive(middle)}
        >
          <img className="w-6 h-6" src="/images/folder.png" />
          <p className="pl-2 font-bold">Archive</p>
        </div>
      ) : (
        <div className="flex cursor-pointer" onClick={handleRemove}>
          <img className="w-6 h-6" src="/images/unarchive.png" />
          <p className="pl-2 font-bold">Unarchive</p>
        </div>
      )}
      <a href={middle["url"]} target="_blank">
        <img
          src={middle["urlToImage"] ? middle["urlToImage"] : "/images/news.jpg"}
          alt="news-image"
        />
        <p>{middle.title} </p>
      </a>
    </div>
  );
}

export default Middle;
