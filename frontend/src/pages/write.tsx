import PostForm from '../components/PostForm';
import PostFormDialog from '../components/PostFormDialog';

import type { NextPageWithLayout } from 'next';
import FullScreenLayout from '../layouts/FullScreenLayout';
import { createPost, fetchCategoryList } from '../api';
import { PostInput, PostInputStep1, PostInputStep2 } from '../types/global';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '~/context/category-context';

const Write: NextPageWithLayout = () => {
  const { categories, changeCategories } = useContext(CategoryContext);

  // TODO: Page Component로 옮기는게 맞는건지?
  useEffect(() => {
    const fetchInit = async () => {
      const categoryList = await fetchCategoryList();
      changeCategories(categoryList);
    };
    fetchInit();
  }, [changeCategories]);
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

  const handleChangePostInput = (key, value) => {
    setPostInput((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };
  const handleSave = (inputData: PostInputStep1) => {
    setPostInput((prev) => {
      return {
        ...prev,
        ...inputData,
      };
    });
    setOpen(true);
  };
  const handleCreate = async () => {
    const result = await createPost(postInput);
    router.push(`/post/${result.id}`);
  };
  return (
    <>
      <PostForm onSave={handleSave} onChange={handleChangePostInput} />
      <PostFormDialog
        postInput={postInput}
        categories={categories}
        open={open}
        onCreate={handleCreate}
        onChange={handleChangePostInput}
        onClose={() => {
          setOpen(false);
        }}
      />
    </>
  );
};

Write.getLayout = (page) => <FullScreenLayout>{page}</FullScreenLayout>;

export default Write;
