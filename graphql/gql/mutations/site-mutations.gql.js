import { gql } from "@apollo/client";

export const CREATE_SITE_GQL = gql`
  mutation createOneSite($input: CreateOneSiteInput!) {
    createOneSite(input: $input) {
      id
    }
  }
`;

// {
//   "input": {
//     "site": {
//       "name": "nnn",
//       "site": "dkjk",
//       "site_area": "lklkl",
//       "location": {
//            "type": "Point",
//            "coordinates": [0, 0]
//          },
//       "address": "asjdkljlkjkl",
//       "zip_code": 7348797,
//       "default_price": 0,
//       "information": "",
//       "dynamic_asset": "asd",
//       "asset_type": "",
//       "instant_power": 0,
//       "battery": "sfd"
//     }
//   }
// }

export const SIGN_CERT_GQL = gql`
  mutation signCert($input: CertIDInputDTO!) {
    sign(input: $input) {
      msg
    }
  }
`;
