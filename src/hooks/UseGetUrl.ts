import Storage from "@aws-amplify/storage";
import { useState } from "react";
import { Post } from "../types/post";

export const UseGetUrl = (post: Post) => {
  const [imageUrl, setImageUrl] = useState<string>("");

  const getImage = async () => {
    if (post.image) {
      await Storage.get(post.image).then((url) => {
        if (typeof url === "string") {
          setImageUrl(url);
        }
      });
    }
  };
  return { getImage, imageUrl };
};
