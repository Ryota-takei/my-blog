import { Box, Flex, Heading } from "@chakra-ui/layout";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";

import { selectAdmin } from "../../features/User/userSlice";
import { useSelector } from "react-redux";

export const Header = () => {
  const admin = useSelector(selectAdmin);
  return (
    <>
      <Flex
        bg="white"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
        mb="5"
      >
        <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }}>
          <Link to={admin ? "/adminUser" : "/"}>
            <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
              {admin ? "Admin Page" : "My struggles"}
            </Heading>
          </Link>
        </Flex>
        <Flex align="center" fontSize="sm" flexGrow={2} display="flex">
          <Box pr={4} ml="auto" mr={{ base: "30px", md: "45px" }}>
            <Link to={admin? "/adminUser/newPosts" :"/"}>
              {admin ? (
                <Box ml="15px">
                  <BsPencilSquare size="25px" />
                </Box>
              ) : (
                <Box ml="5px">
                  <AiOutlineHome size="25px" />
                </Box>
              )}

              {admin ? "新規投稿" : "Home"}
            </Link>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};
