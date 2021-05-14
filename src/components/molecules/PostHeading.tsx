import { Box, Flex, Heading, Text } from '@chakra-ui/layout'
import React from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { GrUpdate } from 'react-icons/gr'
import { useAppSelector } from '../../app/hooks'
import { selectCount } from '../../features/comment/commentSlice'
import { Post } from '../../types/post'

type Prop = {
  post:Post
}

export const PostHeading:React.VFC<Prop> = (props) => {
  const {post} = props
  const　count = useAppSelector(selectCount)

  return (
    <>
    <Heading as="h1" p={{ base: "1", md: "2" }}>
    {post.title}
  </Heading>
  <Flex p="2">
    <Flex textAlign="center">
      <Box h="15px">
        <AiOutlineClockCircle />
      </Box>
      <Text ml="0.5" lineHeight="15px">
        {post.createdAt}
      </Text>
    </Flex>
    <Flex ml="4">
      <Box h="15px">
        <GrUpdate size="14px" />
      </Box>
      <Text ml="0.5" lineHeight="15px">
        {post.updatedAt}
      </Text>
    </Flex>
    <Flex ml="4">
      <Box h="15px">
        <FaRegComment />
      </Box>
      <Text ml="0.5" lineHeight="15px">
        {count}
      </Text>
    </Flex>
  </Flex>
  </>
  )
}
