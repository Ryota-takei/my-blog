import API, { graphqlOperation } from "@aws-amplify/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { listCommentsSortedByTimestamp } from "../../graphql/queries";
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

export const getCommentAsync = createAsyncThunk(
  "post/getCommentAsync",
  async (_, thunkApi) => {
    try {
      const res = (await API.graphql(
        graphqlOperation(listCommentsSortedByTimestamp, {
          type: "comment",
          sortDirection: "DESC",
          limit: 100,
        })
      )) as Comments;
      const response = res.data.listCommentsSortedByTimestamp.items;
      return response;
    } catch (error) {
      thunkApi.rejectWithValue(error);
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
    createCommentList: (state, action) => {
      state.comments = [action.payload, ...state.comments]
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCommentAsync.fulfilled, (state, action) => {
        if (action.payload !== undefined) {
          state.comments = action.payload;
        }
      })
      .addCase(getCommentAsync.rejected, (action) => {
        alert(action);
      });
  },
});

export const { countComment, createCommentList } = commentSlice.actions;
export const selectComments = (state: RootState) => state.comment.comments;
export const selectCount = (state: RootState) => state.comment.count;

export default commentSlice.reducer;
