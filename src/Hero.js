import React from "react";
function Hero(props) {
  const { hero } = props;
  return (
    <div>
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
