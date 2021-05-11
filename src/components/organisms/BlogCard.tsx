import { Image } from "@chakra-ui/image";
import { Box } from "@chakra-ui/layout";
import { memo } from "react";
import { Post } from "../../types/post";
import { BlogHeading } from "../molecules/BlogHeading";

type PostType = {
  post: Post;
};

export const BlogCard: React.VFC<PostType> = memo((props) => {
  const { post } = props;

  return (
    <Box minH={{ base: "220px", md: "270px" }} bg="white" mb="2">
      <Image
        w="100%"
        h={{ base: "160px", md: "200px" }}
        src="https://source.unsplash.com/random"
      />
      <BlogHeading post={post} />
    </Box>
  );
});
