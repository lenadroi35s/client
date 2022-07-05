import axios from "axios";
import { REACT_APP_API_URL } from "../config/Variables";

export const consumirpdf = async () => {
  return await axios
    .get(`${REACT_APP_API_URL}download`, {})
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  consumirpdf,
};
