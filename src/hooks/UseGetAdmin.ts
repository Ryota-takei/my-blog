import Auth from "@aws-amplify/auth";
import { useDispatch } from "react-redux";
import { changeAdmin} from "../features/User/userSlice";


export const UseGetAdmin = () => {
  const dispatch = useDispatch();
  const getUserInfo = async () => {
    await Auth.currentUserInfo().then((user) => {
      if (user) {
        dispatch(changeAdmin());
      }
    });
  };
  return {getUserInfo}
}