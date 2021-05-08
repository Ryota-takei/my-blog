import { Box } from "@chakra-ui/layout";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectAdmin } from "../../../features/User/userSlice";
import { UseGetAdmin } from "../../../hooks/UseGetAdmin";
import { useHistory } from "react-router";
import DOMPurify from 'dompurify';
import marked from 'marked';

export const NewPosts = () => {
  const admin = useSelector(selectAdmin);
  const { getUserInfo } = UseGetAdmin();
  const　history = useHistory()
  useEffect(() => {
    getUserInfo();
    if(!admin){
      history.push("/")
    }
  }, []);
  return (
    <Box w={{ base: "90%", md: "640px" }} mx="auto" h="100vh" bg="white">
      
    </Box>
  );
};
