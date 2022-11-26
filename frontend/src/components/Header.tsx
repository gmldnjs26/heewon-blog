import { sp_view } from '../utils/styleHelper';
import { styled } from '@mui/material/styles';

import Link from 'next/link';
import Navigation from './Navigation';

const SC = {
  Header: styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    minHeight: '64px',
    padding: '0 16px',
    color: theme.palette.primary['200'],
    boxShadow: '0 3px 8px 0 rgb(116 129 141 / 10%)',
  })),
  Link: styled(Link)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.4rem',
    fontWeight: '700',
    width: '300px',
    color: theme.palette.primary['900'],
    '&:hover': {
      opacity: '0.7',
    },
    [sp_view]: {
      padding: '0 16px',
      fontSize: '1.2rem',
    },
  })),
  BreadIcon: styled('img')(({ theme }) => ({
    marginRight: '8px',
    width: '24px',
  })),
};

const Header = () => {
  return (
    <SC.Header>
      <SC.Link href="/">
        <SC.BreadIcon src="icon/bread.svg" />
        똑같은 삽질은 2번 하지 말자
      </SC.Link>
      <Navigation styles={{ ml: '16px' }} />
    </SC.Header>
  );
};

export default Header;
