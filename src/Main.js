import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews, getCountry, getCategory } from "./redux-stuff/actions";
import Middle from "./Middle";
import Rest from "./Rest";
import Hero from "./Hero";
import Top from "./Top";
import Bottom from "./Bottom";
function Main() {
  const dispatch = useDispatch();
  const news = useSelector((store) => store.news);
  const country = useSelector((store) => store.country);
  const category = useSelector((store) => store.category);

  let hero = "";
  let top = "";
  let bottom = "";
  let middle = "";
  let rest = "";
  if (news === null) {
    hero = "Loading..";
    top = "Loading..";
    bottom = "Loading..";
    middle = "Loading..";
    rest = "Loading..";
  } else if (news.length === 0) {
    hero = "News not available";
    top = "News not available";
    bottom = "News not available";
    middle = "News not available";
    rest = "News not available";
  } else {
    hero = news.filter(
      (n) => n.urlToImage !== null && n.description !== null
    )[0];
    top = news.filter(
      (n) => n.urlToImage !== null && n.description !== null
    )[1];
    bottom = news.filter(
      (n) => n.urlToImage !== null && n.description !== null
    )[2];
    middle = news
      .filter((n) => n.urlToImage !== null && n.description !== null)
      .slice(3, 7)
      .map((middle) => <Middle middle={middle} />);
    rest = news
      .filter((n) => n.urlToImage !== null && n.description !== null)
      .slice(8)
      .map((rest) => <Rest rest={rest} />);
  }
  useEffect(() => {
    dispatch(getCategory());
    dispatch(getCountry());
    dispatch(
      getNews({
        category: category,
        country: country,
      })
    );
  }, [category]);

  return (
    <div className="flex-col">
      <div className="flex justify-between mt-4">
        <div className="flex-col w-3/5 pr-12">
          <Hero hero={hero} />
        </div>
        <div className="flex-col w-2/5 ">
          <Top top={top} />
          <Bottom bottom={bottom} />
        </div>
      </div>
      <div className="flex flex-wrap justify-between mt-8">{middle}</div>
      <div className="flex flex-wrap justify-between mt-8 pb-8">{rest}</div>
    </div>
  );
}

export default Main;
