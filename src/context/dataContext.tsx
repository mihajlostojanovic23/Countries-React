import { createContext, Dispatch, SetStateAction, useState } from 'react';

interface iDataValueContext {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  select: string;
  setSelect: Dispatch<SetStateAction<string>>;
}

export const DataContext = createContext<iDataValueContext>({
  search: '',
  setSearch: () => {},
  select: '',
  setSelect: () => {},
});

export default function DataProvider({ children }: any) {
  const [search, setSearch] = useState('');
  const [select, setSelect] = useState('');
  return (
    <div>
      <DataContext.Provider value={{ search, setSearch, select, setSelect }}>
        {children}
      </DataContext.Provider>
    </div>
  );
}
