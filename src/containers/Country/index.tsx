import { useParams } from 'react-router-dom';

//Components

import CountryDetails from './CountryDetails';

//Hook
import useCountry from './useCountry';

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

function Country() {
  let { name } = useParams();

  const { data } = useCountry(`alpha/${name}`);

  return (
    <div>
      {data.length > 0 &&
        data.map((item: ICard, index: number) => (
          <CountryDetails
            key={index}
            name={item.name}
            population={item.population}
            region={item.region}
            subregion={item.subregion}
            capital={item.capital}
            tld={item.tld}
            borders={item.borders}
            flags={item.flags}
          />
        ))}
    </div>
  );
}

export default Country;
