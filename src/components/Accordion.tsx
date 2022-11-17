import { styled } from '@mui/material/styles';
import { FC, ReactNode, useRef } from 'react';
import { Transition } from 'react-transition-group';

type Props = {
  className?: string;
  children?: ReactNode;
  isOpen: boolean;
};

const SC = {
  Accordion: styled('div')(({ theme }) => ({
    transition: 'all 0.25s ease-in-out',
    overflow: 'hidden',
  })),
};

const Accordion: FC<Props> = ({ children, isOpen }) => {
  const innerRef = useRef<HTMLDivElement>();
  const styles = (state) => {
    if (state === 'entering' || state === 'entered') {
      return {
        height: innerRef.current.scrollHeight + 'px',
      };
    } else {
      return {
        height: '0',
      };
    }
  };
  return (
    <Transition in={isOpen} timeout={250} mountOnEnter unmountOnExit>
      {(state) => (
        <SC.Accordion className={state} ref={innerRef} style={styles(state)}>
          {children}
        </SC.Accordion>
      )}
    </Transition>
  );
};

export default Accordion;
