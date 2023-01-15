import PostForm from '../components/PostForm';
import type { NextPageWithLayout } from 'next';
import FullScreenLayout from '../layouts/FullScreenLayout';
import { createPost } from '../api';
import { PostInput } from '../types/global';

const Write: NextPageWithLayout = () => {
  const handleSubmit = async (inputData: PostInput) => {
    const result = await createPost(inputData);
    console.log(result);
  };
  return <PostForm onSubmit={handleSubmit} />;
};

Write.getLayout = (page) => <FullScreenLayout>{page}</FullScreenLayout>;

export default Write;
