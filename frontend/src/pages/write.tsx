import PostForm from '../components/PostForm';
import type { NextPageWithLayout } from 'next';
import FullScreenLayout from '../layouts/FullScreenLayout';

const Write: NextPageWithLayout = () => {
  return <PostForm />;
};

Write.getLayout = (page) => <FullScreenLayout>{page}</FullScreenLayout>;

export default Write;
