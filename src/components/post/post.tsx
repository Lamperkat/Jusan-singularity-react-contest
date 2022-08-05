import { Link } from "react-router-dom";
import { Post as PostProps } from "../../types/posts";

export const Post = ({ id, title, body }: Partial<PostProps>) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
      <Link to={`/edit/${id}`}>edit</Link>
    </div>
  );
};
