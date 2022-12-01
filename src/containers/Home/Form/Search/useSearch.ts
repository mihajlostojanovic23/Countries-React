import { useContext } from 'react';

// Context
import { DataContext } from '../../../../context/dataContext';

// Hook
import useDebounce from '../../../../hooks/useDebounce';

export default function useSearch() {
  const { setSearch } = useContext(DataContext);
  const debounce = useDebounce();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    debounce(async () => setSearch(e.target.value), 300);
  };
  return onChangeHandler;
}
