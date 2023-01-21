import { styled } from '@mui/material/styles';
import { FC, ReactNode } from 'react';
import Loading from './Loading';

type Props = {
  className?: string;
  children?: ReactNode;
};

const SC = {
  Overlay: styled('div')(({ theme }) => ({
    position: 'fixed',
    zIndex: '1000',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    textAlign: 'center',
    background: 'rgba(255, 255, 255, .6)',
  })),
  Spinner: styled('div')(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '40px',
    height: '40px',
    transform: 'translate(-50%, -50%)',
    borderRadius: '8px',
  })),
};

const LoadingOverlay: FC<Props> = () => {
  return (
    <SC.Overlay>
      <SC.Spinner>
        <Loading />
      </SC.Spinner>
    </SC.Overlay>
  );
};

export default LoadingOverlay;
