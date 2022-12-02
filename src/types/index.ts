export interface ICard {
  name: { common: string; official: string; nativeName: Object };
  tld: string[];
  cca3: string;
  currencies: Object;
  capital: string[];
  region: string;
  subregion: string;
  languages: Object;
  borders: String[];
  flags: { svg: string };
  population: number;
}
