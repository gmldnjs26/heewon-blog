import { FC, useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import PostHeader from '../../components/PostHeader';
import PostBody from '../../components/PostBody';
import PostNavigation from '../../components/PostNavigation';
import { Post } from '../../types/global';
import { postList } from '../../utils/dummy';

import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

type Props = {
  className?: string;
  post: Post;
};

const SC = {
  Post: styled('div')(({ theme }) => ({
    display: 'flex',
  })),
  Main: styled('div')(({ theme }) => ({
    flex: '1',
  })),
  PostNavigation: styled(PostNavigation)(({ theme }) => ({
    position: 'sticky',
    top: 'calc(1.5rem + 70px)',
    marginLeft: '24px',
    height: 'fit-content',
  })),
};

const Post: FC<Props> = ({ post }) => {
  const intersectionObserver = useIntersectionObserver({
    root: null, // 今回はビューポートをルート要素とする
    rootMargin: '0px 0px -95% 0px',
    threshold: 0.3, // 가시성 30%
  });
  const [activeId, setActiveId] = useState('');

  const navInfo = post.contents
    .split('\n')
    .filter((item) => {
      // temp[0]가 #이 되면 markdown 규칙에서 h1이 되는것
      const temp = item.split(' ');
      if (temp.length > 0 && ['#', '##', '###'].includes(temp[0])) return true;
      return false;
    })
    .map((item) => {
      const temp = item.split(' ');
      if (temp.length > 0) {
        if (temp[0] === '#') {
          return {
            deep: 1,
            text: temp.splice(1).join(' ').toString(),
          };
        }
        if (temp[0] === '##') {
          return {
            deep: 2,
            text: temp.splice(1).join(' ').toString(),
          };
        }
        if (temp[0] === '###') {
          return {
            deep: 3,
            text: temp.splice(1).join(' ').toString(),
          };
        }
      }
    });
  useEffect(() => {
    const targetElements = navInfo.map((info) => {
      return document.getElementById(info.text);
    });
    console.log(targetElements);
    intersectionObserver.addIntersectHandler(targetElements, (entries) => {
      console.log('entries', entries);
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target?.id) {
            setActiveId((prev) => {
              if (prev !== entry.target?.id) return entry.target?.id;
            });
          }
        }
      });
    });
    return () => {
      intersectionObserver.removeIntersectHandler();
    };
  }, [intersectionObserver, navInfo]);
  return (
    <SC.Post>
      <SC.Main>
        <PostHeader post={post} />
        <PostBody post={post} />
      </SC.Main>
      <SC.PostNavigation navInfo={navInfo} activeNavId={activeId} />
    </SC.Post>
  );
};

export default Post;

export async function getServerSideProps(context) {
  const { id } = context.query;

  // fetch data and can use req.params or etc..
  const post = postList.find((post) => post.id === Number(id));

  return {
    props: {
      post,
    },
  };
}
