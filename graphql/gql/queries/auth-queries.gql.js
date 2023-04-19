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

//HEADER
// {
//   "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
// }
