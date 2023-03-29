import React from "react";
import { useDispatch } from "react-redux";
import { addArchive } from "./redux-stuff/actions";
function Hero(props) {
  const { hero } = props;
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
      <div className="flex" onClick={() => handleArchive(hero)}>
        <img className="w-6 h-6" src="/images/folder.png" />
        <p className="pl-2 font-bold">Archive</p>
      </div>
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
