// import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Post from "./components/Post";
import { PostSchema } from "./postTypes";
import { useEffect } from "react";
import "./styling/posts.scss";

const Posts = () => {
  const postData = useLoaderData();

  useEffect(() => {
    console.log(postData);
  }, [postData]);

  return (
    <main>
      {(postData as PostSchema[]).length ? (
        <>
          {(postData as PostSchema[]).map((post) => (
            <Post data={post} key={post._id} />
          ))}
        </>
      ) : (
        <>
          <p>No posts.</p>
        </>
      )}
    </main>
  );
};

export default Posts;
