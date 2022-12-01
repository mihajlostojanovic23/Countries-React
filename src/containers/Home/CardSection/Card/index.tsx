import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../../../../context/dataContext';

// Context

// Type
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
    <div className="card m-[20px] flex max-h-[400px] min-h-[350px] w-[300px] flex-col rounded-[10px] shadow-lg  dark:bg-[#2b3945] ">
      <Link
        to={`/${cca3}`}
        onClick={() => setSearch('')}
        className="cursor-pointer"
      >
        <img
          src={flags.svg}
          className="max-h-[200px] min-h-[200px] w-[300px] rounded-t-[10px] object-cover "
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
