import API, { graphqlOperation } from "@aws-amplify/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { searchPosts } from "../../graphql/queries";
import { Posts } from "../../types/posts";
import { Post } from "../../types/post";

export type PostsState = {
  posts: Post[];
  selectPost: Post;
};

const initialState: PostsState = {
  posts: [],
  selectPost: {
    id: "",
    body: "",
    createdAt: "",
    title: "",
    updatedAt: "",
    image: "",
  },
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
function getUniqueStr(myStrong?: number): string {
  let strong = 1000;
  if (myStrong) strong = myStrong;
  return (
    new Date().getTime().toString(16) +
    Math.floor(strong * Math.random()).toString(16)
  );
}
export const getPostsAsync = createAsyncThunk(
  "post/getPostsAsync",
  async () => {
    try {
      const res = (await API.graphql(
        graphqlOperation(searchPosts, querySort)
      )) as Posts;
      const response = res.data.searchPosts.items;
      return response;
    } catch (error) {
      return error.message;
    }
  }
);

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    deletePostFromGlobal: (state, action) => {
      const newPosts = state.posts?.filter(
        (post) => post.id !== action.payload
      );
      state.posts = newPosts;
    },
    createNewPost: (state, action) => {
      const newPost = {
        id: action.payload.id,
        body: action.payload.body,
        createdAt: action.payload.createdAt,
        title: action.payload.title,
        updatedAt: action.payload.updatedAt,
        image: action.payload.image,
      };
      if (newPost) {
        state.posts = [newPost, ...state.posts];
      }
    },
    editPost: (state, action) => {
      const posts = state.posts.filter((post) => post.id !== action.payload.id);
      state.posts = [action.payload, ...posts];
    },
    setSelectPost: (state, action) => {
      const selectPost = state.posts.find((post) => post.id === action.payload);
      if (selectPost) {
        state.selectPost = selectPost;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPostsAsync.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(getPostsAsync.rejected, (action) => {
        alert(action);
      });
  },
});

export const {
  deletePostFromGlobal,
  createNewPost,
  setSelectPost,
  editPost,
} = postSlice.actions;
export const selectPosts = (state: RootState) => state.post.posts;
export const selectSelectPosts = (state: RootState) => state.post.selectPost;

export default postSlice.reducer;
