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
    <div className="country-details w-[100%] bg-[#ffffff] h-[90.9vh] flex justify-evenly  items-center">
      <div className="image  w-[50%] flex justify-center">
        <img src={flags.svg} className="w-[500px]" alt="Nece" />
      </div>
      <div className="details w-[50%]">
        <span className="mr-[30px]">{name.common}</span>
        <div className="other_details  flex  justify-start">
          <div className="first_column mr-[30px]">
            <div>Native Name: {name.official}</div>
            <div>Population: {population}</div>
            <div>Region: {region}</div>
            <div>Sub Region: {subregion}</div>
            <div>Capital: {capital}</div>
          </div>

          <div className="second_column ml-[60px]">
            <div>Top Level Domen: {tld}</div>
          </div>
        </div>
        <div>
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
  );
}

export default CountryDetails;
