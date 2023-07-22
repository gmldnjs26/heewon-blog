import { Dispatch, FC, ReactNode, SetStateAction } from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

type Props = {
  className?: string
  children?: ReactNode
  sx?: {}
  size?: 'small' | 'medium'
  items: { key: string | number; value: string }[]
  label: string
  selectedValue: string | number
  // FIXME: 일반 set함수도 올 수 있게끔 타입정의를 해보고 싶은데..
  setSelectedValue: Dispatch<SetStateAction<string | number>>
}

const SelectBox: FC<Props> = ({
  sx,
  label,
  size = 'medium',
  items,
  selectedValue,
  setSelectedValue,
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    setSelectedValue(Number(event.target.value))
  }

  return (
    <FormControl sx={sx} size={size}>
      <InputLabel>{label}</InputLabel>
      <Select defaultValue="0" value={selectedValue} label={label} onChange={handleChange}>
        <MenuItem value="0">
          <em>선택안함</em>
        </MenuItem>
        {items.map((item) => {
          return (
            <MenuItem value={item.key} key={item.key}>
              {item.value}
            </MenuItem>
          )
        })}
      </Select>
    </FormControl>
  )
}

export default SelectBox
