import { FC, Fragment } from 'react';
import PostBody from '../../components/PostBody';
import PostHeader from '../../components/PostHeader';
import { postList } from '../../utils/dummy';

type Props = {
  className?: string;
  post: {
    id: number;
    title: string;
    contents: string;
    categoryId: number;
    categoryName: string;
    createdAt: string;
    comments: {
      writer: string;
      contents: string;
    }[];
  };
};

const Post: FC<Props> = ({ post }) => {
  return (
    <Fragment>
      <PostHeader post={post} />
      <PostBody />
    </Fragment>
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
