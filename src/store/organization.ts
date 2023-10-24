import { GraphQLService } from "@/services/gql"
import { atom } from "jotai"
import { atomsWithQuery } from "jotai-tanstack-query"
import { loadable } from "jotai/utils"
import { GET_ORGANIZATIONS_GQL } from "../graphql/gql/queries/organizations-queries.gql"
import { Organization } from "../types/entities"

export const organizationCreateAtom = atom<boolean>(false)
export const organizationEditAtom = atom<boolean>(false)
export const updateOrganizationRequest = atom<boolean>(false)

export const [getOrganizations] = atomsWithQuery((get) => ({
  queryKey: [
    'get-organizations',
    get(updateOrganizationRequest)
  ],
  queryFn: async ({ queryKey: [, updateOrganizationRequest] }) => {
    const isUpdate = updateOrganizationRequest;
    const graphQl = GraphQLService.getInstance();

    const response = await graphQl?.client?.query({
      query: GET_ORGANIZATIONS_GQL,
      variables: {
        filter: {},
        sorting: [],
      },
    })

    return response.data.organizations as Organization[]
	},
  refetchInterval: 500,
}))

export const asyncGetOrganization = loadable(getOrganizations)