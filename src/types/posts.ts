export type Posts = {
  data: {
    searchPosts: {
      items: [
        {
          id: string;
          body: string;
          createdAt: string;
          title: string;
          updatedAt: string;
          image: string;
        }
      ];
    };
  };
};
