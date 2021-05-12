import API, { graphqlOperation } from "@aws-amplify/api";
import { useDispatch } from "react-redux";
import { deletePostFromGlobal } from "../features/post/postSlice";
import { deletePost } from "../graphql/mutations";
import { Post } from "../types/post";

export const UseDeletePost = (post: Post) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    const input = {
      id: post.id,
    };
    try {
      await API.graphql(graphqlOperation(deletePost, { input }));
    } catch (error) {
      alert(error.message);
    }

    dispatch(deletePostFromGlobal(post.id));
  };

  return { handleDelete };
};
