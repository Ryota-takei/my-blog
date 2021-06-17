import { Box, SimpleGrid } from "@chakra-ui/layout";
import React, { memo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectPosts } from "../../features/post/postSlice";
import { BlogCard } from "../organisms/BlogCard";

export const Home: React.VFC = memo(() => {
  const posts = useSelector(selectPosts);

  return (
    <Box w={{ base: "90%", md: "70%" }} mx="auto" minH="100vh">
      <SimpleGrid columns={{ base: 2, lg: 3 }} spacing={5}>
        {posts &&
          posts?.map((post, index) => (
            <Link to={`/${post.id}`} key={index}>
              <BlogCard post={post} />
            </Link>
          ))}
      </SimpleGrid>
    </Box>
  );
});
