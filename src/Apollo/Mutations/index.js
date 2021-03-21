import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation authUser($input: AuthInput) {
    authUser(input: $input) {
      token
      name
      id
    }
  }
`;

export const CREATE_USER = gql`
  mutation newUser($input: UserInput) {
    newUser(input: $input) {
      name
      lastName
      email
      password
    }
  }
`;

export const CREATE_OPERATION = gql`
  mutation newOperation($input: OperationInput) {
    newOperation(input: $input) {
      id
      amount
      concept
      createdAt
      type
      category
      user
    }
  }
`;
export const DELETE_OPERATION = gql`
  mutation deleteOperation($id: ID!) {
    deleteOperation(id: $id)
  }
`;
export const UPDATE_OPERATION = gql`
  mutation updateOperation($id: ID!, $input: OperationUpdate) {
    updateOperation(id: $id, input: $input) {
      id
      concept
      amount
      type
    }
  }
`;
