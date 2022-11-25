import { useParams } from 'react-router-dom';
import { Navbar } from '../../components';
import CountryDetails from './CountryDetails';

import useCountry from './useCountry';

function Country() {
  let { name } = useParams();
  const { data } = useCountry(`alpha/${name}`);
  console.log(data);
  return (
    <div>
      <Navbar />
      {data.length > 0 &&
        data.map((item: any) => (
          <CountryDetails
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
