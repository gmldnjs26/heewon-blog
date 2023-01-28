import { FC, ReactNode } from 'react';
import Radio from '@mui/material/Radio';
import MuiRadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

type Props = {
  className?: string;
  children?: ReactNode;
  items: { key: string | number; value: string }[];
  selectedValue: string | number;
  label?: string;
  setSelectedValue: (value: number) => void;
  row: boolean;
  sx?: {};
};

const RadioGroup: FC<Props> = ({
  selectedValue,
  setSelectedValue,
  items,
  label,
  sx,
  row = true,
}) => {
  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <FormControl sx={sx}>
      {label && <FormLabel>{label}</FormLabel>}
      <MuiRadioGroup value={selectedValue} onChange={handleChange} row={row}>
        {items.map((item) => {
          return (
            <FormControlLabel
              key={item.key}
              value={item.key}
              control={<Radio />}
              label={item.value}
            />
          );
        })}
      </MuiRadioGroup>
    </FormControl>
  );
};

export default RadioGroup;
