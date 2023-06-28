import { gql } from "@apollo/client";

export const CREATE_AND_UPDATE_SITE_GQL = gql`
  mutation createOrUpdateSiteWithChargePoints($input: CustomSiteCreateInputDto!){
    createOrUpdateSiteWithChargePoints(input:$input)
    {
      siteId
    }
  }
`;
