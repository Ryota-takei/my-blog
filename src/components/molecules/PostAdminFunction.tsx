import { Box, Flex, Text } from "@chakra-ui/layout";
import React, { Dispatch, SetStateAction } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";

type Prop = {
  handleEdit: () => void;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const PostAdminFunction: React.VFC<Prop> = (props) => {
  const { handleEdit, setIsOpen } = props;
  return (
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
  );
};
