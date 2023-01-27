import { FC, ReactNode } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type Props = {
  className?: string;
  children?: ReactNode;
  items: { key: string | number; value: string }[];
  selectedValue: string | number;
  label: string;
  setSelectedValue: (value: string) => void;
  sx?: {};
};

const SelectBox: FC<Props> = ({ selectedValue, setSelectedValue, items, label, sx }) => {
  const handleChange = (event: SelectChangeEvent) => {
    setSelectedValue(event.target.value);
  };

  return (
    <FormControl sx={sx} fullWidth>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select value={selectedValue} label={label} onChange={handleChange}>
        <MenuItem value="">
          <em>선택안함</em>
        </MenuItem>
        {items.map((item) => {
          return (
            <MenuItem value={item.key} key={item.key}>
              {item.value}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default SelectBox;
