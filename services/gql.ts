import { setContext } from '@apollo/client/link/context';
import { LOGIN_USER_GQL } from '../graphql/gql/mutations/auth-mutations.gql';
import { ResponseAuth } from '../types/entities';
import { 
	ApolloClient,
	FetchResult, 
	InMemoryCache, 
	NormalizedCacheObject, 
	createHttpLink,
} from '@apollo/client';

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
			uri: "http://35.236.79.246:3012/graphql",
		});

		const authLink = setContext((_, { headers }) => {
			const token = localStorage.getItem("Bearer");
			return {
				headers: {
					...headers,
					authorization: token ?? "",
				},
			};
		});
		

		const client = new ApolloClient({
			link: authLink.concat(httpLink),
			cache: new InMemoryCache()
		})

		GraphQLService.instance = new GraphQLService(client)
		return GraphQLService.instance
	}

	static updateInstance() {
		const httpLink = createHttpLink({
			uri: "http://35.236.79.246:3012/graphql",
		});

		const authLink = setContext((_, { headers }) => {
			const token = localStorage.getItem("Bearer");
			return {
				headers: {
					...headers,
					authorization: token ?? "",
				},
			};
		});
		

		const client = new ApolloClient({
			link: authLink.concat(httpLink),
			cache: new InMemoryCache()
		})

		GraphQLService.instance = new GraphQLService(client)
	}

	async authUser(email: string, code: string) {
		try {
			const { data: response }: FetchResult<ResponseAuth> = await this.client.mutate({
				mutation: LOGIN_USER_GQL,
				variables: {
					input: {
						username: email,
						password: code,
					},
				},
			});

			this.setAccessToken(response?.login?.accessToken)
			GraphQLService.updateInstance()
 		} catch (error: any) {
			throw new Error(error?.message)
		}
	}

	setAccessToken(token?: string) {
		if(!token) return

		console.log(token)
		localStorage.setItem("Bearer", `Bearer ${token}`)
	}
} 

export const graphQlInstance = GraphQLService.getInstance()
