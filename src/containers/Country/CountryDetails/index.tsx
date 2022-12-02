import { Link } from 'react-router-dom';

// Type
interface IDetails {
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
}: IDetails) {
  return (
    <div className=" min-h-[100vh] bg-[#ffffff] dark:bg-[#202c37] ">
      <Link to={'/'} className="flex justify-center md2:w-[50%] md2:pt-[100px]">
        <button className="relative my-[40px] h-[50px] w-[200px] border-[2px] dark:text-[white]">
          Back
        </button>
      </Link>

      <div className="country-details flex min-h-[67vh] w-[100%] flex-col items-center  justify-center bg-[#ffffff] dark:bg-[#202c37]   md2:flex-row ">
        <div className="image  flex w-[100%]  justify-center">
          <img
            src={flags.svg}
            className="h-[200px] w-[300px] object-cover shadow-2xl sm:h-[300px] sm:w-[500px] md2:ml-[20px]"
            alt="Not show"
          />
        </div>
        <div className="details flex w-[100%] flex-col items-center justify-center px-[10px] ">
          <span className="my-[30px] mr-[30px] text-[40px] font-bold dark:text-[white]">
            {name.common}
          </span>
          <div className="other_details  flex-col  justify-start">
            <div className="first_column text-center dark:text-[white]">
              <div className="my-[5px]">Native Name: {name.official}</div>
              <div className="my-[5px]">Population: {population}</div>
              <div className="my-[5px]">Region: {region}</div>
              <div className="my-[5px]">Sub Region: {subregion}</div>
              <div className="my-[5px]">Capital: {capital}</div>
            </div>

            <div className="second_column text-center dark:text-[white]">
              <div>Top Level Domen: {tld}</div>
            </div>
          </div>
          {borders && (
            <div className="flex flex-col flex-wrap justify-start dark:text-[white] ">
              <span className="my-[30px] text-center">Border Countries:</span>
              <div className=" flex flex-wrap justify-center">
                {borders &&
                  borders.map((item, index: number) => (
                    <Link to={`/${item}`} key={index} className="m-[10px] ">
                      <button className=" w-[100px] border-[2px]">
                        {item}
                      </button>
                    </Link>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
