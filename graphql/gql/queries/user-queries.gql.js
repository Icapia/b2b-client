import { gql } from "@apollo/client";

export const GET_USERS_GQL = gql`
  query getUsers(
    $sorting: [UserSort!]
    $filter: UserFilter!
    $paging: OffsetPaging!
  ) {
    users(sorting: $sorting, paging: $paging, filter: $filter) {
      pageInfo {
        hasPreviousPage
        hasPreviousPage
      }
      nodes {
        id
        firstname
        lastname
        role
        is_active
        wallet_eth
      }
    }
  }
`;

export const GET_USER_GQL = gql`
  query getUser($id: ID!) {
    user(id: $id) {
      firstname
      lastname
      role
      wallet_eth
    }
  }
`;
