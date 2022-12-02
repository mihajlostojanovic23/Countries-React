import { useContext } from 'react';

//Data
import { options } from '../../../../data/data';

//Context
import { DataContext } from '../../../../context/dataContext';

function SelectArea() {
  const { setSelect } = useContext(DataContext);

  return (
    <div className="sm:mr-[0px] md:mr-[40px]">
      <select
        onChange={(e) => setSelect(e.target.value)}
        className="h-[50px] w-[300px] focus:border-[black] dark:bg-[#2b3945] dark:text-[white]"
      >
        {options.map((option: any) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectArea;
