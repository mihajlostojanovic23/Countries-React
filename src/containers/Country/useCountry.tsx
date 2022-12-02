import { useEffect, useState } from 'react';

// Api
import axios from '../../api/axiosInstance';

//? Is ok logic for status?
function useCountry(url: string) {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState();

  useEffect(() => {
    (async function () {
      try {
        const { data: countries } = await axios.get(url);
        setData(countries);
      } catch (err: any) {
        setStatus(err.response.status);
      }
    })();
  }, [url]);

  return { data, status };
}

export default useCountry;
