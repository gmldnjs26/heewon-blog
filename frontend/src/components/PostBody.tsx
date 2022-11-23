import { styled } from '@mui/material/styles';
import { FC, ReactNode } from 'react';
import { Post } from '../types/global';
import MarkDownView from './MarkDownView';

type Props = {
  className?: string;
  children?: ReactNode;
  post: Post;
};

const SC = {
  PostBody: styled('div')(({ theme }) => ({})),
};

const PostBody: FC<Props> = ({ post }) => {
  return <MarkDownView markdown={post.contents} />;
};

export default PostBody;
