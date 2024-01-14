import { PostsResponse } from "./postTypes";

const postsLoader = async (): Promise<Array<object>> => {
  const res = await fetch("https://tomcoso-blog.onrender.com/posts");
  const resData: PostsResponse = (await res.json()) as PostsResponse;
  const posts = resData.data;
  return posts;
};

export default postsLoader;
