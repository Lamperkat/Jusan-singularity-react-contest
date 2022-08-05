import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store";
import { getPostsAction } from "../store/posts/actions";
import { Post } from "../components/post/post";

export const Posts = () => {
  const dispath = useAppDispatch();
  const { data, status } = useAppSelector((state) => state.posts);

  useEffect(() => {
    dispath(getPostsAction());
  }, [dispath]);

  if (status === "idle" || status === "pending") {
    return <div>loading</div>;
  }

  if (status === "fail") {
    return <div>Error</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <Link to="/new">Create new post</Link>
      {data.map((post) => (
        <Post key={post.id} id={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
};
