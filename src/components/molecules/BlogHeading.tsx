import { Box, Flex, Text } from "@chakra-ui/layout";
import { memo } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { UseGetCreateDate } from "../../hooks/UseGetCreateDate";
import { Post } from "../../types/post";

type PostType = {
  post: Post;
};

export const BlogHeading: React.VFC<PostType> = memo((props) => {
  const { post } = props;
  const { createDate } = UseGetCreateDate(post.timestamp);
  return (
    <>
      <Flex p="2">
        <Flex textAlign="center">
          <Box h="15px">
            <AiOutlineClockCircle />
          </Box>
          <Text ml="0.5" lineHeight="15px">
            {createDate}
          </Text>
        </Flex>
      </Flex>
      <Box h="6rem" overflow="hidden" textOverflow="ellipsis">
        <Text fontWeight="bold" fontSize="15px" p={{ base: "1", md: "2" }}>
          {post.title}
        </Text>
      </Box>
    </>
  );
});
