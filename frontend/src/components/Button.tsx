import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';

const SC = {
  Button: styled(Button)(({ theme }) => ({
    color: 'white',
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary['600'],
    },
  })),
};

const CustomButton = (props: ButtonProps) => {
  return <SC.Button variant="contained">{props.children}</SC.Button>;
};

export default CustomButton;
