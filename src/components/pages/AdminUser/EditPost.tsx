import { Input } from "@chakra-ui/input";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { memo, useEffect, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { FootButtonLayout } from "../../molecules/FootButtonLayout";
import { TextEditer } from "../../organisms/TextEditer";
import { useDispatch, useSelector } from "react-redux";
import { editPost, selectSelectPosts } from "../../../features/post/postSlice";
import API, { graphqlOperation } from "@aws-amplify/api";
import { updatePost } from "../../../graphql/mutations";
import { useHistory } from "react-router";
import { UseGetAdmin } from "../../../hooks/UseGetAdmin";
import { UseGetUrl } from "../../../hooks/UseGetUrl";
import { PostInput } from "../../../types/postInput";

export const EditPosts: React.VFC = memo(() => {
  const selectPost = useSelector(selectSelectPosts);
  const StorageKey = "EditPosts";
  const [preview, setPreview] = useState(false);
  const [title, setTitle] = useState(selectPost.title);
  const [content, setContent] = useState<string>(selectPost.body);
  const dispatch = useDispatch();
  const history = useHistory();
  const { isAdminCheck } = UseGetAdmin();
  const { getImage, imageUrl } = UseGetUrl(selectPost);

  useEffect(() => {
    isAdminCheck();
    getImage();
  }, []);

  const handleSubmit = async () => {
    const input: PostInput = {
      id: selectPost.id,
      title,
      body: content,
      timestamp: selectPost.timestamp,
      updatedAt: Math.floor(Date.now() / 1000),
    };
    try {
      await API.graphql(graphqlOperation(updatePost, { input }));
      const Payload = { ...input, image: selectPost.image };
      dispatch(editPost(Payload));
      setContent("");
      setTitle("");
      history.push("/adminUser");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Box w="100%" mx="auto" bg="white">
      <Box w="98%" mx="auto" mb={{ base: "0", md: "3px" }}>
        <Input
          placeholder="タイトル"
          variant="outline"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></Input>
      </Box>
      <Box bg="gray.50" h="30px" display={{ base: "block", md: "none" }} mt="0">
        <Flex opacity="0.5" justifyContent="space-between" mr="2" ml="2">
          <Text>{preview ? "プレビュー" : "本文"}</Text>
          <Box
            onClick={() => setPreview(!preview)}
            _hover={{ cursor: "pointer" }}
          >
            {preview ? (
              <HiOutlinePencilAlt size="20px" />
            ) : (
              <AiFillEye size="20px" />
            )}
          </Box>
        </Flex>
      </Box>

      <TextEditer
        StorageKey={StorageKey}
        preview={preview}
        content={content}
        setContent={setContent}
      />
      <FootButtonLayout
        status="更新する"
        display="none"
        handleSubmit={handleSubmit}
      />
    </Box>
  );
});
