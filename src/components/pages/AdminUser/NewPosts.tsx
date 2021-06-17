import { Input } from "@chakra-ui/input";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { memo, useEffect, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { FootButtonLayout } from "../../molecules/FootButtonLayout";
import { TextEditer } from "../../organisms/TextEditer";
import { useHandleSubmit } from "../../../hooks/useHandleSubmit";
import { useGetAdmin } from "../../../hooks/useGetAdmin";
import { Storage } from "aws-amplify";

export const NewPosts: React.VFC = memo(() => {
  const StorageKey = "NewPosts";
  const [preview, setPreview] = useState(false);
  const [title, setTitle] = useState("");
  const [imageName, setImageName] = useState("");
  const { isAdminCheck } = useGetAdmin();
  const [content, setContent] = useState<string>(
    localStorage.getItem(StorageKey) || ""
  );
  const { handleSubmit } = useHandleSubmit(
    StorageKey,
    content,
    setContent,
    title,
    setTitle,
    imageName,
    setImageName
  );
  useEffect(() => {
    isAdminCheck();　
  }, []);

  const onChangePhoto = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      if (!e.target.files[0]) return;
      const file = e.target.files[0];
      try {
        await Storage.put(file.name, file);
        setImageName(file.name);
      } catch (error) {
        alert(error.message);
      }
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
        status="新規投稿"
        handleSubmit={handleSubmit}
        onChangePhoto={onChangePhoto}
      />
    </Box>
  );
});
