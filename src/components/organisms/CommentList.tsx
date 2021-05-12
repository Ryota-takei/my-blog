import API, { graphqlOperation } from "@aws-amplify/api";
import { Input } from "@chakra-ui/input";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Textarea } from "@chakra-ui/textarea";
import { useToast } from "@chakra-ui/toast";
import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countComment, selectComments } from "../../features/comment/commentSlice";
import { createComment } from "../../graphql/mutations";
import { comment } from "../../types/comment";
import { Post } from "../../types/post";

type Prop = {
  post: Post;
};

export const CommentList: React.VFC<Prop> = (props) => {
  const { post } = props;
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [postComments, setPostComments] = useState<Array<comment>>([]);
  const toast = useToast();
  const data = moment().format("YYYY-MM-DD");
  const comments = useSelector(selectComments);
  const dispatch = useDispatch()

  const handleSubmit =  async () => {
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
        setPostComments([...postComments, newComment]);
      }
      dispatch(countComment(postComments.length + 1))
      setComment("");
      setName("");
    } catch (error) {
      alert(error);
    }
  };
  
  useEffect(() => {
    const commentsList = comments.filter(
      (comment) => comment.postID === post.id
    );
    console.log(commentsList.length)
    dispatch(countComment(commentsList.length))
    console.log(comments);
    console.log(commentsList);

    setPostComments(commentsList);
  }, [comments])

 
  return (
    <Box p="5" mb={{ base: "60px", md: "0" }}>
      <Text ml="3" fontSize="20px" fontWeight="bold">
        コメント
      </Text>
      <hr />
      <Box
        pt={{ base: "16px", md: "24px" }}
        px={{ base: "0", md: "32px" }}
        pb={{ base: "16px", md: "0" }}
      >
        {postComments[0] ? (
          <>
            {postComments.map((comment, index) => (
              <Box key={index}>
                <hr  />
                <Box
                  px={{ base: "0", md: "32px" }}
                  py={{ base: "16px", md: "24px" }}
                  
                >
                  <Flex mr="5px" mb="3">
                    <Text>{comment.name}</Text>{" "}
                    <Text ml="auto" display="inline-block">
                      {comment.createdAt}
                    </Text>
                  </Flex>
                  <Text>{comment.content}</Text>
                </Box>
                <hr />
              </Box>
            ))}
          </>
        ) : (
          <Text>このブログにコメントはありません。</Text>
        )}
      </Box>
      <Box pt="24px" px="25px">
        <Box>
          <Textarea
            placeholder="コメントを入力"
            value={comment}
            overflow="hidden"
            overflowWrap="break-word"
            resize="none"
            minH="100px"
            onChange={(e) => setComment(e.target.value)}
          ></Textarea>
        </Box>
        <Flex display={{ base: "block", sm: "flex" }}>
          <Input
            placeholder="名前（無記入の際には匿名となります)"
            w={{ base: "100%", sm: "60%" }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Box
            textAlign="center"
            borderRadius="3px"
            bg="green.400"
            w="65px"
            h="40px"
            ml={{ base: "0", sm: "15px" }}
            mt={{ base: "5px", sm: "0" }}
            _hover={{ cursor: "pointer", opacity: "0.5" }}
            onClick={handleSubmit}
          >
            <Text fontWeight="bold" color="white" lineHeight="40px">
              投稿
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
