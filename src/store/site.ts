import { loadable } from 'jotai/utils';
import { atom } from 'jotai';
import { GET_SITE_GQL } from '../graphql/gql/queries/sites-queries.gql';
import { Organization } from '../types/entities';
import { atomsWithQuery } from 'jotai-tanstack-query';
import { GET_ORGANIZATIONS_GQL } from '../graphql/gql/queries/organizations-queries.gql';
import { SiteT } from '../types/site-types';
import { graphQlInstance } from '@/services/gql';

export const siteIdAtom = atom<string>('');

export const [getSite] = atomsWithQuery((get) => ({
  queryKey: ['get-site', get(siteIdAtom)],
  queryFn: async ({ queryKey: [, siteId] }) => {
    if (!siteId) return {} as SiteT;

    const response = await graphQlInstance.client.query({
      query: GET_SITE_GQL,
      variables: {
        id: siteId,
        sorting: [],
        chargePointFilter: {},
        chargePointSorting: [{ field: 'id', direction: 'ASC' }],
        connectorFilter: {},
        connectorSorting: [{ field: 'connectorId', direction: 'ASC' }],
      },
    });

    return response?.data?.site as SiteT;
  },
}));

export const getSiteAtom = loadable(getSite);

export const [getSiteOrganization] = atomsWithQuery((get) => ({
  queryKey: ['get-site-organization', get(siteIdAtom)],
  queryFn: async ({ queryKey: [, siteId] }) => {
    if (!siteId) return [] as Organization[];

    const response = await graphQlInstance.client.query({
      query: GET_ORGANIZATIONS_GQL,
      variables: {
        id: siteId,
        chargePointFilter: {},
        chargePointSorting: [],
        connectorFilter: {},
        connectorSorting: [],
      },
    });

    return response?.data?.organizations as Organization[];
  },
}));

export const getSiteOrganizationAtom = loadable(getSiteOrganization);
