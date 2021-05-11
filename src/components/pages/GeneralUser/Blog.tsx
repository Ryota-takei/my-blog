import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { AiOutlineClockCircle, AiOutlineHeart } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import { BsTrash } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { selectAdmin } from "../../../features/user/userSlice";
import { memo, useEffect, useRef, useState } from "react";
import { UseGetAdmin } from "../../../hooks/UseGetAdmin";
import { Post } from "../../../types/post";
import "../../../reset.css";
import marked from "marked";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
} from "@chakra-ui/modal";
import { Button } from "@chakra-ui/button";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { deletePost } from "../../../graphql/mutations";
import API from "@aws-amplify/api";
import { useHistory } from "react-router";
import {
  deletePostFromGlobal,
  setSelectPost,
} from "../../../features/post/postSlice";

type PostType = {
  post: Post;
};

export const Blog: React.VFC<PostType> = memo((props) => {
  const { post } = props;
  const admin = useSelector(selectAdmin);
  const dispatch = useDispatch();
  const { getUserInfo } = UseGetAdmin();
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef: any = useRef();
  const content: any = post.body;
  const history = useHistory();

  useEffect(() => {
    getUserInfo();
  }, []);

  const handleDelete = async () => {
    const input = {
      id: post.id,
    };
    try {
      await API.graphql(graphqlOperation(deletePost, { input }));
    } catch (error) {
      alert(error.message);
    } finally {
      onClose();
      history.push("/adminUser");
    }
    dispatch(deletePostFromGlobal(post.id));
  };

  const handleEdit = () => {
    dispatch(setSelectPost(post.id));
    history.push("/adminUser/editPost");
  };
  return (
    <>
      <Box w={{ base: "90%", md: "640px" }} mx="auto" h="100vh" bg="white">
        <Image
          src="https://source.unsplash.com/random"
          alt="blog image"
          w="100%"
          h={{ base: "300px", md: "450px" }}
          backgroundSize="cover"
        />
        <Heading as="h1" p={{ base: "1", md: "2" }}>
          {post.title}
        </Heading>
        <Flex p="2">
          <Flex textAlign="center">
            <Box h="15px">
              <AiOutlineClockCircle />
            </Box>
            <Text ml="0.5" lineHeight="15px">
              {post.createdAt}
            </Text>
          </Flex>
          <Flex ml="4">
            <Box h="15px">
              <GrUpdate size="14px" />
            </Box>
            <Text ml="0.5" lineHeight="15px">
              {post.updatedAt}
            </Text>
          </Flex>
          <Flex ml="4">
            <Box h="15px">
              <AiOutlineHeart />
            </Box>
            <Text ml="0.5" lineHeight="15px">
              0
            </Text>
          </Flex>
        </Flex>
        <hr />
        {admin && (
          <Flex mt="3" ml="2">
            <Flex
              textAlign="center"
              _hover={{ opacity: "0.5", cursor: "pointer" }}
              onClick={handleEdit}
            >
              <Box h="15px">
                <AiOutlineEdit />
              </Box>
              <Text ml="0.5" lineHeight="15px">
                編集する
              </Text>
            </Flex>
            <Flex
              textAlign="center"
              ml="1"
              _hover={{ opacity: "0.5", cursor: "pointer" }}
              onClick={() => setIsOpen(true)}
            >
              <Box h="15px">
                <BsTrash />
              </Box>
              <Text ml="0.5" lineHeight="15px">
                削除する
              </Text>
            </Flex>
          </Flex>
        )}
        <Box p="5">
          <span dangerouslySetInnerHTML={{ __html: marked(content) }} />
        </Box>
      </Box>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Post
            </AlertDialogHeader>

            <AlertDialogBody>本当に削除しますか？</AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handleDelete} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
});
