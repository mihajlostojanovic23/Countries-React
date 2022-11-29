import React, { useContext, useEffect } from 'react';
import { DataContext } from '../../../../../context/dataContext';

function Search() {
  const { search, setSearch } = useContext(DataContext);
  const handle = (e: any) => {
    setTimeout(() => {
      setSearch(e.target.value);
    }, 500);
  };

  useEffect(() => {
    console.log(search);
  }, [search]);
  return (
    <div className="ml-[40px]">
      <input
        type="text"
        onChange={handle}
        placeholder="Search"
        className="input w-[300px] h-[50px] placeholder:dark:text-[white] dark:bg-[#2b3945] border-0 shadow-lg text-[white] focus:outline-none focus:border-none focus:border-0"
      />
    </div>
  );
}

export default Search;
