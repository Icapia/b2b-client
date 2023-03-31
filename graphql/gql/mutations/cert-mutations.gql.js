import { gql } from "@apollo/client";

export const CREATE_CERT_GQL = gql`
  mutation createCert($input: CreateOneCertInput!) {
    createOneCert(input: $input) {
      firstname
      middlename
      lastname
      p1_dob
    }
  }
`;

export const SIGN_CERT_GQL = gql`
  mutation signCert($input: CertIDInputDTO!) {
    sign(input: $input) {
      msg
    }
  }
`;
