import axios, { AxiosResponse } from 'axios';
import { PostDetail, PostInput } from '../types/global';

const $axios = axios.create({
  // FIXME: 배포할때 baseURL 수정하자
  baseURL: 'http://localhost:5000',
  withCredentials: true,
});

export const createPost = async (inputData: PostInput): Promise<PostDetail> => {
  try {
    const { data } = await $axios.post('/posts', {
      category_id: inputData.categoryId,
      title: inputData.title,
      contents: inputData.contents,
      preview_contents: inputData.previewContents,
      password: inputData.password,
      status: inputData.status,
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};
export const fetchPostDetail = async (postId: string): Promise<PostDetail> => {
  try {
    const { data } = await $axios.get(`/posts/${postId}`);
    return data;
  } catch (err) {
    console.log(err);
  }
};
export const fetchPostList = async (params = {}): Promise<PostDetail[]> => {
  try {
    const { data } = await $axios.get('/posts', { params });
    return data;
  } catch (err) {
    console.log(err);
  }
};
