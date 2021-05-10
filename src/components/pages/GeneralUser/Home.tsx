import { Box, SimpleGrid } from "@chakra-ui/layout";
import React, { memo } from "react";
import { Link } from "react-router-dom";
import { BlogCard } from "../../organisms/BlogCard";

export const Home: React.VFC = memo(() => {
  return (
    <Box w={{ base: "90%", md: "70%" }} mx="auto" h="100vh">
      <SimpleGrid columns={{ base: 2, lg: 3 }} spacing={5}>
        <Link to="/blog/1">
          <BlogCard />
        </Link>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </SimpleGrid>
    </Box>
  );
});
