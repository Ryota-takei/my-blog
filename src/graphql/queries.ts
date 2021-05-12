/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        body
        createdAt
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
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      body
      createdAt
      updatedAt
      owner
      comments {
        items {
          id
          postID
          name
          createdAt
          content
          updatedAt
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
export const searchPosts = /* GraphQL */ `
  query SearchPosts(
    $filter: SearchablePostFilterInput
    $sort: SearchablePostSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchPosts(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        title
        body
        createdAt
        updatedAt
        owner
        image
        comments {
          nextToken
        }
        likes {
          nextToken
        }
      }
      nextToken
      total
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      postID
      name
      createdAt
      content

      post {
        id
        title
        body
        createdAt
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
        id
        postID
        name
        createdAt
        content
        updatedAt
        post {
          id
          title
          body
          createdAt
          updatedAt
          owner
        }
        owner
      }
      nextToken
    }
  }
`;
export const searchComments = /* GraphQL */ `
  query SearchComments(
    $filter: SearchableCommentFilterInput
    $sort: SearchableCommentSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchComments(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        postID
        name
        createdAt
        content
        post {
          id
          title
          body
          createdAt
          updatedAt
          owner
        }
        owner
      }
      nextToken
      total
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
        id
        title
        body
        createdAt
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
          id
          title
          body
          createdAt
          updatedAt
          owner
        }
        owner
      }
      nextToken
    }
  }
`;
