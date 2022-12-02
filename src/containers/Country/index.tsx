import { useParams } from 'react-router-dom';

//Components
import CountryDetails from './CountryDetails';

//Hook
import useCountry from './useCountry';

// Types
import { ICard } from '../../types';

function Country() {
  let { name } = useParams();

  const { data } = useCountry(`alpha/${name}`);

  return (
    <div>
      {data.length > 0 &&
        data.map((item: ICard, index: number) => (
          <CountryDetails key={index} {...item} />
        ))}
    </div>
  );
}

export default Country;
