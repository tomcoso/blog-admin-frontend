// import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Post from "./components/Post";
import { PostSchema } from "./postTypes";
import { useEffect } from "react";

const Posts = () => {
  const postData = useLoaderData();

  useEffect(() => {
    console.log(postData);
  }, [postData]);

  return (
    <main>
      {postData ? (
        <>
          {(postData as PostSchema[]).length ? (
            (postData as PostSchema[]).forEach((post) => <Post {...post} />)
          ) : (
            <p>No posts.</p>
          )}
        </>
      ) : (
        <>
          <p>loading..</p>
        </>
      )}
    </main>
  );
};

export default Posts;
