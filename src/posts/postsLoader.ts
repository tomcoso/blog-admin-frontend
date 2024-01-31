import { Params } from "react-router";
import { PostSchema, PostsResponse } from "./postTypes";

const postsLoader = async (): Promise<Array<object>> => {
  const res = await fetch("https://tomcoso-blog.onrender.com/posts");
  const resData: PostsResponse = (await res.json()) as PostsResponse;
  const posts = resData.data;
  return posts;
};

const postMainLoader = async ({ params }: { params: Params<"postid"> }) => {
  type resType = {
    data: { post: PostSchema; comments: [] };
  };
  try {
    const res = await fetch(
      `https://tomcoso-blog.onrender.com/posts/${params.postid}`
    );
    const resData = (await res.json()) as resType;
    return resData.data;
  } catch (err) {
    console.error(err);
    return err;
  }
};

export { postsLoader, postMainLoader };
