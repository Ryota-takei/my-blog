import API, { graphqlOperation } from "@aws-amplify/api";
import { useToast } from "@chakra-ui/toast";
import  { useState } from "react";
import { useDispatch } from "react-redux";
import {
  countComment,
  createCommentList,
} from "../features/comment/commentSlice";
import { createComment } from "../graphql/mutations";
import { comment } from "../types/comment";
import { Post } from "../types/post";

export const useCreateComment = (post: Post) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [postComments, setPostComments] = useState<Array<comment>>([]);
  const toast = useToast();
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    if (comment === "") {
      toast({
        title: "コメントを記入して下さい",
        status: "error",
        isClosable: true,
      });
      return;
    }

    const input = {
      type: "comment",
      postID: post.id,
      name: name !== "" ? name : "匿名さん",
      timestamp: Math.floor(Date.now() / 1000),
      content: comment,
    };
    try {
      await API.graphql(graphqlOperation(createComment, { input }));
      if (post.id) {
        const newComment: comment = { ...input, id: post.id };
        setPostComments([newComment, ...postComments]);
        dispatch(createCommentList(newComment));
      }
      dispatch(countComment(postComments.length + 1));
      setComment("");
      setName("");
    } catch (error) {
      alert(error.message);
      console.log(error);
    }
  };

  return {
    handleSubmit,
    comment,
    setComment,
    name,
    setName,
    postComments,
    setPostComments,
  };
};
