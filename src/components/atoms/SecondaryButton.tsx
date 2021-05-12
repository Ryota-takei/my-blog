import { Box, Flex, Text } from "@chakra-ui/layout";
import React from "react";
import { FaUpload } from "react-icons/fa";
import { BsImage } from "react-icons/bs";
import { Input } from "@chakra-ui/input";

type Prop = {
  submit?: () => void;
  status: string;
  color: string;
  display?: string;
  type?: string;
  onChangePhoto?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SecondaryButton: React.VFC<Prop> = (props) => {
  const { status, submit, color, display, type, onChangePhoto } = props;
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
      <label htmlFor="photo">
        <Flex p="1" ml="1" textAlign="center" mt="2px" type={type}>
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
        {status === "画像投稿" && (
          <Input
            type={type}
            display="none"
            id="photo"
            onChange={onChangePhoto}
          />
        )}
      </label>
    </Box>
  );
};
