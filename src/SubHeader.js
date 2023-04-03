import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { updateCategory, updateCountry } from "./redux-stuff/actions";

function SubHeader() {
  const dispatch = useDispatch();
  const handleCategory = (value) => {
    dispatch(updateCategory(value));
    setCategory(value);
  };
  const [category, setCategory] = useState("general");
  const countriesList = [
    "ae",
    "ar",
    "at",
    "au",
    "be",
    "bg",
    "br",
    "ca",
    "ch",
    "cn",
    "co",
    "cu",
    "cz",
    "de",
    "eg",
    "fr",
    "gb",
    "gr",
    "hk",
    "hu",
    "id",
    "ie",
    "il",
    "in",
    "it",
    "jp",
    "kr",
    "lt",
    "lv",
    "ma",
    "mx",
    "my",
    "ng",
    "nl",
    "no",
    "nz",
    "ph",
    "pl",
    "pt",
    "ro",
    "rs",
    "ru",
    "sa",
    "se",
    "sg",
    "si",
    "sk",
    "th",
    "tr",
    "tw",
    "ua",
    "us",
    "ve",
    "za",
  ];
  const [countryArea, setCountryArea] = useState(false);
  const handleCountryArea = () => {
    setCountryArea(!countryArea);
  };
  const handleCountry = (country) => {
    dispatch(updateCountry(country));
    setCountryArea(false);
  };
  return (
    <>
      <div className="w-4/5 mx-auto py-2 flex flex-wrap justify-between border-b-2 border-b-black mb- items-center">
        {!countryArea && (
          <img
            src="/images/world.png"
            alt="countries"
            className="w-8 h-8"
            onClick={handleCountryArea}
          />
        )}
        <Link to="/">
          <p
            className={`cursor-pointer hover:bg-black hover:text-white p-2 ${
              category == "business" ? "bg-black text-white" : ""
            }`}
            onClick={() => handleCategory("business")}
          >
            Business
          </p>
        </Link>
        <Link to="/">
          <p
            className={`cursor-pointer hover:bg-black hover:text-white p-2 ${
              category == "entertainment" ? "bg-black text-white" : ""
            }`}
            onClick={() => handleCategory("entertainment")}
          >
            Entertainment
          </p>
        </Link>
        <Link to="/">
          <p
            className={`cursor-pointer hover:bg-black hover:text-white p-2 ${
              category == "general" ? "bg-black text-white" : ""
            }`}
            onClick={() => handleCategory("general")}
          >
            General
          </p>
        </Link>
        <Link to="/">
          <p
            className={`cursor-pointer hover:bg-black hover:text-white p-2 ${
              category == "health" ? "bg-black text-white" : ""
            }`}
            onClick={() => handleCategory("health")}
          >
            Health
          </p>
        </Link>
        <Link to="/">
          <p
            className={`cursor-pointer hover:bg-black hover:text-white p-2 ${
              category == "science" ? "bg-black text-white" : ""
            }`}
            onClick={() => handleCategory("science")}
          >
            Science
          </p>
        </Link>
        <Link to="/">
          <p
            className={`cursor-pointer hover:bg-black hover:text-white p-2 ${
              category == "sports" ? "bg-black text-white" : ""
            }`}
            onClick={() => handleCategory("sports")}
          >
            Sports
          </p>
        </Link>
        <Link to="/">
          <p
            className={`cursor-pointer hover:bg-black hover:text-white p-2 ${
              category == "technology" ? "bg-black text-white" : ""
            }`}
            onClick={() => handleCategory("technology")}
          >
            Technology
          </p>
        </Link>
      </div>
      {countryArea && (
        <div className="w-4/5 mx-auto mt-4 mb-6">
          <img
            src="/images/cancel.png"
            alt="cancel"
            className="w-6 h-6"
            onClick={handleCountryArea}
          />
          <div className="flex flex-wrap ">
            {countriesList.map((c) => (
              <Link to="/">
                <p
                  onClick={() => handleCountry(c)}
                  className="mr-4 hover:bg-black hover:text-white p-2 cursor-pointer"
                >
                  {c}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default SubHeader;
