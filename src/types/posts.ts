import { Post } from "./post";

export type Posts = {
  data: {
    listPostsSortedByTimestamp: {
      items: Post[];
    };
  };
};
