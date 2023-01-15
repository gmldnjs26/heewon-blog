import { styled } from '@mui/material/styles';
import { FC } from 'react';
import { PostDetail } from '../types/global';

type Props = {
  className?: string;
  post: PostDetail;
};

const SC = {
  PostHeader: styled('div')(({ theme }) => ({
    marinBottom: '32px',
  })),
  PostTitle: styled('h1')(({ theme }) => ({
    fontSize: '32px',
    fontWeight: '700',
  })),
};

const PostHeader: FC<Props> = ({ className, post }) => {
  return (
    <SC.PostHeader>
      <SC.PostTitle>{post.title}</SC.PostTitle>
    </SC.PostHeader>
  );
};

export default PostHeader;
