import PostForm from '../components/PostForm';
import PostFormDialog from '../components/PostFormDialog';

import type { NextPageWithLayout } from 'next';
import FullScreenLayout from '../layouts/FullScreenLayout';
import { createPost } from '../api';
import { PostInput, PostInputStep1, PostInputStep2 } from '../types/global';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Write: NextPageWithLayout = () => {
  const router = useRouter();
  const [postInput, setPostInput] = useState<PostInput>({
    title: '',
    categoryId: 0,
    contents: '',
    previewContents: '',
    password: '',
    status: 0,
  });
  const [open, setOpen] = useState(false);
  const handleCLick = (inputData: PostInputStep1) => {
    setPostInput((prev) => {
      return {
        ...prev,
        ...inputData,
      };
    });
    setOpen(true);
  };
  const handleSubmit = async (inputData: PostInputStep2) => {
    setPostInput((prev) => {
      return {
        ...prev,
        ...inputData,
      };
    });
    const result = await createPost(postInput);
    router.push(`/post/${result.id}`);
  };
  return (
    <>
      <PostForm onClick={handleCLick} />
      <PostFormDialog
        postInput={postInput}
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
