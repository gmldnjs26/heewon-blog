import { FC, ReactNode, useContext, useEffect } from 'react'
import { Post } from '~/types/global'
import { fetchPosts } from '~/api'
import PostList from '~/components/PostList'
import { PostContext } from '~/context/post-context'

type Props = {
  className?: string
  children?: ReactNode
  posts: Post[]
}

const Home: FC<Props> = (props) => {
  const { posts, handleSetPosts } = useContext(PostContext)
  useEffect(() => {
    handleSetPosts(props.posts)
  }, [])
  return <PostList posts={posts || []} />
}

export default Home

export async function getServerSideProps() {
  const posts = await fetchPosts()
  return {
    props: {
      posts,
    },
  }
}
