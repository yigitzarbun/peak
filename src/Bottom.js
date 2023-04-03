import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addArchive, getArchive, removeArchive } from "./redux-stuff/actions";
function Bottom(props) {
  const { bottom } = props;
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
    news = archive.filter((n) => n.title == bottom.title)[0];
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
    <div>
      {archived != true ? (
        <div
          className="flex cursor-pointer"
          onClick={() => handleArchive(bottom)}
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
