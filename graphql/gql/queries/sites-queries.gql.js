import { gql } from "@apollo/client";

export const GET_SITES_GQL = gql`
  query getSites(
    $filter: SiteFilter!
    $sorting: [SiteSort!]
    $chargePointFilter: ChargePointFilter!
    $chargePointSorting: [ChargePointSort!]
    $connectorFilter: ConnectorFilter!
    $connectorSorting: [ConnectorSort!]!
  ) {
    sites(filter: $filter, sorting: $sorting) {
      id
      site
      site_area
      chargePoints(filter: $chargePointFilter, sorting: $chargePointSorting) {
        status
        instantPower
        connectors(filter: $connectorFilter, sorting: $connectorSorting) {
          id
          connectorTypeName
          price
          statusName
          power
        }
      }
    }
  }
`;

export const GET_CERTS_GQL = gql`
  query getCerts(
    $filter: CertFilter!
    $paging: OffsetPaging!
    $sorting: [CertSort!]
  ) {
    certs(paging: $paging, filter: $filter, sorting: $sorting) {
      nodes {
        id
        signatory1
        signatory2
        signatory3
        firstname
        middlename
        lastname
        dob_date
      }
    }
  }
`;

export const GET_CERT_GQL = gql`
  query getCert($ID: ID!) {
    cert(id: $ID) {
      id
      signatory1
      signatory2
      signatory3
      firstname
      middlename
      lastname
      dob_date
      dob_time
      sex
      single_twin
      ismultiple
      pb_name
      pb_street
      pb_city
      pb_country
      child_height
      child_weight
      child_blood
      p1_firstname
      p1_middlename
      p1_lastname
      p1_parent
      p1_pob
      p1_dob
      p2_firstname
      p2_middlename
      p2_lastname
      p2_parent
      p2_pob
      p2_dob
      ipfs_public_hash
      ipfs_private_hash
      ipfs_private_key
    }
  }
`;
