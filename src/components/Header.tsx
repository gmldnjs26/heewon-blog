import { sp_view } from '../utils/styleHelper';
import { styled } from '@mui/material/styles';

import Link from 'next/link';

const SC = {
  Header: styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    minHeight: '64px',
    padding: '0 16px',
    color: theme.palette.primary['200'],
    borderBottom: `1px solid ${theme.palette.secondary['300']}`,
  })),
  Link: styled(Link)(({ theme }) => ({
    fontSize: '1.4rem',
    fontWeight: '600',
    color: theme.palette.secondary['900'],
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
