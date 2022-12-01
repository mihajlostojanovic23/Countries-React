//Components
import Sceleton from '../Sceleton/index';
import Card from './Card';
import NotFound from '../../../components/NotFound';

//Hook
import useFetch from '../../../hooks/useFetch';

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

function Cards() {
  const { data, isError, isLoading } = useFetch();
  const skeletonCardList = [];
  for (let i = 0; i < 10; i++) {
    skeletonCardList.push(<Sceleton key={i} />);
  }

  if (isLoading) {
    return (
      <div className="flex flex-wrap items-center justify-center">
        {skeletonCardList}
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

export default Cards;
