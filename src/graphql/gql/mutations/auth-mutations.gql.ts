import { gql } from "@apollo/client"

export const LOGIN_SEND_CODE_GQL = gql`
  mutation sendCodeLogin($input: SendCodeLoginInputDTO!){
    sendCodeLogin(input: $input){
      status
    }
  }
`;

export const LOGIN_AUTH_GQL = gql`
  mutation login($input: LoginInputDTO!){
    login(input: $input){
      accessToken
    }
  }
`;