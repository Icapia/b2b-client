import { atom } from 'jotai';
import { GET_SITES_GQL } from '../graphql/gql/queries/sites-queries.gql'
import { atomsWithQuery } from 'jotai-tanstack-query'
import { graphQlInstance } from '@/services/gql';
import { loadable } from 'jotai/utils';
import { SiteT } from '@/types/site-types';

export const siteIdAtom = atom<string>('');

export const [getSitesAtom] = atomsWithQuery((get) => ({
  queryKey: [
    'get-sites',
  ],
  queryFn: async ({ queryKey: [, ] }) => {
    const response = await graphQlInstance.client.query({
      query: GET_SITES_GQL,
      variables: {
        filter: {},
        sorting: [
          { field: "id", direction: "ASC" }
        ],
        chargePointFilter: {},
        chargePointSorting: [
          { field: 'id', direction: 'ASC' }
        ],
        connectorFilter: {},
        connectorSorting: [
          { field: 'connectorId', direction: 'ASC' }
        ],
      },
    })

    return response.data.sites as SiteT[]
	},
}))

export const getSitesAsyncAtom = loadable(getSitesAtom)
  