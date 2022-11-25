import { useEffect, useState } from 'react';

import axios from '../../api/axiosInstance';

function useCountry(url: any) {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    (async function () {
      try {
        const { data: countries } = await axios.get(url);
        setData(countries);
      } catch {}
    })();
  }, [url]);

  return { data };
}

export default useCountry;
