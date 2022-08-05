import { createSlice } from "@reduxjs/toolkit";
import { getPostAction, getPostsAction } from "./actions";
import { Post } from "../../types/posts";

type State = {
  status: "idle" | "pending" | "success" | "fail";
  data: Post[];
  dataById: Record<string, Post>;
};

const initialState: State = {
  status: "idle",
  data: [],
  dataById: {}
};

export const slice = createSlice({
  name: "test",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getPostsAction.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getPostsAction.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(getPostAction.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getPostAction.fulfilled, (state, action) => {
        const { payload } = action;
        state.status = "success";
        state.dataById[payload.id] = payload;
      })
});
