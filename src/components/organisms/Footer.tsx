import { Box, Text } from "@chakra-ui/layout";

export const Footer = () => {
  return (
    <Box
      bg="white"
      mt="5"
      padding={{ base: 3, md: 5 }}
      alignItems="center"
      textAlign="center"
    >
      <Text  fontSize={{ base: "15px", sm: "16px", md: "24px" }}
              fontWeight="bold">
        ©︎Programming Blog
      </Text>
    </Box>
  );
};
