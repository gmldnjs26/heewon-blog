import { keyframes, styled } from '@mui/material/styles';
import { FC, ReactNode } from 'react';

type Props = {
  className?: string;
  children?: ReactNode;
  isOverlay?: boolean;
};

const skChase = keyframes`
  100% { transform: rotate(360deg); }
`;
const skChaseDot = keyframes`
  80%, 100% { transform: rotate(360deg); } 
`;
const skChaseDotBefore = keyframes`
  50% {
    transform: scale(0.4); 
  } 100%, 0% {
    transform: scale(1.0); 
  }
`;

const SC = {
  Overlay: styled('div')(({ theme }) => ({
    position: 'fixed',
    zIndex: '1000',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    textAlign: 'center',
    background: 'rgba(255, 255, 255, .4)',
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
  SkChase: styled('div')(({ theme }) => ({
    width: '40px',
    height: '40px',
    position: 'relative',
    animation: `${skChase} 2.5s infinite linear both`,
  })),
  SkChaseDot: styled('div')(({ theme }) => ({
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: '0',
    top: '0',
    animation: `${skChaseDot} 2.0s infinite ease-in-out both`,
    '&:before': {
      content: '""',
      display: 'block',
      width: '25%',
      height: '25%',
      backgroundColor: theme.palette.primary.main,
      borderRadius: '100%',
      animation: `${skChaseDotBefore} 2.0s infinite ease-in-out both`,
    },
    '&:nth-of-type(1)': { animationDelay: '-1.1s' },
    '&:nth-of-type(2)': { animationDelay: '-1.0s' },
    '&:nth-of-type(3)': { animationDelay: '-0.9s' },
    '&:nth-of-type(4)': { animationDelay: '-0.8s' },
    '&:nth-of-type(5)': { animationDelay: '-0.7s' },
    '&:nth-of-type(6)': { animationDelay: '-0.6s' },
    '&:nth-of-type(1):before': { animationDelay: '-1.1s' },
    '&:nth-of-type(2):before': { animationDelay: '-1.0s' },
    '&:nth-of-type(3):before': { animationDelay: '-0.9s' },
    '&:nth-of-type(4):before': { animationDelay: '-0.8s' },
    '&:nth-of-type(5):before': { animationDelay: '-0.7s' },
    '&:nth-of-type(6):before': { animationDelay: '-0.6s' },
  })),
};

const Loading: FC<Props> = ({ isOverlay }) => {
  return !isOverlay ? (
    <SC.SkChase>
      <SC.SkChaseDot />
      <SC.SkChaseDot />
      <SC.SkChaseDot />
      <SC.SkChaseDot />
      <SC.SkChaseDot />
      <SC.SkChaseDot />
    </SC.SkChase>
  ) : (
    <SC.Overlay>
      <SC.Spinner>
        <SC.SkChase>
          <SC.SkChaseDot />
          <SC.SkChaseDot />
          <SC.SkChaseDot />
          <SC.SkChaseDot />
          <SC.SkChaseDot />
          <SC.SkChaseDot />
        </SC.SkChase>
      </SC.Spinner>
    </SC.Overlay>
  );
};

export default Loading;
