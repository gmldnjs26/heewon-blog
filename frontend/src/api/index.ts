import axios, { AxiosResponse } from 'axios';
import { Category, PostDetail, PostInput } from '../types/global';

let baseURL;
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:5050';
} else {
  baseURL = 'http://35.75.138.20:5050';
}

const $axios = axios.create({
  // FIXME: 배포할때 baseURL 수정하자
  baseURL,
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

export const fetchCategoryList = async (): Promise<Category[]> => {
  try {
    const { data } = await $axios.get('/categories');
    const categories: Category[] = data.map((category: Category) => ({
      ...category,
      children: [],
    }));
    const categoryMap = categories.reduce((map, category) => {
      map[category.id] = category;
      return map;
    }, {});

    categories.forEach((category) => {
      if (category.parentId) {
        const parent = categoryMap[category.parentId];
        if (parent) {
          parent.children?.push(category);
        }
      }
    });
    return categories.filter((category) => !category.parentId);
  } catch (err) {
    console.log(err);
    return [];
  }
};
