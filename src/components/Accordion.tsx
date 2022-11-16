import { styled } from '@mui/material/styles';
import { FC, ReactNode } from 'react';
import { Transition } from 'react-transition-group';

type Props = {
  className?: string;
  children?: ReactNode;
  isOpen: boolean;
};

const SC = {
  Accordion: styled('div')(({ theme }) => ({
    transition: 'all 0.3s ease-in-out',
    overflow: 'hidden',
    '&.entering': {
      height: '100px',
      opacity: '1',
    },
    '&.entered': {
      height: '100px',
      opacity: '1',
    },
    '&.exiting': {
      height: '0',
      opacity: '0',
    },
    '&.exited': {
      height: '0',
      opacity: '0',
    },
  })),
};

const Accordion: FC<Props> = ({ children, isOpen }) => {
  return (
    <Transition in={isOpen} timeout={300} mountOnEnter unmountOnExit>
      {(state) => {
        console.log(state);
        return <SC.Accordion className={state}>{children}</SC.Accordion>;
      }}
    </Transition>
  );
};

export default Accordion;
