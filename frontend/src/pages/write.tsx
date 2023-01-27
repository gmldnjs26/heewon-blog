import PostForm from '../components/PostForm';
import PostFormDialog from '../components/PostFormDialog';

import type { NextPageWithLayout } from 'next';
import FullScreenLayout from '../layouts/FullScreenLayout';
import { createPost } from '../api';
import { PostInput } from '../types/global';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Write: NextPageWithLayout = () => {
  const router = useRouter();
  const [post, setPost] = useState({});
  const [open, setOpen] = useState(false);
  const handleCLick = (inputData: { title: string; contents: string }) => {
    setPost((prev) => {
      return {
        ...prev,
        ...inputData,
      };
    });
    setOpen(true);
  };
  const handleSubmit = async (inputData: PostInput) => {
    const result = await createPost(inputData);
    router.push(`/post/${result.id}`);
  };
  return (
    <>
      <PostForm onClick={handleCLick} />
      <PostFormDialog
        open={open}
        onSubmit={handleSubmit}
        onClose={() => {
          setOpen(false);
        }}
      />
    </>
  );
};

Write.getLayout = (page) => <FullScreenLayout>{page}</FullScreenLayout>;

export default Write;
