type PostSchema = {
  _id: string;
  title: string;
  text: string;
  author: string;
  timestamp: Date;
  status: "published" | "unpublished";
};

type PostsResponse = {
  data: Array<PostSchema>;
};

type PostProps = {
  data: PostSchema;
};

export type { PostSchema, PostsResponse, PostProps };
