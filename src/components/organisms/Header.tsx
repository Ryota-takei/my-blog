import { Flex, Heading } from "@chakra-ui/layout";
import { Link } from "react-router-dom";
import { selectAdmin } from "../../features/user/userSlice";
import { useSelector } from "react-redux";
import { HeaderMenu } from "../molecules/HeaderMenu";

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
        <Flex align="center" mr={8} _hover={{ cursor: "pointer" }}>
          <Link to={admin ? "/adminUser" : "/"}>
            <Heading as="h1" fontSize={{ base: "sm", sm: "md", md: "lg" }}>
              {admin ? "Admin Page" : "Programming Blog"}
            </Heading>
          </Link>
        </Flex>
        <HeaderMenu admin={admin} base="none" md="block" />
      </Flex>
      <Flex
        justifyContent="center"
        bg="gray.50"
        w="100%"
        position="fixed"
        bottom="0px"
        alignItems="center"
        h="50px"
        display={{ base: "flex", md: "none" }}
      >
        <HeaderMenu admin={admin} base="block" md="none" />
      </Flex>
    </>
  );
};
