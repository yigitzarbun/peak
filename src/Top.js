import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addArchive, getArchive, removeArchive } from "./redux-stuff/actions";
function Top(props) {
  const { top } = props;
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
    news = archive.filter((n) => n.title == top.title)[0];
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
    <div className="flex-col max-[600px]:mt-8">
      {archived != true ? (
        <div className="flex cursor-pointer" onClick={() => handleArchive(top)}>
          <img className="w-6 h-6" src="/images/folder.png" />
          <p className="pl-2 font-bold">Archive</p>
        </div>
      ) : (
        <div className="flex cursor-pointer" onClick={handleRemove}>
          <img className="w-6 h-6" src="/images/unarchive.png" />
          <p className="pl-2 font-bold">Unarchive</p>
        </div>
      )}
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
