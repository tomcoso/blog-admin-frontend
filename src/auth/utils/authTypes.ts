import { PostSchema } from "../../posts/postTypes";

type RequestArgs = {
  method: "post" | "get" | "delete" | "put";
  postid?: string;
  commentid?: string;
  data?: PostSchema | string;
};

type RequestResponse = {
  status: string;
  body: object;
};

export type { RequestArgs, RequestResponse };
