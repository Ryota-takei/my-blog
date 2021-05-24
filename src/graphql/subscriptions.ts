/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($owner: String) {
    onCreatePost(owner: $owner) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($owner: String) {
    onUpdatePost(owner: $owner) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($owner: String) {
    onDeletePost(owner: $owner) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($owner: String) {
    onCreateComment(owner: $owner) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($owner: String) {
    onUpdateComment(owner: $owner) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($owner: String) {
    onDeleteComment(owner: $owner) {
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
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike($owner: String) {
    onCreateLike(owner: $owner) {
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
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike($owner: String) {
    onUpdateLike(owner: $owner) {
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
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike($owner: String) {
    onDeleteLike(owner: $owner) {
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
