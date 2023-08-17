import { LOGIN_USER_GQL } from '@/graphql/gql/mutations/auth-mutations.gql'
import { isSSR } from '@/store/dark-theme'
import { ResponseAuth } from '@/types/entities'
import {
	ApolloClient,
	FetchResult,
	InMemoryCache,
	NormalizedCacheObject,
	createHttpLink,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

class GraphQLService {
	private static instance: GraphQLService

	public client: ApolloClient<NormalizedCacheObject>

	constructor(client: ApolloClient<NormalizedCacheObject>) {
		this.client = client
	}

	static getInstance(): GraphQLService {
		if (GraphQLService.instance) {
			return GraphQLService.instance
		}

    const httpLink = createHttpLink({
      uri: 'http://34.94.253.188:3012/graphql',
    });

		const authLink = setContext((_, { headers }) => {
			const token = isSSR ? null : localStorage.getItem('Bearer')

			return {
				headers: {
					...headers,
					authorization: token ? `Bearer ${token}` : '',
					'Access-Control-Allow-Origin': '*',
				},
			}
		})

		const client = new ApolloClient({
			link: authLink.concat(httpLink),
			cache: new InMemoryCache(),
		})

		GraphQLService.instance = new GraphQLService(client)
		return GraphQLService.instance
	}

  static updateInstance() {
    const httpLink = createHttpLink({
      uri: 'http://34.94.174.181:3012/graphql',
    });

		const authLink = setContext((_, { headers }) => {
			const token = isSSR ? null : localStorage.getItem('Bearer')

			return {
				headers: {
					...headers,
					authorization: token ? `Bearer ${token}` : '',
					'Access-Control-Allow-Origin': '*',
				},
			}
		})

		const client = new ApolloClient({
			link: authLink.concat(httpLink),
			cache: new InMemoryCache(),
		})

		GraphQLService.instance = new GraphQLService(client)
		return GraphQLService.instance
	}

	async authUser(email: string, code: string) {
		try {
			const { data: response }: FetchResult<ResponseAuth> =
				await this.client.mutate({
					mutation: LOGIN_USER_GQL,
					variables: {
						input: {
							username: email,
							password: code,
						},
					},
				})

			this.setAccessToken(response?.login?.accessToken)
			GraphQLService.updateInstance()
		} catch (error: any) {
			throw new Error(error?.message)
		}
	}

	getBearer() {
		const token = isSSR ? null : localStorage.getItem('Bearer')

		if (token) {
			return token
		}

		return null
	}

	setAccessToken(token?: string) {
		if (!token) return
		localStorage.setItem('Bearer', token)
	}

	removeAccessToken() {
		localStorage.removeItem('Bearer')
	}
}

export const graphQlInstance = GraphQLService.getInstance()

console.log(graphQlInstance)
