/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePostInput = {
  type: string,
  id?: string | null,
  title: string,
  body: string,
  image?: string | null,
  timestamp: number,
  updatedAt?: number | null,
};

export type ModelPostConditionInput = {
  type?: ModelStringInput | null,
  title?: ModelStringInput | null,
  body?: ModelStringInput | null,
  image?: ModelStringInput | null,
  timestamp?: ModelIntInput | null,
  updatedAt?: ModelIntInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Post = {
  __typename: "Post",
  type?: string,
  id?: string,
  title?: string,
  body?: string,
  image?: string | null,
  timestamp?: number,
  updatedAt?: number | null,
  owner?: string | null,
  comments?: ModelCommentConnection,
  likes?: ModelLikeConnection,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items?:  Array<Comment | null > | null,
  nextToken?: string | null,
};

export type Comment = {
  __typename: "Comment",
  type?: string,
  id?: string,
  postID?: string,
  name?: string,
  timestamp?: number,
  content?: string,
  post?: Post,
  owner?: string | null,
};

export type ModelLikeConnection = {
  __typename: "ModelLikeConnection",
  items?:  Array<Like | null > | null,
  nextToken?: string | null,
};

export type Like = {
  __typename: "Like",
  id?: string,
  numberLike?: number,
  postID?: string,
  createdAt?: string,
  updatedAt?: string,
  post?: Post,
  owner?: string | null,
};

export type UpdatePostInput = {
  type?: string | null,
  id: string,
  title?: string | null,
  body?: string | null,
  image?: string | null,
  timestamp?: number | null,
  updatedAt?: number | null,
};

export type DeletePostInput = {
  id?: string | null,
};

export type UpdateCommentInput = {
  type?: string | null,
  id: string,
  postID?: string | null,
  name?: string | null,
  timestamp?: number | null,
  content?: string | null,
};

export type ModelCommentConditionInput = {
  type?: ModelStringInput | null,
  postID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  timestamp?: ModelIntInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type DeleteCommentInput = {
  id?: string | null,
};

export type UpdateLikeInput = {
  id: string,
  numberLike?: number | null,
  postID?: string | null,
};

export type ModelLikeConditionInput = {
  numberLike?: ModelIntInput | null,
  postID?: ModelIDInput | null,
  and?: Array< ModelLikeConditionInput | null > | null,
  or?: Array< ModelLikeConditionInput | null > | null,
  not?: ModelLikeConditionInput | null,
};

export type DeleteLikeInput = {
  id?: string | null,
};

export type CreateCommentInput = {
  type: string,
  id?: string | null,
  postID: string,
  name: string,
  timestamp: number,
  content: string,
};

export type CreateLikeInput = {
  id?: string | null,
  numberLike: number,
  postID: string,
};

export type ModelPostFilterInput = {
  type?: ModelStringInput | null,
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  body?: ModelStringInput | null,
  image?: ModelStringInput | null,
  timestamp?: ModelIntInput | null,
  updatedAt?: ModelIntInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items?:  Array<Post | null > | null,
  nextToken?: string | null,
};

export type ModelIntKeyConditionInput = {
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelCommentFilterInput = {
  type?: ModelStringInput | null,
  id?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  timestamp?: ModelIntInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type ModelLikeFilterInput = {
  id?: ModelIDInput | null,
  numberLike?: ModelIntInput | null,
  postID?: ModelIDInput | null,
  and?: Array< ModelLikeFilterInput | null > | null,
  or?: Array< ModelLikeFilterInput | null > | null,
  not?: ModelLikeFilterInput | null,
};

export type CreatePostMutationVariables = {
  input?: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    type: string,
    id: string,
    title: string,
    body: string,
    image?: string | null,
    timestamp: number,
    updatedAt?: number | null,
    owner?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        type: string,
        id: string,
        postID: string,
        name: string,
        timestamp: number,
        content: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        numberLike: number,
        postID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdatePostMutationVariables = {
  input?: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    type: string,
    id: string,
    title: string,
    body: string,
    image?: string | null,
    timestamp: number,
    updatedAt?: number | null,
    owner?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        type: string,
        id: string,
        postID: string,
        name: string,
        timestamp: number,
        content: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        numberLike: number,
        postID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeletePostMutationVariables = {
  input?: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    type: string,
    id: string,
    title: string,
    body: string,
    image?: string | null,
    timestamp: number,
    updatedAt?: number | null,
    owner?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        type: string,
        id: string,
        postID: string,
        name: string,
        timestamp: number,
        content: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        numberLike: number,
        postID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input?: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    type: string,
    id: string,
    postID: string,
    name: string,
    timestamp: number,
    content: string,
    post?:  {
      __typename: "Post",
      type: string,
      id: string,
      title: string,
      body: string,
      image?: string | null,
      timestamp: number,
      updatedAt?: number | null,
      owner?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input?: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    type: string,
    id: string,
    postID: string,
    name: string,
    timestamp: number,
    content: string,
    post?:  {
      __typename: "Post",
      type: string,
      id: string,
      title: string,
      body: string,
      image?: string | null,
      timestamp: number,
      updatedAt?: number | null,
      owner?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type UpdateLikeMutationVariables = {
  input?: UpdateLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type UpdateLikeMutation = {
  updateLike?:  {
    __typename: "Like",
    id: string,
    numberLike: number,
    postID: string,
    createdAt: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      type: string,
      id: string,
      title: string,
      body: string,
      image?: string | null,
      timestamp: number,
      updatedAt?: number | null,
      owner?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type DeleteLikeMutationVariables = {
  input?: DeleteLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type DeleteLikeMutation = {
  deleteLike?:  {
    __typename: "Like",
    id: string,
    numberLike: number,
    postID: string,
    createdAt: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      type: string,
      id: string,
      title: string,
      body: string,
      image?: string | null,
      timestamp: number,
      updatedAt?: number | null,
      owner?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type CreateCommentMutationVariables = {
  input?: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    type: string,
    id: string,
    postID: string,
    name: string,
    timestamp: number,
    content: string,
    post?:  {
      __typename: "Post",
      type: string,
      id: string,
      title: string,
      body: string,
      image?: string | null,
      timestamp: number,
      updatedAt?: number | null,
      owner?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type CreateLikeMutationVariables = {
  input?: CreateLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type CreateLikeMutation = {
  createLike?:  {
    __typename: "Like",
    id: string,
    numberLike: number,
    postID: string,
    createdAt: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      type: string,
      id: string,
      title: string,
      body: string,
      image?: string | null,
      timestamp: number,
      updatedAt?: number | null,
      owner?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id?: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    type: string,
    id: string,
    title: string,
    body: string,
    image?: string | null,
    timestamp: number,
    updatedAt?: number | null,
    owner?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        type: string,
        id: string,
        postID: string,
        name: string,
        timestamp: number,
        content: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        numberLike: number,
        postID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items?:  Array< {
      __typename: "Post",
      type: string,
      id: string,
      title: string,
      body: string,
      image?: string | null,
      timestamp: number,
      updatedAt?: number | null,
      owner?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ListPostsSortedByTimestampQueryVariables = {
  type?: string | null,
  timestamp?: ModelIntKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsSortedByTimestampQuery = {
  listPostsSortedByTimestamp?:  {
    __typename: "ModelPostConnection",
    items?:  Array< {
      __typename: "Post",
      type: string,
      id: string,
      title: string,
      body: string,
      image?: string | null,
      timestamp: number,
      updatedAt?: number | null,
      owner?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id?: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    type: string,
    id: string,
    postID: string,
    name: string,
    timestamp: number,
    content: string,
    post?:  {
      __typename: "Post",
      type: string,
      id: string,
      title: string,
      body: string,
      image?: string | null,
      timestamp: number,
      updatedAt?: number | null,
      owner?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items?:  Array< {
      __typename: "Comment",
      type: string,
      id: string,
      postID: string,
      name: string,
      timestamp: number,
      content: string,
      post?:  {
        __typename: "Post",
        type: string,
        id: string,
        title: string,
        body: string,
        image?: string | null,
        timestamp: number,
        updatedAt?: number | null,
        owner?: string | null,
      } | null,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ListCommentsSortedByTimestampQueryVariables = {
  type?: string | null,
  timestamp?: ModelIntKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsSortedByTimestampQuery = {
  listCommentsSortedByTimestamp?:  {
    __typename: "ModelCommentConnection",
    items?:  Array< {
      __typename: "Comment",
      type: string,
      id: string,
      postID: string,
      name: string,
      timestamp: number,
      content: string,
      post?:  {
        __typename: "Post",
        type: string,
        id: string,
        title: string,
        body: string,
        image?: string | null,
        timestamp: number,
        updatedAt?: number | null,
        owner?: string | null,
      } | null,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetLikeQueryVariables = {
  id?: string,
};

export type GetLikeQuery = {
  getLike?:  {
    __typename: "Like",
    id: string,
    numberLike: number,
    postID: string,
    createdAt: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      type: string,
      id: string,
      title: string,
      body: string,
      image?: string | null,
      timestamp: number,
      updatedAt?: number | null,
      owner?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type ListLikesQueryVariables = {
  filter?: ModelLikeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLikesQuery = {
  listLikes?:  {
    __typename: "ModelLikeConnection",
    items?:  Array< {
      __typename: "Like",
      id: string,
      numberLike: number,
      postID: string,
      createdAt: string,
      updatedAt: string,
      post?:  {
        __typename: "Post",
        type: string,
        id: string,
        title: string,
        body: string,
        image?: string | null,
        timestamp: number,
        updatedAt?: number | null,
        owner?: string | null,
      } | null,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePostSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    type: string,
    id: string,
    title: string,
    body: string,
    image?: string | null,
    timestamp: number,
    updatedAt?: number | null,
    owner?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        type: string,
        id: string,
        postID: string,
        name: string,
        timestamp: number,
        content: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        numberLike: number,
        postID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdatePostSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    type: string,
    id: string,
    title: string,
    body: string,
    image?: string | null,
    timestamp: number,
    updatedAt?: number | null,
    owner?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        type: string,
        id: string,
        postID: string,
        name: string,
        timestamp: number,
        content: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        numberLike: number,
        postID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeletePostSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    type: string,
    id: string,
    title: string,
    body: string,
    image?: string | null,
    timestamp: number,
    updatedAt?: number | null,
    owner?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        type: string,
        id: string,
        postID: string,
        name: string,
        timestamp: number,
        content: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        numberLike: number,
        postID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateCommentSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    type: string,
    id: string,
    postID: string,
    name: string,
    timestamp: number,
    content: string,
    post?:  {
      __typename: "Post",
      type: string,
      id: string,
      title: string,
      body: string,
      image?: string | null,
      timestamp: number,
      updatedAt?: number | null,
      owner?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateCommentSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    type: string,
    id: string,
    postID: string,
    name: string,
    timestamp: number,
    content: string,
    post?:  {
      __typename: "Post",
      type: string,
      id: string,
      title: string,
      body: string,
      image?: string | null,
      timestamp: number,
      updatedAt?: number | null,
      owner?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteCommentSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    type: string,
    id: string,
    postID: string,
    name: string,
    timestamp: number,
    content: string,
    post?:  {
      __typename: "Post",
      type: string,
      id: string,
      title: string,
      body: string,
      image?: string | null,
      timestamp: number,
      updatedAt?: number | null,
      owner?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnCreateLikeSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateLikeSubscription = {
  onCreateLike?:  {
    __typename: "Like",
    id: string,
    numberLike: number,
    postID: string,
    createdAt: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      type: string,
      id: string,
      title: string,
      body: string,
      image?: string | null,
      timestamp: number,
      updatedAt?: number | null,
      owner?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateLikeSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateLikeSubscription = {
  onUpdateLike?:  {
    __typename: "Like",
    id: string,
    numberLike: number,
    postID: string,
    createdAt: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      type: string,
      id: string,
      title: string,
      body: string,
      image?: string | null,
      timestamp: number,
      updatedAt?: number | null,
      owner?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteLikeSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteLikeSubscription = {
  onDeleteLike?:  {
    __typename: "Like",
    id: string,
    numberLike: number,
    postID: string,
    createdAt: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      type: string,
      id: string,
      title: string,
      body: string,
      image?: string | null,
      timestamp: number,
      updatedAt?: number | null,
      owner?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};
