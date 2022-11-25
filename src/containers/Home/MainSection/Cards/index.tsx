import useFetch from '../../../../components/hooks/useFetch';
import Sceleton from '../Sceleton';
import Card from './Card';

const array = [{}, {}, {}, {}, {}, {}, {}, {}];

function Cards() {
  const { data, isError, isLoading } = useFetch();

  if (isLoading) {
    return (
      <div className="flex flex-wrap justify-center items-center">
        {array.map((item, index) => (
          <Sceleton key={index} />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="error flex text-[30px] justify-center items-center">
        Error
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center items-center">
      {data &&
        data?.map((cards: any, index: any) => <Card key={index} {...cards} />)}
    </div>
  );
}

export default Cards;
