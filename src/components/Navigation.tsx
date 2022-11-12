import styled from 'styled-components';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import React, { useState, FC } from 'react';
import theme from '../utils/theme';

type Props = {
  styles: Object;
};
interface StyledTabProps {
  label: string;
}

const AntTabs = styled(Tabs)({
  borderBottom: '1px solid #e8e8e8',
  '& .MuiTabs-indicator': {
    backgroundColor: '#eec07b',
  },
});

const AntTab = styled((props: StyledTabProps) => <Tab disableRipple {...props} />)(() => ({
  textTransform: 'none',
  minWidth: 0,
  [theme.breakpoints.up('sm')]: {
    minWidth: 0,
  },
  marginRight: theme.spacing(1),
  fontSize: '1rem',
  fontWeight: theme.typography.fontWeightMedium,
  color: 'rgba(0, 0, 0, 0.85)',
  '&:hover': {
    color: '#f0d1a0',
    opacity: 1,
  },
  '&.Mui-selected': {
    color: '#eec07b',
    fontWeight: theme.typography.fontWeightBold,
    borderBottom: '1px solid #eec07b',
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#d1eaff',
  },
}));

const Navigation: FC<Props> = (props) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box {...props.styles}>
      <AntTabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        aria-label="scrollable prevent tabs example"
      >
        <AntTab label="Home" />
        <AntTab label="Vue" />
        <AntTab label="React" />
        <AntTab label="Javascript" />
        <AntTab label="Java" />
        <AntTab label="Go" />
      </AntTabs>
    </Box>
  );
};

export default Navigation;
