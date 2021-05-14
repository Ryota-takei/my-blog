import { Box, Flex } from "@chakra-ui/layout";
import React from "react";

type Prop = {
  postPerPage: number;
  totalPosts: number;
  paginate: (pageNumber: number) => void;
};

export const PaginationBox: React.VFC<Prop> = (props) => {
  const { postPerPage, totalPosts, paginate } = props;
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <Box as="nav">
      <Flex justifyContent="center">
        {pageNumber.map((number) => (
          <Box key={number} mx="auto" m="0">
            <Box
              _hover={{ cursor: "pointer", opacity: "0.5" }}
              w="45px"
              h="45px"
              borderRadius="99px"
              textAlign="center"
              alignItems="center"
              color="white"
              bg="gray.300"
              lineHeight="45px"
              onClick={() => paginate(number)}
              m="1"
            >
              {number}
            </Box>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};
