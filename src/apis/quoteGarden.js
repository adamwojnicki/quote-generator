import axios from "axios";

export const quoteGarden = axios.create({
  baseURL: "https://quote-garden.herokuapp.com/api/v2/",
  timeout: 2000,
});
