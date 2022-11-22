import { styled } from '@mui/material/styles';
import { FC, ReactNode } from 'react';
import MarkDownView from './MarkDownView';

type Props = {
  className?: string;
  children?: ReactNode;
};

const SC = {
  PostBody: styled('div')(({ theme }) => ({})),
};
const markdown = `
# Title1
## Title2
### Title3
A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
| a | b |
| a | b |

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
`;

const PostBody: FC<Props> = () => {
  return <MarkDownView markdown={markdown} />;
};

export default PostBody;
