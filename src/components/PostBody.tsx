import { styled } from '@mui/material/styles';
import { FC, ReactNode } from 'react';
import MarkDown from './MarkDown';

type Props = {
  className?: string;
  children?: ReactNode;
};

const SC = {
  PostBody: styled('div')(({ theme }) => ({})),
};
const markdown = `
# TItle
A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |

~~~js
  console.log("test")
~~~
`;

const PostBody: FC<Props> = () => {
  return <MarkDown markdown={markdown} />;
};

export default PostBody;
