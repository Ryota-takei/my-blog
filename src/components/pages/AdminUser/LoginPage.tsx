import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Box, Stack } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import { Auth } from "aws-amplify";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";

export const LoginPage: React.VFC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const history = useHistory();

  const login = async () => {
    const user = await Auth.signIn(username, password);
    if (!username) {
      toast({
        title: "E-mailを入力して下さい",
        status: "error",
        isClosable: true,
      });
      return;
    } else if (!password) {
      toast({
        title: "passwordを入力して下さい",
        status: "error",
        isClosable: true,
      });
      return;
    }
    setLoading(true);
    try {
      if (user) {
        setPassword("");
        setUsername("");
        toast({
          title: "ログインに成功しました",
          status: "success",
          isClosable: true,
        });
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
      if (user) {
        history.push("/adminUser");
      }
    }
  };

  useEffect(() => {
    const isLoginUser = async () =>
     await Auth.currentUserInfo().then((user) => {
        if (user) {
          history.push("/adminUser");
        }
      });
    isLoginUser();
  }, []);
  return (
    <Box
      w={{ base: "100%", sm: "450px" }}
      h="300px"
      bg="white"
      mx="auto"
      mt={{ base: "100px", sm: "200px" }}
    >
      <Stack spacing={8} py={10} px={10}>
        <Input
          placeholder="E-mail"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          mt="5"
          bg="teal.500"
          color="white"
          fontWeight="bold"
          onClick={login}
          isLoading={loading}
        >
          ログイン
        </Button>
      </Stack>
    </Box>
  );
};
