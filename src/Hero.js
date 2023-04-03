import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addArchive, getArchive, removeArchive } from "./redux-stuff/actions";
function Hero(props) {
  const { hero } = props;
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
    news = archive.filter((n) => n.title == hero.title)[0];
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
          onClick={() => handleArchive(hero)}
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
      <a href={hero["url"]} target="_blank">
        <img
          src={hero["urlToImage"] ? hero["urlToImage"] : "/images/news.jpg"}
          alt="news-image"
        />
        <div className="flex-col">
          <h2 className="text-xl font-bold">{hero["title"]}</h2>
          <p className="italic text-sm mb-4">{hero["publishedAt"]}</p>
          <p className="mb-4">
            {hero["description"] ? hero["description"] : ""}
          </p>
        </div>
      </a>
    </div>
  );
}

export default Hero;
