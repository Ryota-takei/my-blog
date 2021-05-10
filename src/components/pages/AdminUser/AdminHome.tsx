import { Box, SimpleGrid } from "@chakra-ui/layout";
import React, { memo, useEffect } from "react";
import { Link } from "react-router-dom";
import { BlogCard } from "../../organisms/BlogCard";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { useSelector } from "react-redux";
import { selectAdmin } from "../../../features/user/userSlice";
import { UseGetAdmin } from "../../../hooks/UseGetAdmin";

const AdminHome: React.VFC = memo(() => {
  const admin = useSelector(selectAdmin);
  const { getUserInfo } = UseGetAdmin();
  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <Box w={{ base: "90%", md: "70%" }} mx="auto" h="100vh">
      <SimpleGrid columns={{ base: 2, lg: 3 }} spacing={5}>
        <Link to="/adminUser/blog1">
          <BlogCard />
        </Link>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </SimpleGrid>
      <AmplifySignOut />
    </Box>
  );
});

export default withAuthenticator(AdminHome);
