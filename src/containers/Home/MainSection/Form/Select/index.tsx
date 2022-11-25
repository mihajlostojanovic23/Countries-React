import { useContext } from 'react';
import { Box, MenuItem, TextField } from '@mui/material';
import { options } from '../../../../../data/data';
import { DataContext } from '../../../../../context/dataContext';

function SelectArea() {
  const { setSelect } = useContext(DataContext);

  return (
    <div className="mr-[40px]">
      <Box>
        <TextField
          label="Select country"
          onChange={(e) => setSelect(e.target.value)}
          className="w-[200px]"
          select
        >
          {options.map((item, index): any => (
            <MenuItem key={index} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </TextField>
      </Box>
    </div>
  );
}

export default SelectArea;
