import { gql } from '@apollo/client';

export const AUTH = gql`
  {
    isLoggedIn @client
  }
`;
export const GET_OPERATIONS = gql`
  query getUserOperations {
    getUserOperations {
      id
      concept
      createdAt
      amount
      type
      category
    }
  }
`;
export const GET_OPERATION_BY_ID = gql`
  query getOperationById($id: ID!) {
    getOperationById(id: $id) {
      id
      amount
      type
      concept
      category
    }
  }
`;
