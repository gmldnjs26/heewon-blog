import { styled } from '@mui/material/styles'
import { FC, ReactNode, useContext, useEffect, useRef } from 'react'
import { Post } from '~/types/global'
import PostItem from './PostItem'
import { PostContext } from '~/context/post-context'
import Link from 'next/link'
import { useIntersectionObserver } from '~/hooks/useIntersectionObserver'
import Loading from './Loading'

type Props = {
  className?: string
  children?: ReactNode
  posts: Post[]
}

const SC = {
  PostList: styled('ul')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    rowGap: '24px',
  })),
  LoadingWrapper: styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    margin: '16px 0',
  })),
}

const PostList: FC<Props> = ({ posts }) => {
  const { isLoadingPosts, hasMorePosts, fetchMorePosts } = useContext(PostContext)

  const lastPostRef = useRef(null)
  const { addIntersectHandler, removeIntersectHandler } = useIntersectionObserver()
  useEffect(() => {
    if (!lastPostRef.current || !hasMorePosts) return
    const targets = [lastPostRef.current]
    addIntersectHandler(targets, null, (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          fetchMorePosts(posts[posts.length - 1].id)
        }
      })
    })
    return () => removeIntersectHandler()
  }, [posts])

  return (
    <SC.PostList>
      {posts.map((post, index) => (
        <Link
          href={`/posts/${post.id}`}
          ref={index === posts.length - 3 ? lastPostRef : undefined}
          key={index}
        >
          <PostItem post={post} />
        </Link>
      ))}
      {isLoadingPosts && (
        <SC.LoadingWrapper>
          <Loading />
        </SC.LoadingWrapper>
      )}
    </SC.PostList>
  )
}

export default PostList
