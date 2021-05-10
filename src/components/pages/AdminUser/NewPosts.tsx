import { Input } from "@chakra-ui/input";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { memo, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { FaUpload } from "react-icons/fa";
import { useToast } from "@chakra-ui/toast";
import SimpleMDE from "react-simplemde-editor";
import marked from "marked";
import API, { graphqlOperation } from "@aws-amplify/api";
import { createPost } from "../../../graphql/mutations";
import "../../../reset.css";
import "easymde/dist/easymde.min.css";

export const NewPosts: React.VFC = memo(() => {
  const [preview, setPreview] = useState(false);
  const [title, setTitle] = useState("");
  const StorageKey = "NewPosts";
  const [content, setContent] = useState<string>(
    localStorage.getItem(StorageKey) || ""
  );
  const toast = useToast();

  const handleSubmit = async () => {
    if (title === "") {
      toast({
        title: "タイトルを入力して下さい",
        status: "error",
        isClosable: true,
      });
      return;
    } else if (content === "") {
      toast({
        title: "本文を入力して下さい",
        status: "error",
        isClosable: true,
      });
      return;
    }
    const input = {
      title: title,
      body: content,
    };
    try {
      await API.graphql(graphqlOperation(createPost, { input }));
      setContent("");
      setTitle("");
    } catch (error) {
      console.log(error);
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

      <Flex>
        <Box
          w={{ base: "100%", md: "50%" }}
          borderColor="gray.100"
          borderRight={{ base: "none", md: "1px" }}
          display={{ base: preview ? "none" : "block", md: "block" }}
        >
          <SimpleMDE
            onChange={(event) => {
              const changedText = event;
              localStorage.setItem(StorageKey, changedText);
              setContent(changedText);
            }}
            value={content}
          />
        </Box>
        <Box
          w={{ base: "100%", md: "50%" }}
          h="77vh"
          display={{ base: preview ? "block" : "none", md: "block" }}
          p="5"
          id="body"
        >
          <span dangerouslySetInnerHTML={{ __html: marked(content) }} />
        </Box>
      </Flex>
      <Box bg="gray.50" h="50px" pt="2">
        <Box
          bg="green.400"
          h="37px"
          w="110px"
          color="white"
          borderRadius="3px"
          ml="auto"
          mr="10px"
          _hover={{ cursor: "pointer", opacity: "0.7" }}
          onClick={handleSubmit}
        >
          <Flex p="1" ml="1" textAlign="center" mt="5px">
            <Box mt="6px">
              <FaUpload color="white" />
            </Box>
            <Text mt="3px" ml="2">
              新規投稿
            </Text>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
});
