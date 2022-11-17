export const postList = [
  {
    id: 1,
    title: '이것은 타이틀이다 1',
    contents: 'a',
    categoryId: 0,
    categoryName: 'Vue',
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
    categoryName: 'React',
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
    categoryName: 'Go',
    createdAt: '2022-09-11',
    comments: [
      {
        writer: 'me',
        contents: 'wow',
      },
    ],
  },
];

export type Category = {
  id: number;
  parentId: number; // 0는 자기가 제일 상위 카테고리일때
  name: string;
  children?: Category[];
};

export const categories: Category[] = [
  {
    id: 1,
    parentId: 0,
    name: 'Vue',
    children: [
      {
        id: 11,
        parentId: 1,
        name: 'Composition',
      },
    ],
  },
  {
    id: 2,
    parentId: 0,
    name: 'React',
    children: [
      {
        id: 11,
        parentId: 1,
        name: 'Composition',
      },
    ],
  },
  {
    id: 3,
    parentId: 0,
    name: '일기',
  },
  {
    id: 4,
    parentId: 0,
    name: 'Go',
    children: [
      {
        id: 41,
        parentId: 4,
        name: 'gorm',
      },
    ],
  },
];
