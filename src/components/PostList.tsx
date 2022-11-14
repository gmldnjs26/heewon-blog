import styled from 'styled-components';
import PostItem from './PostItem';

const dummyPostList = [
  {
    id: 1,
    title: '이것은 타이틀이다 1',
    contents: 'a',
    categoryId: 0,
    categoryName: 'c/c',
    createdAt: '2022-09-11',
    comments: [
      {
        writer: 'me',
        contents: 'wow',
      },
    ],
  },
  {
    id: 2,
    title: '이것은 타이틀이다 2',
    contents: 'a',
    categoryId: 0,
    categoryName: 'c/c',
    createdAt: '2022-09-11',
    comments: [
      {
        writer: 'me',
        contents: 'wow',
      },
    ],
  },
  {
    id: 3,
    title: '이것은 타이틀이다 3',
    contents:
      '이것은 내용이다 111 이것은 내용이다 111이것은 내용이다 111이것은 내용이다 111이것은 내용이다 111이것은 내용이다 111이것은 내용이다 111이것은 내용이다 111 이것은 내용이다 111이것은 내용이다 111이것은 내용이다 111이것은 내용이다 111이것은 내용이다 111이것은 내용이다 111이것은 내용이다 111 이것은 내용이다 111이것은 내용이다 111이것은 내용이다 111이것은 내용이다 111이것은 내용이다 111이것은 내용이다 111',
    categoryId: 0,
    categoryName: 'c/c',
    createdAt: '2022-09-11',
    comments: [
      {
        writer: 'me',
        contents: 'wow',
      },
    ],
  },
];

const SC = {
  PostList: styled.ul`
    display: flex;
    flex-direction: column;
    row-gap: 16px;
  `,
};

const PostList = () => {
  return (
    <SC.PostList>
      {dummyPostList.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </SC.PostList>
  );
};

export default PostList;
