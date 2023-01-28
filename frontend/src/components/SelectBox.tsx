import { FC, ReactNode } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type Props = {
  className?: string;
  children?: ReactNode;
  sx?: {};
  label: string;
  size?: 'small' | 'medium';
  items: { key: string | number; value: string }[];
  selectedValue: string | number;
  setSelectedValue: (value: string) => void;
};

const SelectBox: FC<Props> = ({
  sx,
  label,
  size = 'medium',
  items,
  selectedValue,
  setSelectedValue,
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    setSelectedValue(event.target.value);
  };

  return (
    <FormControl sx={sx} size={size}>
      <InputLabel>{label}</InputLabel>
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
