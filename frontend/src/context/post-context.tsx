import React, { useCallback, useState } from 'react'
import { fetchPosts } from '~/api'
import { Post } from '~/types/global'

export const PostContext = React.createContext({
  posts: [],
  isLoadingPosts: false,
  hasMorePosts: true,
  handleSetPosts: (value: Post[]) => {},
  setIsLoadingPosts: (value: boolean) => {},
  fetchMorePosts: (lastPostId: number) => {},
})

export const PostContextProvider = (props) => {
  const [posts, setPosts] = useState<Post[]>([])

  const handleSetPosts = (posts: Post[]) => {
    setPosts((prevData) => [...prevData, ...posts])
  }

  const [isLoadingPosts, setIsLoadingPosts] = useState(false)

  const [hasMorePosts, setHasMorePosts] = useState(true)

  const fetchMorePosts = useCallback(async (lastPostId: number) => {
    try {
      setIsLoadingPosts(true)
      const data = await fetchPosts({
        last_post_id: lastPostId,
      })
      if (data.length < 10) {
        setHasMorePosts(false)
      }
      handleSetPosts(data)
    } catch (err) {
      console.error(err)
    } finally {
      setIsLoadingPosts(false)
    }
  }, [])

  return (
    <PostContext.Provider
      value={{
        posts,
        isLoadingPosts,
        hasMorePosts,
        handleSetPosts,
        setIsLoadingPosts,
        fetchMorePosts,
      }}
    >
      {props.children}
    </PostContext.Provider>
  )
}
