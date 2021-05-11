export type Posts = {
  data: {
    searchPosts: {
      items: [
        {
          id: String;
          body: String;
          createdAt: String;
          title: string;
          updatedAt: String;
        }
      ];
    };
  };
};
