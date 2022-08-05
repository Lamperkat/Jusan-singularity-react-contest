import { createAsyncThunk } from "@reduxjs/toolkit";
import { Post,CreatePostPayload } from "../../types/posts";
import { createPost, editPost, getPosts , getPost} from "./api";
export const getPostsAction = createAsyncThunk("posts/getPosts", async () => {
  const response = await getPosts();
  return response.data;
});
export const getPostAction = createAsyncThunk(
  "posts/getPost",
  async (id: number) => {
    const response = await getPost(id);
    return response.data;
  }
);

export const createPostAction = createAsyncThunk(
  "posts/createPost",
  async (data: CreatePostPayload) => {
    const response = await createPost(data);
    return response.data;
  }
);

export const editPostAction = createAsyncThunk(
  "posts/createPost",
  async (data: Post) => {
    const response = await editPost(data.id, data);
    return response.data;
  }
);
