import { PostSchema } from "../postTypes";

const Post = (data: PostSchema) => {
  return (
    <div>
      <h2>{data.title}</h2>
      <div>{data.text}</div>
    </div>
  );
};

export default Post;
