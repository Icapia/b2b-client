import { gql } from "@apollo/client";

export const GET_ME_GQL = gql`
  query {
    me {
      id
      lastname
      firstname
      role
    }
  }
`;
