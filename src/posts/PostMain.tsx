import { useLoaderData, useNavigate, useParams } from "react-router";
import { CommentSchema, PostSchema } from "./postTypes";
import { makeRequest } from "../auth/utils/authUtils";
import { RequestArgs, RequestResponse } from "../auth/utils/authTypes";
import { useContext, useEffect, useState } from "react";
import { RedirectDispatchContext } from "../context/redirectContext";

type ResponseType = {
  post: PostSchema;
  comments: CommentSchema[];
};

const PostMain = () => {
  const { post, comments }: ResponseType = useLoaderData() as ResponseType;
  const params = useParams();
  const navigate = useNavigate();

  const redirectDispatch = useContext(RedirectDispatchContext);

  const [commentDel, setCommentDel] = useState("");

  useEffect(() => {
    if (commentDel) {
      const handleCommentDelete = async () => {
        const reqData: RequestArgs = {
          method: "delete",
          postid: params.postid,
          commentid: commentDel,
        };
        try {
          const res: RequestResponse = await makeRequest(reqData);
          if (res.status == "badAuth") {
            redirectDispatch({
              type: "write",
              path: `/posts/${params.postid}`,
            });
            navigate("/login");
            return Promise.reject("Redirecting to login..");
          }
          return Promise.resolve();
        } catch (err) {
          return Promise.reject(err);
        }
      };

      handleCommentDelete()
        .then(() => setCommentDel(""))
        .then(() => navigate(`/posts/${params.postid}`))
        .catch((err) => console.error(err));
    }
  }, [commentDel, params, navigate, redirectDispatch]);

  return (
    <main>
      <div className="post-container">
        <h1>{post.title}</h1>
        <p>{new Date(post.timestamp).toDateString()}</p>
        <p>{post.status[0].toUpperCase() + post.status.slice(1)}</p>
      </div>
      <div>{post.text}</div>
      <section className="comments-panel">
        <p>Comments: {comments.length}</p>
        <div>
          {comments.map((x) => (
            <div key={x._id}>
              <p>
                <strong>{x.username}</strong>
              </p>
              <p>{new Date(x.timestamp).toDateString()}</p>
              <p>{x.text}</p>
              <button onClick={() => setCommentDel(x._id)}>Delete</button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default PostMain;
