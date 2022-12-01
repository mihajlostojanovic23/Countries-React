import { useEffect, useState } from 'react';

import axios from '../../api/axiosInstance';

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
