import React, { useState } from 'react'

export const PostContext = React.createContext({
  posts: [],
  isNeedMorePosts: false,
  isLoadingPosts: false,
  changePosts: (value: []) => {},
  changeIsNeedMorePosts: (value: boolean) => {},
  changeIsLoadingPosts: (value: boolean) => {},
})

export const PostContextProvider = (props) => {
  const [posts, setPosts] = useState([])

  const [isNeedMorePosts, setIsNeedMorePosts] = useState(false)
  const [isLoadingPosts, setIsLoadingPosts] = useState(false)

  const handleChangePosts = (data) => {
    setPosts([...data])
  }

  return (
    <PostContext.Provider
      value={{
        posts,
        isNeedMorePosts,
        isLoadingPosts,
        changePosts: handleChangePosts,
        changeIsNeedMorePosts: setIsNeedMorePosts,
        changeIsLoadingPosts: setIsLoadingPosts,
      }}
    >
      {props.children}
    </PostContext.Provider>
  )
}
