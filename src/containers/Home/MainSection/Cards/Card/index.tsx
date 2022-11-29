import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../../../../../context/dataContext';
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
  const { setSearch } = useContext(DataContext);

  return (
    <div className="card shadow-lg w-[300px] max-h-[400px] min-h-[350px] m-[20px] rounded-[10px] flex flex-col  dark:bg-[#2b3945] ">
      <Link
        to={`/${cca3}`}
        onClick={() => setSearch('')}
        className="cursor-pointer"
      >
        <img
          src={flags.svg}
          className="rounded-t-[10px] min-h-[200px] max-h-[200px] w-[300px] object-cover "
          alt=""
        />
      </Link>
      <div className="info ml-[10px] mt-[20px]">
        <p className="name font-bold dark:text-[white]">{name.common}</p>
        <p className="population dark:text-[white]">Population: {population}</p>
        <p className="region dark:text-[white]">Region: {region}</p>
        <p className="capital dark:text-[white]">Capital {capital}</p>
      </div>
    </div>
  );
}

export default Card;
