import { useDispatch } from "react-redux";
import { useToast } from "@chakra-ui/toast";
import { useHistory } from "react-router";
import { createNewPost } from "../features/post/postSlice";
import { createPost } from "../graphql/mutations";
import moment from "moment";
import API, { graphqlOperation } from "@aws-amplify/api";

type Response = {
  data: {
    createPost: {
      id: string;
    };
  };
};

export const UseHandleSubmit = (
  StorageKey: string,
  content: string,
  setContent: React.Dispatch<React.SetStateAction<string>>,
  title: string,
  setTitle: React.Dispatch<React.SetStateAction<string>>,
  imageName: string | undefined = undefined,
  setImageName: React.Dispatch<React.SetStateAction<string>>
) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const history = useHistory();
  const data = moment().format("YYYY-MM-DD");

  const handleSubmit = async () => {
    if (title === "") {
      toast({
        title: "タイトルを入力して下さい",
        status: "error",
        isClosable: true,
      });
      return;
    } else if (content === "") {
      toast({
        title: "本文を入力して下さい",
        status: "error",
        isClosable: true,
      });
      return;
    }
    const input = {
      title: title,
      body: content,
      createdAt: data,
      updatedAt: data,
      image: imageName,
    };
    try {
      const res = (await API.graphql(
        graphqlOperation(createPost, { input })
      )) as Response;
      const newPost = { ...input, id: res.data.createPost.id };
      setContent("");
      setTitle("");
      setImageName("");
      localStorage.setItem(StorageKey, "");
      dispatch(createNewPost(newPost));
      history.push("/adminUser");
    } catch (error) {
      alert(error.message);
    }
  };
  return { handleSubmit };
};
