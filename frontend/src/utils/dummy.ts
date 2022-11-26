export const postList = [
  {
    id: 1,
    title: '이것은 타이틀이다 1',
    contents: `
# 이 기사에 대해서
## 좀더 그럴싸한 제목을 적어보고자한다.
## 이건 목차 2번으로
### 이건 목차의 목차 3번으로
## 좀 더 그럴싸한 부제목2


A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

## 좀 더 그럴싸한 부제목3

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
| a | b |
| a | b |

## 좀 더 그럴싸한 부제목4

~~~js
  const test = "string"
  const test2 = 12
  function test3 {
    console.log("test2", test)
  }
  console.log("test")
~~~
~~~js
  const test = "string"
  const test2 = 12
  function test3 {
    console.log("test2", test)
  }
  console.log("test")
~~~
~~~js
  const test = "string"
  const test2 = 12
  function test3 {
    console.log("test2", test)
  }
  console.log("test")
~~~
~~~js
  const test = "string"
  const test2 = 12
  function test3 {
    console.log("test2", test)
  }
  console.log("test")
~~~

## 좀 더 그럴싸한 부제목6

~~~js
  const test = "string"
  const test2 = 12
  function test3 {
    console.log("test2", test)
  }
  console.log("test")
~~~
~~~js
  const test = "string"
  const test2 = 12
  function test3 {
    console.log("test2", test)
  }
  console.log("test")
~~~
~~~js
  const test = "string"
  const test2 = 12
  function test3 {
    console.log("test2", test)
  }
  console.log("test")
~~~

~~~ts
  const test: any = "string"
  const test2 = 12
  function test3 {
    console.log("test2", test)
  }
  console.log("test")
~~~

~~~java
  class ClassName {
    private int num = 3;
  }
~~~
`,
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
        id: 21,
        parentId: 2,
        name: 'Redux',
      },
      {
        id: 22,
        parentId: 2,
        name: 'ContextAPI',
      },
      {
        id: 23,
        parentId: 2,
        name: 'Mox',
      },
    ],
  },
  {
    id: 3,
    parentId: 0,
    name: 'Diary',
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
