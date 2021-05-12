import { Box, Flex, Text } from "@chakra-ui/layout";
import React from "react";
import { FaUpload } from "react-icons/fa";
import { BsImage } from "react-icons/bs";

type Prop = {
  submit?: () => void;
  status: string;
  color: string;
  display?: string;
};

export const PrimaryButton: React.VFC<Prop> = (props) => {
  const { status, submit, color, display } = props;
  return (
    <Box
      bg={color}
      h="45px"
      w="110px"
      color="white"
      borderRadius="3px"
      mr="10px"
      _hover={{ cursor: "pointer", opacity: "0.7" }}
      onClick={submit}
      display={display}
    >
      <Flex p="1" ml="1" textAlign="center" mt="2px">
        <Box mt="6px">
          {status === "新規投稿" || status === "更新する" ? (
            <FaUpload color="white" />
          ) : (
            <BsImage color="white" />
          )}
        </Box>
        <Text mt="3px" ml="2" color="white">
          {status}
        </Text>
      </Flex>
    </Box>
  );
};
