type ExtraPropertyType = {
  [key: string]: {
    [key: string]: string;
  };
};

export interface CountryType {
  name: {
    common: string;
    official: string;
    nativeName: ExtraPropertyType;
  };
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: ExtraPropertyType;
  idd: {
    root: string;
    suffixes: string[];
  };
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: {
    [key: string]: string;
  };
  translations: ExtraPropertyType;
  latlng: number[];
  landlocked: boolean;
  area: number;
  demonyms: ExtraPropertyType;
  flag: string;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  population: number;
  car: {
    signs: string[];
    side: string;
  };
  timezones: string[];
  continents: string[];
  flags: {
    png: string;
    svg: string;
  };
  coatOfArms: {
    png?: string;
    svg?: string;
  };
  startOfWeek: string;
  capitalInfo: {
    latlng: number[];
  };
  postalCode: {
    format: string;
    regex: string;
  };
}

export type CountryWithIsDone = CountryType & {
  isDone: boolean;
};
