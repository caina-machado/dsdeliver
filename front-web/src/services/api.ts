import axios from "axios";

const BASE_URL = "https://caina-dsdeliver.herokuapp.com";

const mapboxToken = process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX;

export const fetchProducts = () => {
  return axios(`${BASE_URL}/products`);
};

export const fetchLocalMapBox = (local: string) => {
  return axios(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`
  );
};
