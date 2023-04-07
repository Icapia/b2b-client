import { gql } from "@apollo/client";

export const CREATE_ORGANIZATION_GQL = gql`
  mutation createOrganization($input: CreateOneOrganizationInput!) {
    createOneOrganization(input: $input) {
      id
    }
  }
`;

// VARIABLES:
// {
//   "input": {
//     "organization": {
//       "name": "neon",
//       "email": "info@neon.com",
//       "phone_number": "+356715567275",
//       "location": {
//           "type": "Point",
//           "coordinates": [
//             37.508736596,
//             -121.316309185
//           ]
//         },
//       "address": "California fl. 234909",
//       "zip_code": 3546373
//     }
//   }
// }

export const UPDATE_ORGANIZATION_GQL = gql`
  mutation updateOrganization($input: UpdateOneOrganizationInput!) {
    updateOneOrganization(input: $input) {
      id
    }
  }
`;

// VARIABLES:
// {
//   "input": {
//     "id": 1,
//     "update": {
//        "name": "fenix1",
//       "email": "info@fenix2.com",
//       "phone_number": "+356715567444",
//       "location": {
//           "type": "Point",
//           "coordinates": [0,0]
//         },
//       "address": "California fl. 454909",
//       "zip_code": 3546555
//     }
//   }
// }
