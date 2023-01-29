import { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import Radio from '@mui/material/Radio';
import MuiRadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

type Props = {
  className?: string;
  children?: ReactNode;
  sx?: {};
  row: boolean;
  items: { key: string | number; value: string }[];
  label?: string;
  selectedValue: string | number;
  // FIXME: 일반 set함수도 올 수 있게끔 타입정의를 해보고 싶은데..
  setSelectedValue: Dispatch<SetStateAction<number | string>>;
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
