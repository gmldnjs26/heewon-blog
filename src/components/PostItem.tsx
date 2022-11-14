import styled from 'styled-components';
import { FC } from 'react';
import { primary_two } from '../utils/styleHelper';
import ChatIcon from '@mui/icons-material/Chat';

type Props = {
  post: {
    id: number;
    title: string;
    contents: string;
    categoryId: number;
    categoryName: string;
    createdAt: string;
    comments: {
      writer: string;
      contents: string;
    }[];
  };
};

const SC = {
  PostItem: styled.li`
    display: flex;
    width: 100%;
    height: 180px;
    background: #fff;
    border-radius: 3px;
  `,
  PostImageWrapper: styled.div`
    background: ${primary_two};
    padding: 8px;
    min-width: 200px;
  `,
  PostMainWrapper: styled.div`
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,
  PostTitle: styled.h2`
    font-size: 20px;
  `,
  PostContents: styled.p`
    font-size: 14px;
    overflow: hidden;
    min-height: 64px;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  `,
  PostMetaInfo: styled.div`
    display: flex;
    font-size: 12px;
    column-gap: 8px;
  `,
  PostCommentInfoWrapper: styled.div`
    display: flex;
    align-items: center;
  `,
  PostCommentIcon: styled(ChatIcon)`
    font-size: 16px;
    margin-right: 4px;
  `,
};

const PostItem: FC<Props> = ({ post }) => {
  return (
    <SC.PostItem>
      <SC.PostImageWrapper>
        <img src="#" />
      </SC.PostImageWrapper>
      <SC.PostMainWrapper>
        <SC.PostTitle>{post.title}</SC.PostTitle>
        <SC.PostContents>{post.contents}</SC.PostContents>
        <SC.PostMetaInfo>
          <span>{post.categoryName}</span>
          <span>{post.createdAt}</span>
          <SC.PostCommentInfoWrapper>
            <SC.PostCommentIcon />
            {post.comments.length}
          </SC.PostCommentInfoWrapper>
        </SC.PostMetaInfo>
      </SC.PostMainWrapper>
    </SC.PostItem>
  );
};

export default PostItem;
