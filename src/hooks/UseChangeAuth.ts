import { useState } from "react";
import { useSelector } from "react-redux";
import { selectAdmin } from "../features/user/userSlice";

type AuthStatus = "AMAZON_COGNITO_USER_POOLS" | "API_KEY";

export const useChangeAuth = () => {
  const admin = useSelector(selectAdmin);
  const [authStatus, setAuthStatus] = useState<AuthStatus>("API_KEY");
  const changeAuth = () => {
    if (admin) {
      setAuthStatus("AMAZON_COGNITO_USER_POOLS");
    } else if (!admin) {
      setAuthStatus("API_KEY");
    }
  };
  return { authStatus, changeAuth };
};
