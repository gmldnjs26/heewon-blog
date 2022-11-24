import { styled } from '@mui/material/styles';
import { FC, ReactNode } from 'react';

type Props = {
  className?: string;
  children?: ReactNode;
  postContents: string;
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
  })),
  PostNavH2: styled('div')(({ theme }) => ({
    borderRadius: '3px',
    marginLeft: '10px',
    '&:hover': {
      background: theme.palette.primary['200'],
    },
  })),
  PostNavH3: styled('div')(({ theme }) => ({
    borderRadius: '3px',
    marginLeft: '20px',
    '&:hover': {
      background: theme.palette.primary['200'],
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

const PostNavigation: FC<Props> = ({ className, postContents }) => {
  const navInfo = postContents
    .split('\n')
    .filter((item) => {
      // temp[0]가 #이 되면 markdown 규칙에서 h1이 되는것
      const temp = item.split(' ');
      if (temp.length > 0 && ['#', '##', '###'].includes(temp[0])) return true;
      return false;
    })
    .map((item) => {
      const temp = item.split(' ');
      if (temp.length > 0) {
        if (temp[0] === '#') {
          return {
            deep: 1,
            text: temp.splice(1).join(' ').toString(),
          };
        }
        if (temp[0] === '##') {
          return {
            deep: 2,
            text: temp.splice(1).join(' ').toString(),
          };
        }
        if (temp[0] === '###') {
          return {
            deep: 3,
            text: temp.splice(1).join(' ').toString(),
          };
        }
      }
    });
  return (
    <SC.PostNavigation className={className}>
      {navInfo.map((info, idx) => {
        if (info.deep === 1) {
          return (
            <SC.PostNavH1 key={idx}>
              <SC.PostNavLink href={'#' + info.text}>{info.text}</SC.PostNavLink>
            </SC.PostNavH1>
          );
        }
        if (info.deep === 2) {
          return (
            <SC.PostNavH2 key={idx}>
              <SC.PostNavLink href={'#' + info.text}>{info.text}</SC.PostNavLink>
            </SC.PostNavH2>
          );
        }
        if (info.deep === 3) {
          return (
            <SC.PostNavH3 key={idx}>
              <SC.PostNavLink href={'#' + info.text}>{info.text}</SC.PostNavLink>
            </SC.PostNavH3>
          );
        }
      })}
    </SC.PostNavigation>
  );
};

export default PostNavigation;
