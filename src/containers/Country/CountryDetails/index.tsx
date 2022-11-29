import { Link } from 'react-router-dom';

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
    <div className="dark:bg-[#202c37] bg-[#ffffff]">
      <Link to={'/'}>
        <button className="w-[200px] h-[50px] dark:text-[white] border-[2px] absolute left-[60px] top-[200px]">
          Back
        </button>
      </Link>

      <div className="country-details w-[100%] bg-[#ffffff]  h-[90.9vh] flex justify-evenly dark:bg-[#202c37]  items-center  ">
        <div className="image  flex justify-center w-[50%]">
          <img
            src={flags.svg}
            className="w-[500px] h-[400px] object-cover shadow-lg"
            alt="Nece"
          />
        </div>
        <div className="details w-[50%] flex flex-col justify-center h-[600px] ">
          <span className="mr-[30px] text-[40px] my-[30px] font-bold dark:text-[white]">
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
              borders.map((item, index): any => (
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
