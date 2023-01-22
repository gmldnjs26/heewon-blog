import PostForm from '../components/PostForm';
import type { NextPageWithLayout } from 'next';
import FullScreenLayout from '../layouts/FullScreenLayout';
import { createPost } from '../api';
import { PostInput } from '../types/global';
import { useRouter } from 'next/router';

const Write: NextPageWithLayout = () => {
  const router = useRouter();
  const handleSubmit = async (inputData: PostInput) => {
    const result = await createPost(inputData);
    router.push(`/post/${result.id}`);
  };
  return <PostForm onSubmit={handleSubmit} />;
};

Write.getLayout = (page) => <FullScreenLayout>{page}</FullScreenLayout>;

export default Write;
