import { createContext, Dispatch, SetStateAction, useState } from 'react';

interface iDataValueContext {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  select: string;
  setSelect: Dispatch<SetStateAction<string>>;
}

type DataContextProviderProps = {
  children: React.ReactNode;
};

const initialState = {
  search: '',
  setSearch: () => {},
  select: '',
  setSelect: () => {},
};

export const DataContext = createContext<iDataValueContext>(initialState);

export default function DataProvider({ children }: DataContextProviderProps) {
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
