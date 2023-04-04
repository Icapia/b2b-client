import { gql } from "@apollo/client";

export const CREATE_CHARGE_POINT_GQL = gql`
  mutation createChargePoint($input: CreateOneChargePointInput!) {
    createOneChargePoint(input: $input) {
      id
    }
  }
`;

// {
//   "input": {
//     "chargePoint": {
//       "siteId": 2
//     }
//   }
// }

export const UPDATE_CHARGE_POINT_GQL = gql`
  mutation updateChargePoint($input: UpdateOneChargePointInput!) {
    updateOneChargePoint(input: $input) {
      id
    }
  }
`;

// {
//   "input": {
//     "id": 30,
//     "update": {
//       "chargePointHardwareId": "NEWCHARGEPOINTID1"
//     }
//   }
// }

export const DELETE_CHARGE_POINT_GQL = gql`
  mutation deleteChargePoint($input: DeleteOneChargePointInput!) {
    deleteOneChargePoint(input: $input) {
      id
    }
  }
`;

// {
//   "input": {
//     "id": 30
//   }
// }
