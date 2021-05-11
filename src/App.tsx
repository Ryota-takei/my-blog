import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import theme from "./theme/theme";
import { Router } from "./route/Router";
import { UseGetAdmin } from "./hooks/UseGetAdmin";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostsAsync } from "./features/post/postSlice";
import Amplify from "aws-amplify";
import config from "./aws-exports";
import { UseChangeAuth } from "./hooks/UseChangeAuth";
import { selectAdmin } from "./features/user/userSlice";
Amplify.configure(config);

function App() {
  const { getUserInfo } = UseGetAdmin();
  const dispatch = useDispatch();
  const admin = useSelector(selectAdmin);
  const { authStatus, changeAuth } = UseChangeAuth();

  Amplify.configure({
    ...config,
    aws_appsync_authenticationType: authStatus,
  });

  useEffect(() => {
    changeAuth();
  }, [admin]);

  useEffect(() => {
    getUserInfo();
    dispatch(getPostsAsync());
  }, []);
  console.log(admin);
  console.log(authStatus);

  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <Router />
      </ChakraProvider>
    </div>
  );
}

export default App;