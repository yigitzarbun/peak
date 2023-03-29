import React from "react";
import { useDispatch } from "react-redux";
import { updateCategory } from "./redux-stuff/actions";
function SubHeader() {
  const dispatch = useDispatch();
  const handleCategory = (value) => {
    dispatch(updateCategory(value));
  };
  return (
    <div className="w-4/5 mx-auto py-2 flex justify-between">
      <p className="cursor-pointer" onClick={() => handleCategory("business")}>
        Business
      </p>
      <p
        className="cursor-pointer"
        onClick={() => handleCategory("entertainment")}
      >
        Entertainment
      </p>
      <p className="cursor-pointer" onClick={() => handleCategory("general")}>
        General
      </p>
      <p className="cursor-pointer" onClick={() => handleCategory("health")}>
        Health
      </p>
      <p className="cursor-pointer" onClick={() => handleCategory("science")}>
        Science
      </p>
      <p className="cursor-pointer" onClick={() => handleCategory("sports")}>
        Sports
      </p>
      <p
        className="cursor-pointer"
        onClick={() => handleCategory("technology")}
      >
        Technology
      </p>
    </div>
  );
}

export default SubHeader;
