import { gql } from "@apollo/client";

export const CREATE_USER_GQL = gql`
  mutation createUser(
    $firstname: String!
    $lastname: String!
    $role: String!
    $wallet_eth: String!
    $is_active: Boolean!
  ) {
    createOneUser(
      input: {
        user: {
          firstname: $firstname
          lastname: $lastname
          role: $role
          wallet_eth: $wallet_eth
          is_active: $is_active
        }
      }
    ) {
      lastname
      firstname
      wallet_eth
      role
      is_active
    }
  }
`;

export const UPDATE_USER_GQL = gql`
  mutation updateUser($input: UpdateOneUserInput!) {
    updateOneUser(input: $input) {
      firstname
      lastname
      role
      wallet_eth
    }
  }
`;

export const DELETE_USER_GQL = gql`
  mutation deleteUser($id: ID!) {
    deleteOneUser(input: { id: $id }) {
      firstname
    }
  }
`;
