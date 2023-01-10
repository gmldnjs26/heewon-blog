import { styled } from '@mui/material/styles';
import { FC, ReactElement } from 'react';

import Header from '../components/Header';

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
    paddingTop: '40px',
    minHeight: 'calc(100vh - 64px)',
  })),
  MainWrapper: styled('div')(({ theme }) => ({
    margin: '0 16px',
  })),
};

const DefaultLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <SC.App>
      <Header />
      <SC.Container>
        <SC.Main>
          <SC.MainWrapper>{children}</SC.MainWrapper>
        </SC.Main>
      </SC.Container>
    </SC.App>
  );
};

export default DefaultLayout;
