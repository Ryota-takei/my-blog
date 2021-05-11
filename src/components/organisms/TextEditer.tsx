import { Box, Flex } from '@chakra-ui/layout';
import SimpleMDE from "react-simplemde-editor";
import marked from "marked";
import { Dispatch, memo, SetStateAction } from 'react';
import "../../reset.css";
import "easymde/dist/easymde.min.css";

type Prop = {
  StorageKey: string;
  preview: boolean;
  content: string;
  setContent: Dispatch<SetStateAction<string>> 
}

export const TextEditer:React.VFC<Prop> = memo((props) => {
  const {StorageKey, preview, content, setContent} = props;
  return (
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
  )
})
