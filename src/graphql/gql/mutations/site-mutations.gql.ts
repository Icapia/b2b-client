import { gql } from "@apollo/client"

export const CREATE_AND_UPDATE_SITE_GQL = gql`
  mutation createOrUpdateSiteWithChargePoints($input: CustomSiteCreateInputDto!){
    createOrUpdateSiteWithChargePoints(input:$input)
    {
      siteId
    }
  }
`;


export const DELETE_SITE_GQL = gql`
  mutation updateManySites($input: UpdateManySitesInput!){
    updateManySites(input: $input){
      updatedCount
    }
  }
`;

export const DELETE_ONE_SITE_GQL = gql`
  mutation deleteOneSite($input: DeleteOneSiteInput!){
    deleteOneSite(input: $input){
      id
    }
  }
`;

