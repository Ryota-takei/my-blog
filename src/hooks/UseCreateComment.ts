import API, { graphqlOperation } from "@aws-amplify/api";
import { useToast } from "@chakra-ui/toast";
import moment from "moment";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { countComment } from "../features/comment/commentSlice";
import { createComment } from "../graphql/mutations";
import { comment } from "../types/comment";
import { Post } from "../types/post";

export const UseCreateComment = (post: Post) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [postComments, setPostComments] = useState<Array<comment>>([]);
  const toast = useToast();
  const dispatch = useDispatch();
  const data = moment().format("YYYY-MM-DD");

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
      postID: post.id,
      name: name !== "" ? name : "匿名さん",
      createdAt: data,
      content: comment,
    };
    try {
      await API.graphql(graphqlOperation(createComment, { input }));
      if (post.id) {
        const newComment: comment = { ...input, id: post.id };
        setPostComments([newComment, ...postComments]);
      }
      dispatch(countComment(postComments.length + 1));
      setComment("");
      setName("");
    } catch (error) {
      alert(error.message);
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
