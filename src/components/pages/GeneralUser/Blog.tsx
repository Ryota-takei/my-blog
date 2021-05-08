import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { AiOutlineClockCircle, AiOutlineHeart } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import { BsTrash } from "react-icons/bs";
import { useSelector } from "react-redux";
import { selectAdmin } from "../../../features/User/userSlice";
import { useEffect } from "react";
import { UseGetAdmin } from "../../../hooks/UseGetAdmin";

export const Blog: React.VFC = () => {
  const admin = useSelector(selectAdmin);
  const { getUserInfo } = UseGetAdmin();

  useEffect(() => {
    getUserInfo();
  }, []);

  console.log(admin);

  return (
    <>
      <Box w={{ base: "90%", md: "640px" }} mx="auto" h="100vh" bg="white">
        <Image
          src="https://source.unsplash.com/random"
          alt="blog image"
          w="100%"
          h={{ base: "300px", md: "450px" }}
          backgroundSize="cover"
        />
        <Heading as="h1" p={{ base: "1", md: "2" }}>
          hogehogehogehgoehgoe
        </Heading>
        <Flex p="2">
          <Flex textAlign="center">
            <Box h="15px">
              <AiOutlineClockCircle />
            </Box>
            <Text ml="0.5" lineHeight="15px">
              2021.1.10
            </Text>
          </Flex>
          <Flex ml="4">
            <Box h="15px">
              <GrUpdate size="14px" />
            </Box>
            <Text ml="0.5" lineHeight="15px">
              2021.1.10
            </Text>
          </Flex>
          <Flex ml="4">
            <Box h="15px">
              <AiOutlineHeart />
            </Box>
            <Text ml="0.5" lineHeight="15px">
              0
            </Text>
          </Flex>
        </Flex>
        <hr />
        {admin && (
          <Flex mt="3" ml="2">
            <Flex textAlign="center">
              <Box h="15px">
                <AiOutlineEdit />
              </Box>
              <Text ml="0.5" lineHeight="15px">
                編集する
              </Text>
            </Flex>
            <Flex textAlign="center" ml="1">
              <Box h="15px">
                <BsTrash />
              </Box>
              <Text ml="0.5" lineHeight="15px">
                削除する
              </Text>
            </Flex>
          </Flex>
        )}
      </Box>
    </>
  );
};
