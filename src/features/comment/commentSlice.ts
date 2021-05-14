import API, { graphqlOperation } from "@aws-amplify/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { searchComments } from "../../graphql/queries";
import { Comments } from "../../types/comments";
import { comment } from "../../types/comment";
import { RootState } from "../../app/store";

export type CommentsState = {
  comments: comment[];
  count: string | number;
};

const initialState: CommentsState = {
  comments: [],
  count: 0,
};

const querySort = Object.assign(
  {},
  {
    sort: {
      field: "createdAt",
      direction: "desc",
    },
    limit: 100,
  }
);
export const getCommentAsync = createAsyncThunk(
  "post/getCommentAsync",
  async () => {
    try {
      const res = (await API.graphql(
        graphqlOperation(searchComments, querySort)
      )) as Comments;
      const response = res.data.searchComments.items;
      return response;
    } catch (error) {
      return error.message;
    }
  }
);

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    countComment: (state, action) => {
      state.count = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCommentAsync.fulfilled, (state, action) => {
        state.comments = action.payload
      })
      .addCase(getCommentAsync.rejected, (action) => {
        alert(action);
      });
  },
});

export const {countComment} = commentSlice.actions;
export const selectComments = (state: RootState) => state.comment.comments;
export const selectCount = (state: RootState) => state.comment.count;

export default commentSlice.reducer;
