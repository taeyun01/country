import axios from "axios";
import { CountryType } from "../types/countryType";

export const getCountry = async (): Promise<CountryType[]> => {
  const response = await axios.get(`https://restcountries.com/v3.1/all`);
  console.log(response.data);
  return response.data;
};
