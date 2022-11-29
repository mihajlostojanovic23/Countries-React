import { useContext } from 'react';
import { options } from '../../../../../data/data';

import { DataContext } from '../../../../../context/dataContext';

function SelectArea() {
  const { setSelect } = useContext(DataContext);

  return (
    <div className="mr-[40px]">
      {/*     <Box>
        <TextField
          label="Select country"
          onChange={(e) => setSelect(e.target.value)}
          className="w-[200px]"
          select
          style={{ backgroundColor: 'white', color: 'black' }}
        >
          {options.map((item, index): any => (
            <MenuItem key={index} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </TextField>
      </Box> */}
      <select
        onChange={(e) => setSelect(e.target.value)}
        className="w-[200px] h-[50px] dark:bg-[#2b3945] dark:text-[white] focus:border-[black]"
      >
        {options.map((option: any) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
}

export default SelectArea;
