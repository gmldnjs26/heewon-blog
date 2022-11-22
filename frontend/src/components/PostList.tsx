import { styled } from '@mui/material/styles';
import PostItem from './PostItem';

import { postList } from '../utils/dummy';

const SC = {
  PostList: styled('ul')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    rowGap: '24px',
  })),
};

const PostList = () => {
  return (
    <SC.PostList>
      {postList.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </SC.PostList>
  );
};

export default PostList;
