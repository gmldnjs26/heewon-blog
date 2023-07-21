import { styled } from '@mui/material/styles'
import { FC, ReactNode, useContext, useRef } from 'react'
import { PostDetail } from '~/types/global'
import PostItem from './PostItem'
import { PostContext } from '~/context/post-context'
import Link from 'next/link'

type Props = {
  className?: string
  children?: ReactNode
  postList: PostDetail[]
}

const SC = {
  PostList: styled('ul')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    rowGap: '24px',
  })),
}

const PostList: FC<Props> = ({ postList }) => {
  const { isLoadingPosts, isNeedMorePosts } = useContext(PostContext)
  const lastPostRef = useRef(null)

  return (
    <SC.PostList>
      {postList.map((post, index) => (
        <Link
          href={`/posts/${post.id}`}
          ref={index === postList.length - 3 ? lastPostRef : undefined}
          key={post.id}
        >
          <PostItem post={post} />
        </Link>
      ))}
    </SC.PostList>
  )
}

export default PostList
