import { gql } from "@apollo/client";

export const SIGN_CERT_GQL = gql`
  mutation signCert($input: CertIDInputDTO!) {
    sign(input: $input) {
      msg
    }
  }
`;
