import { TextField } from '@mui/material';
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
      <TextField
        id="outlined-search"
        label="Search field"
        type="search"
        onChange={handle}
      />
    </div>
  );
}

export default Search;
