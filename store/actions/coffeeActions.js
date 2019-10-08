import { GET_COFFEESHOPS, COFFEESHOPS_LOADING } from "./types";
import axios from "axios";

export const getCoffeeShops = () => {
  return async dispatch => {
    try {
      const res = await axios.get("http://178.128.114.232/api/?format=json");
      const shops = res.data;
      //console.log("hiiiii", channels);
      dispatch({ type: GET_COFFEESHOPS, payload: shops });
    } catch (err) {
      console.error(err);
      //console.error(err.response.data);
    }
  };
};

export const setCoffeeShopsLoading = () => {
  return async dispatch => {
    try {
      dispatch({ type: COFFEESHOPS_LOADING });
    } catch (err) {
      console.error(err);
      //console.error(err.response.data);
    }
  };
};
