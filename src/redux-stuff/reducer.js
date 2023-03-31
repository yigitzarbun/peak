import { useState } from "react";
import axios from "axios";

import {
  GET_NEWS,
  ADD_ARCHIVE,
  REMOVE_ARCHIVE,
  GET_ARCHIVE,
  UPDATE_CATEGORY,
  GET_COUNTRY,
  GET_CATEGORY,
  ADD_NOTE,
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
    case ADD_ARCHIVE:
      const archivedNews = action.payload;
      const newArchive = [archivedNews, ...state.archive];
      writeArchiveToLs(newArchive);
      return {
        ...state,
        archive: [...newArchive],
      };
    case GET_ARCHIVE:
      return {
        ...state,
        archive: getArchiveFromLs(arcihveKey),
      };
    case REMOVE_ARCHIVE:
      const copyArchive = [...state.archive];
      const filteredArchive = copyArchive.filter(
        (news) => news.news_id !== action.payload
      );
      writeArchiveToLs(filteredArchive);
      return {
        ...state,
        archive: [...filteredArchive],
      };
    case ADD_NOTE:
      let copyArchive2 = [...state.archive];
      let selectedNews = copyArchive2.filter(
        (n) => n.news_id == action.payload.news_id
      )[0];
      selectedNews.notes && selectedNews.notes != undefined
        ? (selectedNews.notes = [
            ...selectedNews.notes,
            {
              note_id: action.payload.note_id,
              news_id: action.payload.news_id,
              title: action.payload.title,
              body: action.payload.body,
              date: Date.now(),
            },
          ])
        : (selectedNews.notes = [
            {
              note_id: action.payload.note_id,
              news_id: action.payload.news_id,
              title: action.payload.title,
              body: action.payload.body,
              date: Date.now(),
            },
          ]);
      writeArchiveToLs(copyArchive2);
      return {
        ...state,
        archive: [...copyArchive2],
      };
    default:
      return state;
  }
}
