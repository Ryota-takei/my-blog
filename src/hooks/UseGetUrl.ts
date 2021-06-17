import Storage from "@aws-amplify/storage";
import { useState } from "react";
import { Post } from "../types/post";

export const useGetUrl = (post: Post) => {
  const [imageUrl, setImageUrl] = useState<string>("");

  const getImage = async () => {
    if (post.image !== "" && post.image) {
      await Storage.get(post.image).then((url) => {
        if (typeof url === "string") {
          setImageUrl(url);
        }
      });
    }  else {
      setImageUrl("")
    }
  };
  return { getImage, imageUrl };
};
