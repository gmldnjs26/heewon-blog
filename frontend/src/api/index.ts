import axios, { AxiosResponse } from 'axios';
import { Category, PostDetail, PostInput } from '../types/global';

const $axios = axios.create({
  // FIXME: 배포할때 baseURL 수정하자
  baseURL: 'http://localhost:5050',
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

// |이 코드의 좋은 점은 다음과 같습니다.
// |
// |1. 가독성이 좋습니다. 변수명과 함수명이 명확하게 지어져 있고, 코드 블록이 들여쓰기로 구분되어 있어 코드를 이해하기 쉽습니다.
// |2. 중첩된 카테고리를 처리하는 부분이 깔끔하게 구현되어 있습니다. 카테고리 단계가 3단계 이상인 경우와 2단계인 경우, 그리고 1단계인 경우를 모두 고려하여 처리하고 있습니다.
// |
// |하지만 이 코드의 나쁜 점은 다음과 같습니다.
// |
// |1. 에러 처리가 미흡합니다. try-catch 구문으로 감싸져 있지만, 에러가 발생한 경우에 대한 처리가 없습니다. 따라서 에러가 발생하면 콘솔에만 로그를 출력하고 함수는 끝나버리게 됩니다.
// |2. 코드 중복이 있습니다. 중첩된 카테고리를 처리하는 부분에서 코드가 중복되는 부분이 있습니다. 이를 함수로 분리하거나, 더 깔끔하게 구현할 수 있을 것입니다.
// export const fetchCategoryList = async (params = {}): Promise<Category[]> => {
//   try {
//     // depth가 1이상인 카테고리에는 반드시 그 depth-1인 상위 카테고리가 존재한다.
//     const { data } = await $axios.get('/categories');
//     const temp = [];
//     data.forEach((category) => {
//       if (temp[category.depth] && temp[category.depth].length > 0) {
//         temp[category.depth].push(category);
//       } else {
//         temp[category.depth] = new Array(category);
//       }
//     });
//     let result;
//     // 중첩된 카테고리 단계가 3단계 이상
//     if (temp.length > 2) {
//       for (let i = temp.length - 2; i--; i === 0) {
//         if (i === temp.length - 2) {
//           result = temp[i].map((c) => {
//             return {
//               ...c,
//               children: [],
//             };
//           });
//           result.forEach((parent) => {
//             const children = temp[i + 1].filter((children) => children.parent_id === parent.id);
//             if (children.length > 0) parent.children = children;
//           });
//         } else {
//           const result2 = result;
//           result = temp[i];
//           result.forEach((parent) => {
//             const children = result2.filter((children) => children.parent_id === parent.id);
//             if (children.length > 0) parent.children = children;
//           });
//         }
//       }
//     }
//     // 중첩된 카테고리 단계가 2단계
//     else if (temp.length === 2) {
//       result = temp[0].map((c) => {
//         return {
//           ...c,
//           children: [],
//         };
//       });
//       result.forEach((parent) => {
//         const children = temp[1].filter((children) => children.parent_id === parent.id);
//         if (children.length > 0) parent.children = children;
//       });
//     }
//     // 중첩된 카테고리 없고 오직 1단계
//     else {
//       result = temp[0].map((c) => {
//         return {
//           ...c,
//           children: [],
//         };
//       });
//     }
//     return result;
//   } catch (err) {
//     console.log(err);
//   }
// };

export interface Category {
  id: number;
  name: string;
  parent_id: number | null;
  depth: number;
  children?: Category[];
}

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
      if (category.parent_id) {
        const parent = categoryMap[category.parent_id];
        if (parent) {
          parent.children?.push(category);
        }
      }
    });
    return categories.filter((category) => !category.parent_id);
  } catch (err) {
    console.log(err);
    return [];
  }
};
