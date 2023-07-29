import { FC, ReactNode } from 'react'
import { Post } from '~/types/global'
import { fetchPosts } from '~/api'
import PostList from '~/components/PostList'

type Props = {
  className?: string
  children?: ReactNode
  posts: Post[]
}

const Home: FC<Props> = ({ posts }) => {
  return <PostList posts={posts} />
}

export default Home

export async function getServerSideProps(ctx) {
  const posts = await fetchPosts({ category_name: ctx.params.name })
  return {
    props: {
      posts: posts || [],
    },
  }
}
