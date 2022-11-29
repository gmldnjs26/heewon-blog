import { styled } from '@mui/material/styles';
import { FC, ReactNode } from 'react';

type Props = {
  className?: string;
  children?: ReactNode;
  navInfo: { deep: number; text: string }[];
  activeNavId: string;
};

const SC = {
  PostNavigation: styled('div')(({ theme }) => ({
    borderLeft: `2px solid ${theme.palette.secondary['300']}`,
  })),
  PostNavH1: styled('div')(({ theme }) => ({
    borderRadius: '3px',
    '&:hover': {
      background: theme.palette.primary['200'],
    },
    '&.active': {
      background: theme.palette.primary['300'],
    },
  })),
  PostNavH2: styled('div')(({ theme }) => ({
    borderRadius: '3px',
    marginLeft: '10px',
    '&:hover': {
      background: theme.palette.primary['200'],
    },
    '&.active': {
      background: theme.palette.primary['300'],
    },
  })),
  PostNavH3: styled('div')(({ theme }) => ({
    borderRadius: '3px',
    marginLeft: '20px',
    '&:hover': {
      background: theme.palette.primary['200'],
    },
    '&.active': {
      background: theme.palette.primary['300'],
    },
  })),
  PostNavLink: styled('a')(({ theme }) => ({
    padding: '3px 8px',
    display: 'block',
    fontSize: '14px',
    color: 'rgba(0, 0, 0, 0.6)',
    '&:hover': {
      color: 'rgba(0, 0, 0, 0.9)',
    },
  })),
};

const PostNavigation: FC<Props> = ({ className, navInfo, activeNavId }) => {
  console.log(activeNavId);
  return (
    <SC.PostNavigation className={className}>
      {navInfo.map((info, idx) => {
        if (info.deep === 1) {
          return (
            <SC.PostNavH1 className={activeNavId === info.text ? 'active' : ''} key={idx}>
              <SC.PostNavLink href={'#' + info.text}>{info.text}</SC.PostNavLink>
            </SC.PostNavH1>
          );
        }
        if (info.deep === 2) {
          return (
            <SC.PostNavH2 className={activeNavId === info.text ? 'active' : ''} key={idx}>
              <SC.PostNavLink href={'#' + info.text}>{info.text}</SC.PostNavLink>
            </SC.PostNavH2>
          );
        }
        if (info.deep === 3) {
          return (
            <SC.PostNavH3 className={activeNavId === info.text ? 'active' : ''} key={idx}>
              <SC.PostNavLink href={'#' + info.text}>{info.text}</SC.PostNavLink>
            </SC.PostNavH3>
          );
        }
      })}
    </SC.PostNavigation>
  );
};

export default PostNavigation;
