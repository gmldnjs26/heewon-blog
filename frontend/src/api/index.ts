import axios, { AxiosResponse } from 'axios';
import { Category, PostDetail, PostInput } from '../types/global';

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

export const fetchCategoryList = async (params = {}): Promise<Category[]> => {
  try {
    // depth가 1이상인 카테고리에는 반드시 그 depth-1인 상위 카테고리가 존재한다.
    const { data } = await $axios.get('/categories');
    const temp = [];
    data.forEach((category) => {
      if (temp[category.depth] && temp[category.depth].length > 0) {
        temp[category.depth].push(category);
      } else {
        temp[category.depth] = new Array(category);
      }
    });
    let result;
    // 중첩된 카테고리 단계가 3단계 이상
    if (temp.length > 2) {
      for (let i = temp.length - 2; i--; i === 0) {
        if (i === temp.length - 2) {
          result = temp[i].map((c) => {
            return {
              ...c,
              children: [],
            };
          });
          result.forEach((parent) => {
            const children = temp[i + 1].filter((children) => children.parent_id === parent.id);
            if (children.length > 0) parent.children = children;
          });
        } else {
          const result2 = result;
          result = temp[i];
          result.forEach((parent) => {
            const children = result2.filter((children) => children.parent_id === parent.id);
            if (children.length > 0) parent.children = children;
          });
        }
      }
    }
    // 중첩된 카테고리 단계가 2단계
    else if (temp.length === 2) {
      result = temp[0].map((c) => {
        return {
          ...c,
          children: [],
        };
      });
      result.forEach((parent) => {
        const children = temp[1].filter((children) => children.parent_id === parent.id);
        if (children.length > 0) parent.children = children;
      });
    }
    // 중첩된 카테고리 없고 오직 1단계
    else {
      result = temp[0].map((c) => {
        return {
          ...c,
          children: [],
        };
      });
    }
    return result;
  } catch (err) {
    console.log(err);
  }
};
