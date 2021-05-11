/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePostInput = {
  id?: string | null,
  title: string,
  body: string,
  createdAt: string,
};

export type ModelPostConditionInput = {
  title?: ModelStringInput | null,
  body?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
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

export type Post = {
  __typename: "Post",
  id?: string,
  title?: string,
  body?: string,
  createdAt?: string,
  updatedAt?: string,
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
  id?: string,
  postID?: string,
  name?: string,
  createdAt?: string,
  content?: string,
  updatedAt?: string,
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
  id: string,
  title?: string | null,
  body?: string | null,
  createdAt?: string | null,
};

export type DeletePostInput = {
  id?: string | null,
};

export type UpdateCommentInput = {
  id: string,
  postID?: string | null,
  name?: string | null,
  createdAt?: string | null,
  content?: string | null,
};

export type ModelCommentConditionInput = {
  postID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
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

export type DeleteLikeInput = {
  id?: string | null,
};

export type CreateCommentInput = {
  id?: string | null,
  postID: string,
  name: string,
  createdAt: string,
  content: string,
};

export type CreateLikeInput = {
  id?: string | null,
  numberLike: number,
  postID: string,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  body?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items?:  Array<Post | null > | null,
  nextToken?: string | null,
};

export type SearchablePostFilterInput = {
  id?: SearchableIDFilterInput | null,
  title?: SearchableStringFilterInput | null,
  body?: SearchableStringFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  and?: Array< SearchablePostFilterInput | null > | null,
  or?: Array< SearchablePostFilterInput | null > | null,
  not?: SearchablePostFilterInput | null,
};

export type SearchableIDFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableStringFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchablePostSortInput = {
  field?: SearchablePostSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchablePostSortableFields {
  id = "id",
  title = "title",
  body = "body",
  createdAt = "createdAt",
}


export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc",
}


export type SearchablePostConnection = {
  __typename: "SearchablePostConnection",
  items?:  Array<Post | null > | null,
  nextToken?: string | null,
  total?: number | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type SearchableCommentFilterInput = {
  id?: SearchableIDFilterInput | null,
  postID?: SearchableIDFilterInput | null,
  name?: SearchableStringFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  content?: SearchableStringFilterInput | null,
  and?: Array< SearchableCommentFilterInput | null > | null,
  or?: Array< SearchableCommentFilterInput | null > | null,
  not?: SearchableCommentFilterInput | null,
};

export type SearchableCommentSortInput = {
  field?: SearchableCommentSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableCommentSortableFields {
  id = "id",
  postID = "postID",
  name = "name",
  createdAt = "createdAt",
  content = "content",
}


export type SearchableCommentConnection = {
  __typename: "SearchableCommentConnection",
  items?:  Array<Comment | null > | null,
  nextToken?: string | null,
  total?: number | null,
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
    id: string,
    title: string,
    body: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        postID: string,
        name: string,
        createdAt: string,
        content: string,
        updatedAt: string,
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
    id: string,
    title: string,
    body: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        postID: string,
        name: string,
        createdAt: string,
        content: string,
        updatedAt: string,
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
    id: string,
    title: string,
    body: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        postID: string,
        name: string,
        createdAt: string,
        content: string,
        updatedAt: string,
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
    id: string,
    postID: string,
    name: string,
    createdAt: string,
    content: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      body: string,
      createdAt: string,
      updatedAt: string,
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
    id: string,
    postID: string,
    name: string,
    createdAt: string,
    content: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      body: string,
      createdAt: string,
      updatedAt: string,
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
      id: string,
      title: string,
      body: string,
      createdAt: string,
      updatedAt: string,
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
      id: string,
      title: string,
      body: string,
      createdAt: string,
      updatedAt: string,
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
    id: string,
    postID: string,
    name: string,
    createdAt: string,
    content: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      body: string,
      createdAt: string,
      updatedAt: string,
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
      id: string,
      title: string,
      body: string,
      createdAt: string,
      updatedAt: string,
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
      id: string,
      title: string,
      body: string,
      createdAt: string,
      updatedAt: string,
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

export type GetPostQueryVariables = {
  id?: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    title: string,
    body: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        postID: string,
        name: string,
        createdAt: string,
        content: string,
        updatedAt: string,
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

export type SearchPostsQueryVariables = {
  filter?: SearchablePostFilterInput | null,
  sort?: SearchablePostSortInput | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
};

export type SearchPostsQuery = {
  searchPosts?:  {
    __typename: "SearchablePostConnection",
    items?:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      body: string,
      createdAt: string,
      updatedAt: string,
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
    total?: number | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id?: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    name: string,
    createdAt: string,
    content: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      body: string,
      createdAt: string,
      updatedAt: string,
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
      id: string,
      postID: string,
      name: string,
      createdAt: string,
      content: string,
      updatedAt: string,
      post?:  {
        __typename: "Post",
        id: string,
        title: string,
        body: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type SearchCommentsQueryVariables = {
  filter?: SearchableCommentFilterInput | null,
  sort?: SearchableCommentSortInput | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
};

export type SearchCommentsQuery = {
  searchComments?:  {
    __typename: "SearchableCommentConnection",
    items?:  Array< {
      __typename: "Comment",
      id: string,
      postID: string,
      name: string,
      createdAt: string,
      content: string,
      updatedAt: string,
      post?:  {
        __typename: "Post",
        id: string,
        title: string,
        body: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
    total?: number | null,
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
      id: string,
      title: string,
      body: string,
      createdAt: string,
      updatedAt: string,
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
        id: string,
        title: string,
        body: string,
        createdAt: string,
        updatedAt: string,
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
    id: string,
    title: string,
    body: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        postID: string,
        name: string,
        createdAt: string,
        content: string,
        updatedAt: string,
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
    id: string,
    title: string,
    body: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        postID: string,
        name: string,
        createdAt: string,
        content: string,
        updatedAt: string,
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
    id: string,
    title: string,
    body: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        postID: string,
        name: string,
        createdAt: string,
        content: string,
        updatedAt: string,
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
    id: string,
    postID: string,
    name: string,
    createdAt: string,
    content: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      body: string,
      createdAt: string,
      updatedAt: string,
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
    id: string,
    postID: string,
    name: string,
    createdAt: string,
    content: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      body: string,
      createdAt: string,
      updatedAt: string,
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
    id: string,
    postID: string,
    name: string,
    createdAt: string,
    content: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      body: string,
      createdAt: string,
      updatedAt: string,
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
      id: string,
      title: string,
      body: string,
      createdAt: string,
      updatedAt: string,
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
      id: string,
      title: string,
      body: string,
      createdAt: string,
      updatedAt: string,
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
      id: string,
      title: string,
      body: string,
      createdAt: string,
      updatedAt: string,
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
