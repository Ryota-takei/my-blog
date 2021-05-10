import Auth from "@aws-amplify/auth";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { changeAdmin } from "../features/user/userSlice";

export const UseGetAdmin = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isAdminCheck = async () => {
    await Auth.currentUserInfo().then((user) => {
      if (user) {
        dispatch(changeAdmin());
      }
      if (!user) {
        history.push("/");
      }
    });
  };
  const getUserInfo = async () => {
    await Auth.currentUserInfo().then((user) => {
      if (user) {
        dispatch(changeAdmin());
      }
    });
  };
  return { getUserInfo, isAdminCheck };
};
