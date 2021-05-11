import { Box, Flex, Text } from '@chakra-ui/layout'
import React, { memo } from 'react'
import { FaUpload } from 'react-icons/fa'

type Props = {
  handleSubmit:() => void,
  status: String
}

export const FootButtonLayout:React.VFC<Props> = memo((props) => {
  const {handleSubmit, status} = props
  return (
    <Box bg="gray.50" h="50px" pt="2">
    <Box
      bg="green.400"
      h="37px"
      w="110px"
      color="white"
      borderRadius="3px"
      ml="auto"
      mr="10px"
      _hover={{ cursor: "pointer", opacity: "0.7" }}
      onClick={handleSubmit}
    >
      <Flex p="1" ml="1" textAlign="center" mt="5px">
        <Box mt="6px">
          <FaUpload color="white" />
        </Box>
        <Text mt="3px" ml="2" color="white">
          {status}
        </Text>
      </Flex>
    </Box>
    </Box>
  )
})
