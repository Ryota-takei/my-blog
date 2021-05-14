/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      title
      body
      createdAt
      updatedAt

      image
      comments {
        items {
          id
          postID
          name
          createdAt
          content
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
        }
        nextToken
      }
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const updateLike = /* GraphQL */ `
  mutation UpdateLike(
    $input: UpdateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    updateLike(input: $input, condition: $condition) {
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
export const deleteLike = /* GraphQL */ `
  mutation DeleteLike(
    $input: DeleteLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    deleteLike(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const createLike = /* GraphQL */ `
  mutation CreateLike(
    $input: CreateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    createLike(input: $input, condition: $condition) {
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
