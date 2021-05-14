import { Box, Heading } from "@chakra-ui/layout";

export const Footer = () => {
  return (
    <Box
      bg="white"
      mt="5"
      padding={{ base: 3, md: 5 }}
      alignItems="center"
      textAlign="center"
    >
      <Heading as="h2" fontSize={{ base: "md", md: "lg" }}>
        ©︎Programming Blog
      </Heading>
    </Box>
  );
};
