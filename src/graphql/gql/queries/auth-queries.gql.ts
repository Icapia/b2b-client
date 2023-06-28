import { gql } from "@apollo/client";

export const GET_ME_GQL = gql`
  {
    me {
      id
      username
      email
      name
    }
  }
`;