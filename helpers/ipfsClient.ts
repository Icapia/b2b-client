import { create, IPFSHTTPClient } from 'ipfs-http-client'

export const INFURA_KEY = process.env.REACT_APP_INFURA_PROJECT_ID
export const INFURA_PROJECT_SECRET = process.env.REACT_APP_INFURA_SECRET
export const ENDPOINT = process.env.REACT_APP_INFURA_ENDPOINT
export const authorization =	`Basic ${btoa(`${INFURA_KEY}:${INFURA_PROJECT_SECRET}`)}`

export function IPFSClient() {
	let ipfs: IPFSHTTPClient

	try {
		ipfs = create({
			url: ENDPOINT,
			headers: {
				authorization,
			},
		})

		return ipfs as IPFSHTTPClient
	} catch (error) {
		throw new Error(`IPFS Error ${error}`)
	}
}
