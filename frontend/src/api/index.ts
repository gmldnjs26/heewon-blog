import axios from 'axios'

const $axios = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true
})

export const createPost = async (inputData: Object) => {
  try {
    await $axios.post('/posts', {
      category_id: 2,
      title: 'title',
      contents: 'contents',
      preview_contents: 'contents2',
      password: '123',
      status: 1
    })
  } catch (err) {
    console.log(err)
  }
}
export const fetchPostDetail = async (postId: string) => {
  try {
    const result = await $axios.get(`/posts/${postId}`)
    return ''
  } catch (err) {
    console.log(err)
  }
}
export const fetchPostList = async (inputData: Object) => {
  try {
    await $axios.post('/posts', {
      category_id: '2',
      title: 'title',
      contents: 'contents',
      preview_contents: 'contents2',
      password: '123',
      status: '1',
    })
  } catch (err) {
    console.log(err)
  }
}