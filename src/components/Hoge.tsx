import { styled } from '@mui/material/styles';
import { FC } from 'react';

type Props = {
  className?: string;
};

const SC = {
  Hoge: styled('div')(({ theme }) => ({})),
};

const Hoge: FC<Props> = () => {
  return <div></div>;
};

export default Hoge;
