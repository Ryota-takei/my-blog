/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      type
      id
      title
      body
      image
      timestamp
      updatedAt
      owner
      comments {
        items {
          type
          id
          postID
          name
          timestamp
          content
          owner
        }
        nextToken
      }
      likes {
        items {
          id
          numberLike
          postID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        type
        id
        title
        body
        image
        timestamp
        updatedAt
        owner
        comments {
          nextToken
        }
        likes {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const listPostsSortedByTimestamp = /* GraphQL */ `
  query ListPostsSortedByTimestamp(
    $type: String
    $timestamp: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostsSortedByTimestamp(
      type: $type
      timestamp: $timestamp
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        type
        id
        title
        body
        image
        timestamp
        updatedAt
        owner
        comments {
          nextToken
        }
        likes {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      type
      id
      postID
      name
      timestamp
      content
      post {
        type
        id
        title
        body
        image
        timestamp
        updatedAt
        owner
        comments {
          nextToken
        }
        likes {
          nextToken
        }
      }
      owner
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        type
        id
        postID
        name
        timestamp
        content
        post {
          type
          id
          title
          body
          image
          timestamp
          updatedAt
          owner
        }
        owner
      }
      nextToken
    }
  }
`;
export const listCommentsSortedByTimestamp = /* GraphQL */ `
  query ListCommentsSortedByTimestamp(
    $type: String
    $timestamp: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCommentsSortedByTimestamp(
      type: $type
      timestamp: $timestamp
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        type
        id
        postID
        name
        timestamp
        content
        post {
          type
          id
          title
          body
          image
          timestamp
          updatedAt
          owner
        }
        owner
      }
      nextToken
    }
  }
`;
export const getLike = /* GraphQL */ `
  query GetLike($id: ID!) {
    getLike(id: $id) {
      id
      numberLike
      postID
      createdAt
      updatedAt
      post {
        type
        id
        title
        body
        image
        timestamp
        updatedAt
        owner
        comments {
          nextToken
        }
        likes {
          nextToken
        }
      }
      owner
    }
  }
`;
export const listLikes = /* GraphQL */ `
  query ListLikes(
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        numberLike
        postID
        createdAt
        updatedAt
        post {
          type
          id
          title
          body
          image
          timestamp
          updatedAt
          owner
        }
        owner
      }
      nextToken
    }
  }
`;
