import { Box, SimpleGrid } from "@chakra-ui/layout";
import React, { memo, useEffect } from "react";
import { Link } from "react-router-dom";
import { BlogCard } from "../../organisms/BlogCard";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { useSelector } from "react-redux";
import { UseGetAdmin } from "../../../hooks/UseGetAdmin";
import { selectPosts } from "../../../features/post/postSlice";

const AdminHome: React.VFC = memo(() => {
  const posts = useSelector(selectPosts);
  const { getUserInfo } = UseGetAdmin();
  useEffect(() => {
    getUserInfo();
  }, []);


  return (
    <Box w={{ base: "90%", md: "70%" }} mx="auto" minH="100vh">
      <SimpleGrid columns={{ base: 2, lg: 3 }} spacing={5}>
        {posts &&
          posts?.map((post, index) => (
            <Link to={`/${post.title}`} key={index}>
              <BlogCard post={post} />
            </Link>
          ))}
      </SimpleGrid>
    </Box>
  );
});

export default withAuthenticator(AdminHome);
