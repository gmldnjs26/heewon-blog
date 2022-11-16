import { sp_view } from '../utils/styleHelper';
import { styled } from '@mui/material/styles';

import Link from 'next/link';

const SC = {
  Header: styled('div')(({ theme }) => ({
    display: 'flex',
    minHeight: '96px',
    padding: '0 16px',
    color: theme.palette.primary['200'],
  })),
  Link: styled(Link)(({ theme }) => ({
    display: 'inline-block',
    marginTop: '16px',
    fontSize: '1.4rem',
    fontWeight: '600',
    color: '#2c3e50',
    '&:hover': {
      opacity: '0.7',
    },
    [sp_view]: {
      padding: '0 16px',
      fontSize: '1.2rem',
    },
  })),
};

const Header = () => {
  return (
    <SC.Header>
      <SC.Link href="/">똑같은 삽질은 2번 하지 말자</SC.Link>
    </SC.Header>
  );
};

export default Header;
