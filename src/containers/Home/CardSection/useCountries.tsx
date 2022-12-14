import { useContext, useEffect, useState } from 'react';

// Api
import axios from '../../../api/axiosInstance';

// Context
import { DataContext } from '../../../context/dataContext';

//! Todo for Nasko: Export fetch functions in api component
function useFetch() {
  const { search, select } = useContext(DataContext);
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async function () {
      setIsLoading(true);
      try {
        let url = 'all';
        if (search) {
          url = `/name/${search}`;
        } else if (select) {
          if (select === 'all') {
            url = 'all';
          } else {
            url = `/region/${select}`;
          }
        }
        const { data: countries } = await axios.get(url);
        setData(countries);
        setIsError(false);
      } catch (err) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [isError, search, select]);

  return { data, isError, isLoading };
}

export default useFetch;
