import { Link } from 'react-router-dom';

// Type
interface Details {
  name: { common: string; official: string };
  population: number;
  region: string;
  subregion: string;
  capital: string[];
  tld: string[];
  borders: String[];
  flags: { svg: string };
}

function CountryDetails({
  name,
  population,
  region,
  subregion,
  capital,
  tld,
  borders,
  flags,
}: Details) {
  return (
    <div className="bg-[#ffffff] dark:bg-[#202c37]">
      <Link to={'/'}>
        <button className="absolute left-[60px] top-[200px] h-[50px] w-[200px] border-[2px] dark:text-[white]">
          Back
        </button>
      </Link>

      <div className="country-details flex h-[100vh]  w-[100%] items-center justify-evenly bg-[#ffffff]  dark:bg-[#202c37]  ">
        <div className="image  flex w-[50%] justify-center">
          <img
            src={flags.svg}
            className="h-[400px] w-[500px] object-cover shadow-2xl"
            alt="Nece"
          />
        </div>
        <div className="details flex h-[600px] w-[50%] flex-col justify-center ">
          <span className="my-[30px] mr-[30px] text-[40px] font-bold dark:text-[white]">
            {name.common}
          </span>
          <div className="other_details  flex  justify-start">
            <div className="first_column mr-[30px] dark:text-[white]">
              <div className="my-[5px]">Native Name: {name.official}</div>
              <div className="my-[5px]">Population: {population}</div>
              <div className="my-[5px]">Region: {region}</div>
              <div className="my-[5px]">Sub Region: {subregion}</div>
              <div className="my-[5px]">Capital: {capital}</div>
            </div>

            <div className="second_column ml-[60px] dark:text-[white]">
              <div>Top Level Domen: {tld}</div>
            </div>
          </div>
          <div className="dark:text-[white]">
            Border Countries:
            {borders &&
              borders.map((item, index: number) => (
                <Link to={`/${item}`} key={index} className="w-[100px]">
                  <button className="m-[10px] w-[100px] border-[2px]">
                    {item}
                  </button>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
