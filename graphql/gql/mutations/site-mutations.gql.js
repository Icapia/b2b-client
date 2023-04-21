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

export const UPDATE_SITE_GQL = gql`
  mutation updateSite($input: UpdateOneSiteInput!) {
    updateOneSite(input: $input) {
      id
    }
  }
`;

// {
//   "input": {
//     "id": 21,
//     "update": {
//       "organizationId": 14,
//       "name": "new test name",
//       "zip_code": 12121212,
//       "address": "new address",
//       "phone_number": "+423423423",
//       "default_price": 0.44
//     }
//   }
// }
