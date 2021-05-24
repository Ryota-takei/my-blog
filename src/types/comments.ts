import { comment } from "./comment";

export type Comments = {
  data: {
    listCommentsSortedByTimestamp: {
      items: comment[];
    };
  };
};
