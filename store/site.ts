import { atom } from 'jotai';
import { GET_SITE_GQL } from '../graphql/gql/queries/sites-queries.gql'
import { graphQlInstance } from '../services/gql'
import { Organization, Site } from '../types/entities';
import { atomsWithQuery } from 'jotai-tanstack-query'
import { GET_ORGANIZATIONS_GQL } from '../graphql/gql/queries/organizations-queries.gql';
import { SiteT } from '../types/site-types';

export const siteIdAtom = atom<string>('');
export const siteAtom = atom<Site[] | null>(null)

export const [getSiteAtom] = atomsWithQuery((get) => ({
  queryKey: [
    'get-site',
    get(siteIdAtom)
  ],
  queryFn: async ({ queryKey: [, siteId] }) => {
    if(!siteId) return {} as Site

    const response = await graphQlInstance.client.query({
      query: GET_SITE_GQL,
      variables: {
        id: siteId,
        chargePointFilter: {},
        chargePointSorting: [],
        connectorFilter: {},
        connectorSorting: [],
      },
    })

    return response?.data?.site as Site
	},
}))

export const [getSiteOrganizationAtom] = atomsWithQuery((get) => ({
  queryKey: [
    'get-site-organization',
    get(siteIdAtom)
  ],
  queryFn: async ({ queryKey: [, siteId] }) => {
    if(!siteId) return [] as Organization[]

    const response = await graphQlInstance.client.query({
      query: GET_ORGANIZATIONS_GQL,
      variables: {
        id: siteId,
        chargePointFilter: {},
        chargePointSorting: [],
        connectorFilter: {},
        connectorSorting: [],
      },
    })

    return response?.data?.organizations as Organization[]
	},
}))


export const editSiteAtom = atom<SiteT>({
  id: '',
  name: '',
  address: '',
  phone_number: '',
  zip_code: '',
  default_price: 0,
  chargepoints: []
})