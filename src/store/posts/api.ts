import { Post,CreatePostPayload } from "../../types/posts";
import { api } from "../api";

export const getPosts = () => {
  return api.get("/posts");
};

export const getPost = (id: number) => {
  return api.get(`/posts/${id}`);
};


export const createPost = (data: CreatePostPayload) => {
  return api.post("/post", data);
};

export const editPost = (id: number, data: Partial<Post>) => {
  return api.patch(`/post/${id}`, data);
};
