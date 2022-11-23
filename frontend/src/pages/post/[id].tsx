import { FC } from 'react';
import { styled } from '@mui/material/styles';
import PostHeader from '../../components/PostHeader';
import PostBody from '../../components/PostBody';
import PostNavigation from '../../components/PostNavigation';
import { Post } from '../../types/global';
import { postList } from '../../utils/dummy';

type Props = {
  className?: string;
  post: Post;
};

const SC = {
  Post: styled('div')(({ theme }) => ({
    display: 'flex',
  })),
  Main: styled('div')(({ theme }) => ({
    flex: '1',
  })),
  PostNav: styled(PostNavigation)(({ theme }) => ({
    position: 'sticky',
    top: 'calc(1.5rem + 70px)',
    marginLeft: '24px',
    height: 'fit-content',
  })),
};

const Post: FC<Props> = ({ post }) => {
  return (
    <SC.Post>
      <SC.Main>
        <PostHeader post={post} />
        <PostBody post={post} />
      </SC.Main>
      <SC.PostNav postContents={post.contents} />
    </SC.Post>
  );
};

export default Post;

export async function getServerSideProps(context) {
  const { id } = context.query;

  // fetch data and can use req.params or etc..
  const post = postList.find((post) => post.id === Number(id));

  return {
    props: {
      post,
    },
  };
}
