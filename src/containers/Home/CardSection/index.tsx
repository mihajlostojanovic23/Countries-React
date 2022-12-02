//Components
import Card from './Card';
import NotFound from '../../../components/NotFound';

//Hook
import useFetch from './useCountries';
import Skeleton from '../Skeleton';

// Type
import { ICard } from '../../../types';

function CardSection() {
  const { data, isError, isLoading } = useFetch();

  if (isLoading) {
    return (
      <div className="flex flex-wrap items-center justify-center">
        <Skeleton />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="error flex items-center justify-center  text-[30px] dark:text-[white]">
        <NotFound />
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center">
      {data &&
        data?.map((cards: ICard, index: number) => (
          <Card key={index} {...cards} />
        ))}
    </div>
  );
}

export default CardSection;
