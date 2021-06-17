import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import { Router } from "./route/Router";
import { useGetAdmin } from "./hooks/useGetAdmin";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostsAsync } from "./features/post/postSlice";
import Amplify from "aws-amplify";
import config from "./aws-exports";
import { useChangeAuth } from "./hooks/useChangeAuth";
import { selectAdmin } from "./features/user/userSlice";
import { getCommentAsync } from "./features/comment/commentSlice";
Amplify.configure(config);

function App() {
  const { getUserInfo } = useGetAdmin();
  const dispatch = useDispatch();
  const admin = useSelector(selectAdmin);
  const { authStatus, changeAuth } = useChangeAuth();

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
    dispatch(getCommentAsync());
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
