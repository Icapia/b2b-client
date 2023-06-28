import { gql } from "@apollo/client";

export const LOGIN_USER_GQL = gql`
  mutation login($input: LoginInputDTO!) {
    login(input: $input) {
      accessToken
    }
  }
`;