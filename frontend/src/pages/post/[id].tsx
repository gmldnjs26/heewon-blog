import { FC, useEffect, useMemo, useState } from 'react';
import { styled } from '@mui/material/styles';
import PostHeader from '@/components/PostHeader';
import PostBody from '@/components/PostBody';
import PostNavigation from '@/components/PostNavigation';
import { PostDetail } from '@/types/global';
import { postList } from '@/utils/dummy';
import { fetchPostDetail } from '@/api';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

type Props = {
  className?: string;
  post: PostDetail;
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
  const [activeId, setActiveId] = useState('');
  const navInfo = useMemo(() => {
    return post.contents
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
  }, []);

  const { addIntersectHandler, removeIntersectHandler } = useIntersectionObserver();
  useEffect(() => {
    const targetElements = navInfo.map((info) => {
      return document.getElementById(info.text);
    });
    addIntersectHandler(
      targetElements,
      {
        root: null,
        rootMargin: '0px 0px -95% 0px',
        threshold: 0,
      },
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target?.id) {
            setActiveId(entry.target?.id);
          }
        });
      },
    );
    return () => {
      removeIntersectHandler();
    };
  }, [addIntersectHandler, removeIntersectHandler, navInfo]);
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
  const post = await fetchPostDetail(id);
  return {
    props: {
      post,
    },
  };
}
