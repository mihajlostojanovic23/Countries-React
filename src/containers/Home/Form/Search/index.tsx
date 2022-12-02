// Hook
import useSearch from './useSearch';

function Search() {
  const handle = useSearch();

  return (
    <div className="sm:ml-[0px] md:ml-[40px]">
      <input
        type="text"
        onChange={handle}
        placeholder="Search"
        className="input h-[50px] w-[300px] border-[1px] text-[black] shadow-2xl   focus:border-0 focus:border-none  focus:outline-none dark:bg-[#2b3945] dark:text-[white] placeholder:dark:text-[white]"
      />
    </div>
  );
}

export default Search;
