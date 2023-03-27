import { useState } from "react";
import axios from "axios";

import {
  GET_NEWS,
  ADD_ARCHIVE,
  GET_ARCHIVE,
  ADD_PREFERENCES,
  UPDATE_CATEGORY,
  GET_COUNTRY,
  GET_CATEGORY,
} from "./actions";

const initialState = {
  news: [],
  archive: [],
  category: "general",
  country: "us",
};

const arcihveKey = "peakArchive";

function writeArchiveToLs(data) {
  localStorage.setItem(arcihveKey, JSON.stringify(data));
}

function readArchiveFromLs() {
  return JSON.parse(localStorage.getItem(arcihveKey));
}

function getArchiveFromLs() {
  const savedArchive = localStorage.getItem(arcihveKey);
  if (savedArchive) {
    return readArchiveFromLs(arcihveKey);
  } else {
    return initialState.archive;
  }
}

export function myReducer(state = initialState, action) {
  switch (action.type) {
    case GET_NEWS:
      return {
        ...state,
        news: action.payload,
      };
    case GET_CATEGORY:
      return {
        ...state,
        category: state.category,
      };
    case GET_COUNTRY:
      return {
        ...state,
        country: state.country,
      };
    case UPDATE_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
}
