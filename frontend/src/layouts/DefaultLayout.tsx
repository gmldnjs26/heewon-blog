import { styled } from '@mui/material/styles';
import { FC, ReactElement } from 'react';

import { sp_view } from '../utils/styleHelper';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

type LayoutProps = Required<{
  readonly children: ReactElement;
}>;

const SC = {
  App: styled('div')(({ theme }) => ({
    position: 'relative',
    background: '#f5f6f6',
    minHeight: '100vh',
  })),
  Container: styled('div')(({ theme }) => ({
    display: 'flex',
  })),
  Main: styled('div')(({ theme }) => ({
    flex: '1',
    padding: '40px 0',
    minHeight: 'calc(100vh - 64px)',
  })),
  MainWrapper: styled('div')(({ theme }) => ({
    maxWidth: '1000px',
    margin: '0 auto',
  })),
  Sidebar: styled(Sidebar)(({ theme }) => ({
    transition: 'all 0.25s ease-in-out',
    height: 'calc(100vh - 64px)',
    width: '300px',
    borderRight: `1px solid ${theme.palette.secondary['300']}`,
    [sp_view]: {
      position: 'fixed',
      width: '0',
      opacity: '0',
      top: '0',
      left: '0',
      zIndex: '999',
      background: '#fff',
      '&.active': {
        width: '300px',
        opacity: '1',
      },
    },
  })),
};

const DefaultLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <SC.App>
      <Header />
      <SC.Container>
        <SC.Sidebar />
        <SC.Main>
          <SC.MainWrapper>{children}</SC.MainWrapper>
        </SC.Main>
      </SC.Container>
    </SC.App>
  );
};

export default DefaultLayout;
