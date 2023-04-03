import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addArchive, getArchive, removeArchive } from "./redux-stuff/actions";
function Rest(props) {
  const { rest } = props;
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
    news = archive.filter((n) => n.title == rest.title)[0];
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
    <div className="cursor-pointer w-1/4 mt-4 pl-4 max-[800px]:w-full max-[800px]:pl-0 max-[1000px]:mt-16">
      {archived != true ? (
        <div
          className="flex cursor-pointer"
          onClick={() => handleArchive(rest)}
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
      <a href={rest["url"]} target="_blank" className="flex-col">
        <img
          className="h-1/3"
          src={rest["urlToImage"] ? rest["urlToImage"] : "/images/news.jpg"}
          alt="news-image"
        />
        <p>{rest.title}</p>
      </a>
    </div>
  );
}

export default Rest;
