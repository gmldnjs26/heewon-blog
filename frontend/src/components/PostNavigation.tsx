import { styled } from '@mui/material/styles';
import { FC, ReactNode } from 'react';

type Props = {
  className?: string;
  children?: ReactNode;
  postContents: string;
};

const SC = {
  PostNavigation: styled('div')(({ theme }) => ({})),
};

const PostNavigation: FC<Props> = ({ className }) => {
  return <SC.PostNavigation className={className}>PostNavigation</SC.PostNavigation>;
};

export default PostNavigation;
