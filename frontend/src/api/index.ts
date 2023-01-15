import axios from 'axios';
import { PostInput } from '../types/global';

const $axios = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true,
});

export const createPost = async (inputData: PostInput) => {
  try {
    const result = await $axios.post('/posts', {
      category_id: inputData.categoryId,
      title: inputData.title,
      contents: inputData.contents,
      preview_contents: inputData.previewContents,
      password: inputData.password,
      status: inputData.status,
    });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
export const fetchPostDetail = async (postId: string) => {
  try {
    const result = await $axios.get(`/posts/${postId}`);
    return {
      result,
    };
  } catch (err) {
    console.log(err);
  }
};
export const fetchPostList = async (inputData: Object) => {
  try {
    await $axios.post('/posts', {
      category_id: '2',
      title: 'title',
      contents: 'contents',
      preview_contents: 'contents2',
      password: '123',
      status: '1',
    });
  } catch (err) {
    console.log(err);
  }
};
