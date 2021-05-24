import { Input } from "@chakra-ui/input";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Textarea } from "@chakra-ui/textarea";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  countComment,
  selectComments,
} from "../../features/comment/commentSlice";
import { Post } from "../../types/post";
import { UseCreateComment } from "../../hooks/UseCreateComment";
import { PaginationBox } from "../molecules/Pagination";
import { Comment } from "../molecules/Comment";

type Prop = {
  post: Post;
};

export const CommentList: React.VFC<Prop> = (props) => {
  const { post } = props;
  const {
    handleSubmit,
    comment,
    setComment,
    name,
    setName,
    postComments,
    setPostComments,
  } = UseCreateComment(post);
  const comments = useSelector(selectComments);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(5);
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPostComments = postComments.slice(
    indexOfFirstPost,
    indexOfLastPost
  );
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  useEffect(() => {
    const commentsList = comments.filter(
      (comment) => comment.postID === post.id
    );
    dispatch(countComment(commentsList.length));
    setPostComments(commentsList);
  }, [comments]);

  return (
    <>
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
              {currentPostComments.map((comment, index) => (
                <Comment key={index} comment={comment} />
              ))}
            </>
          ) : (
            <Text>このブログにコメントはありません。</Text>
          )}
          <Box mt="3" style={{ textAlign: "center" }}>
            <PaginationBox
              postPerPage={postPerPage}
              totalPosts={postComments.length}
              paginate={paginate}
            />
          </Box>
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
    </>
  );
};
