import { useEffect, useState } from "react";
import { getCountry } from "../api/api";
import { CountryWithIsDone } from "../types/countryType";
import CountryItem from "./CountryItem";
import { AxiosError } from "axios";

const CountryList = () => {
  const [countryData, setCountryData] = useState<CountryWithIsDone[]>([]);

  const handelSelected = (country: CountryWithIsDone) => {
    setCountryData((prev) =>
      prev.map((item) =>
        item.cca3 === country.cca3 ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  useEffect(() => {
    const getCountryData = async () => {
      try {
        const data = await getCountry();
        const inDoneCountrys = data.map((dt) => ({
          ...dt,
          isDone: false,
        }));
        setCountryData(inDoneCountrys);
      } catch (error) {
        // error가 axios 에러인지 확인
        error instanceof AxiosError
          ? alert(`Error: ${error}`)
          : console.log(`Error: ${error}`);
      }
    };
    getCountryData();
  }, []);

  return (
    <div className="px-8">
      <h1 className="text-3xl font-bold text-center mb-5">Favorites Country</h1>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {countryData
          .filter((country: CountryWithIsDone) => country.isDone === true)
          .map((country: CountryWithIsDone) => (
            <CountryItem
              key={country.cca3}
              country={country}
              handelSelected={handelSelected}
            />
          ))}
      </ul>
      <h1 className="text-3xl font-bold text-center mb-5">Country</h1>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {countryData
          .filter((country: CountryWithIsDone) => country.isDone === false)
          .map((country: CountryWithIsDone) => (
            <CountryItem
              key={country.cca3}
              country={country}
              handelSelected={handelSelected}
            />
          ))}
      </ul>
    </div>
  );
};

export default CountryList;
