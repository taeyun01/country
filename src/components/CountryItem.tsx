import React from "react";
import { CountryWithIsDone } from "../types/countryType";

interface CountryProps {
  country: CountryWithIsDone;
  handelSelected: (country: CountryWithIsDone) => void;
}

const CountryItem = ({ country, handelSelected }: CountryProps) => {
  return (
    <li
      onClick={() => handelSelected(country)}
      className={`border border-gray-3000 p-4 cursor-pointer hover:border-blue-800`}
      key={country.cca3}
    >
      <div className="aspect-video">
        <img
          className="object-cover w-full h-full"
          src={country.flags.png}
          alt={country.name.common}
        />
      </div>
      <h2 className="text-lg font-bold">{country.name.common}</h2>
      <p className="text-gray-500">{country.capital}</p>
      <p className="text-right text-gray-500">
        {country.isDone ? "Favorites" : "Not Favorites"}
      </p>
    </li>
  );
};

export default CountryItem;
