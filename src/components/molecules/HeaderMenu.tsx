import Auth from "@aws-amplify/auth";
import { Box, Flex, Text } from "@chakra-ui/layout";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logoutChangeAdmin } from "../../features/user/userSlice";

type Prop = {
  admin: boolean;
  base: string;
  md: string;
};

export const HeaderMenu: React.VFC<Prop> = (props) => {
  const { admin, base, md } = props;

  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await Auth.signOut();
      dispatch(logoutChangeAdmin());
      history.push("/");
    } catch (error) {
      alert(error);
    }
  };
  return (
    <>
      <Flex align="center" fontSize="sm" flexGrow={2} display="flex">
        <Box
          // display={{ base: base, md: md }}
          //デザイン検討中。
          pr={{base:1, md: 2}}
          ml="auto"
          mr={{ base: "10px", md: "25px" }}
          _hover={{ opacity: "0.5" }}
        >
          <Link to={admin ? "/adminUser/newPosts" : "/"}>
            {admin ? (
              <Box ml="15px">
                <BsPencilSquare size="25px" />
              </Box>
            ) : (
              <Box ml="5px">
                <AiOutlineHome size="25px" />
              </Box>
            )}
            <Text fontFamily="bold" fontSize="12px">
              {/* {admin ? "新規画面" : ""} */}
            </Text>
          </Link>
        </Box>
      </Flex>

      {admin && (
        <Box
          // display={{ base: base, md: md }}
          mr={{ base: 0, md: "30px" }}
          _hover={{ opacity: "0.5" }}
          onClick={handleLogout}
        >
          <Flex ml="3">
            <FiLogOut size="25px" />　
          </Flex>
          <Box>
            {/* <Text fontFamily="bold" fontSize="12px">
              サインアウト
            </Text> */}
          </Box>
        </Box>
      )}
    </>
  );
};
