type PostSchema = {
  _id: string;
  title: string;
  text: string;
  author: string;
  timestamp: string;
  status: "published" | "unpublished";
};

type CommentSchema = {
  _id: string;
  title: string;
  text: string;
  username: string;
  timestamp: string;
};

type PostsResponse = {
  data: Array<PostSchema>;
};

type PostProps = {
  data: PostSchema;
};

export type { PostSchema, PostsResponse, PostProps, CommentSchema };
