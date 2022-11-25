import React from 'react';
import { Link } from 'react-router-dom';
interface Country {
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

function Card({ population, name, region, flags, capital, cca3 }: Country) {
  return (
    <Link to={`/${cca3}`}>
      <div className="card shadow-md w-[300px] h-[350px] m-[20px] rounded-[10px] cursor-pointer">
        <img
          src={flags.svg}
          className="w-[100%] h-[200px] rounded-t-[10px]"
          alt=""
        />
        <div className="info ml-[10px] mt-[20px]">
          <p className="name font-bold">{name.common}</p>
          <p className="population">Population: {population}</p>
          <p className="region">Region: {region}</p>
          <p className="capital">Capital {capital}</p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
