import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import { Router } from "./route/Router";
import { UseGetAdmin } from "./hooks/UseGetAdmin";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostsAsync } from "./features/post/postSlice";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import config from "./aws-exports";
import { UseChangeAuth } from "./hooks/UseChangeAuth";
import { selectAdmin } from "./features/user/userSlice";
import { searchComments } from "./graphql/queries";
import { getCommentAsync } from "./features/comment/commentSlice";
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
    dispatch(getCommentAsync())
  }, []);



  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <Router />
      </ChakraProvider>
    </div>
  );
}

export default App;
