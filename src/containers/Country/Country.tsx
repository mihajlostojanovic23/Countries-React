import { useParams } from 'react-router-dom';
import { Navbar } from '../../components';
import NotFound from '../Home/NotFound/NotFound';
import CountryDetails from './CountryDetails';

import useCountry from './useCountry';

function Country() {
  let { name } = useParams();
  const { data, status } = useCountry(`alpha/${name}`);

  if (status === 400) {
    return <NotFound />;
  }

  return (
    <div>
      <Navbar />
      {data.length > 0 &&
        data.map((item: any, index: any) => (
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
