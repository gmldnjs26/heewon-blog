import { FC, ReactNode } from 'react'
import { Post } from '~/types/global'
import { fetchPosts } from '~/api'
import PostList from '~/components/PostList'

type Props = {
  className?: string
  children?: ReactNode
  postList: Post[]
}

const Home: FC<Props> = ({ postList }) => {
  return <PostList postList={postList} />
}

export default Home

export async function getServerSideProps(ctx) {
  const postList = await fetchPosts({ category_name: ctx.params.name })
  return {
    props: {
      postList: postList || [],
    },
  }
}
