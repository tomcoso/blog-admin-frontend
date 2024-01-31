import { PostProps } from "../postTypes";
import { useNavigate } from "react-router";

const Post = ({ data }: PostProps) => {
  const navigate = useNavigate();

  const handleView = () => {
    navigate(`/posts/${data._id}`);
  };

  return (
    <div className="post-container">
      <h2>{data.title}</h2>
      <div>{data.text}</div>
      <nav>
        <button onClick={handleView}>View</button>
        <div>
          <span>
            Status : {data.status[0].toUpperCase() + data.status.slice(1)}
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Post;
