import { useEffect } from "react";
import { PostProps } from "../postTypes";

const Post = ({ data }: PostProps) => {
  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleEdit = () => {};

  const handleDelete = () => {};

  const handleStatusChange = () => {};

  const handleView = () => {};

  return (
    <div className="post-container">
      {/* TODO edit button */}
      {/* TODO delete button */}
      {/* TODO status and publish button */}
      {/* TODO view button */}
      <h2>{data.title}</h2>
      <div>{data.text}</div>
      <nav>
        <button onClick={handleView}>View</button>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
        <div>
          <span>
            Status : {data.status[0].toUpperCase() + data.status.slice(1)}
          </span>
          <button onClick={handleStatusChange}>
            {data.status === "published" ? "Unpublish" : "Publish"}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Post;
