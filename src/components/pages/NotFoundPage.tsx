import { Box, Text } from "@chakra-ui/layout";
import React from "react";

export const NotFoundPage: React.VFC = () => {
  return (
    <Box mx="auto" textAlign="center" alignItems="center"  >
      <Box mt="250px">
        <Text fontFamily="bold">404</Text>
        <Text>お探しのページが見つかりませんでした。</Text>
      </Box>
    </Box>
  );
};
