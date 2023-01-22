import { styled } from '@mui/material/styles';
import { FC, ReactNode } from 'react';
import { PostDetail } from '~/types/global';
import PostItem from './PostItem';

type Props = {
  className?: string;
  children?: ReactNode;
  postList: PostDetail[];
};

const SC = {
  PostList: styled('ul')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    rowGap: '24px',
  })),
};

const PostList: FC<Props> = ({ postList }) => {
  return (
    <SC.PostList>
      {postList.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </SC.PostList>
  );
};

export default PostList;
