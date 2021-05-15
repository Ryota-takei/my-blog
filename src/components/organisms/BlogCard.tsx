import { Image } from "@chakra-ui/image";
import { Box } from "@chakra-ui/layout";
import { memo, useEffect } from "react";
import { Post } from "../../types/post";
import { BlogHeading } from "../molecules/BlogHeading";
import no_image from "../.././images/no_image.jpeg";
import { UseGetUrl } from "../../hooks/UseGetUrl";

type PostType = {
  post: Post;
};

export const BlogCard: React.VFC<PostType> = memo((props) => {
  const { post } = props;
  const { getImage, imageUrl } = UseGetUrl(post);

  useEffect(() => {
    getImage();
  }, [post]);

  return (
    <Box minH={{ base: "220px", md: "270px" }} bg="white" mb="2">
      <Image
        w="100%"
        h={{ base: "160px", md: "200px" }}
        src={imageUrl !== "" ? imageUrl : no_image}
        alt="ブログイメージ写真"
      />
      <BlogHeading post={post} />
    </Box>
  );
});
