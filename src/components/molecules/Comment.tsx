import { Box, Flex, Text } from "@chakra-ui/layout";
import React from "react";
import { UseGetCreateDate } from "../../hooks/UseGetCreateDate";
import { comment } from "../../types/comment";

type Prop = {
  comment: comment;
};

export const Comment: React.VFC<Prop> = (props) => {
  const { comment } = props;
  const { createDate } = UseGetCreateDate(comment.timestamp);

  return (
    <Box>
      <hr />
      <Box px={{ base: "0", md: "32px" }} py={{ base: "16px", md: "24px" }}>
        <Flex mr="5px" mb="3">
          <Text>{comment.name}</Text>{" "}
          <Text ml="auto" display="inline-block">
            {createDate}
          </Text>
        </Flex>
        <Text>{comment.content}</Text>
      </Box>
      <hr />
    </Box>
  );
};
