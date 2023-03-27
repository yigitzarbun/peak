import axios from "axios";
export const GET_NEWS = "GET_NEWS";
export const ADD_ARCHIVE = "ADD_ARCHIVE";
export const GET_ARCHIVE = "GET_ARCHIVE";
export const ADD_PREFERENCES = "ADD_PREFERENCES";
export const UPDATE_CATEGORY = "UPDATE_CATEGORY";
export const GET_CATEGORY = "GET_PREFERENCES";
export const GET_COUNTRY = "GET_COUNTRY";

const API_KEY = "e9ea05ff21d9423588e248a6b405a7cb";

export const getNews = (data) => (dispatch) => {
  axios
    .get(
      `https://newsapi.org/v2/top-headlines?category=${data.category}&country=${data.country}&apiKey=${API_KEY}`
    )
    .then((res) => dispatch({ type: GET_NEWS, payload: res.data.articles }))
    .catch((err) => console.log(err));
};

export const getCountry = () => {
  return { type: GET_COUNTRY };
};

export const getCategory = () => {
  return { type: GET_CATEGORY };
};

export const updateCategory = (category) => {
  return { type: UPDATE_CATEGORY, payload: category };
};
