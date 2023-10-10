import { graphQlInstance } from '@/services/gql'
import { loginFormAtom } from '@/store/login'
import { useAtom } from 'jotai'
import { useRouter } from 'next/router'
import { FC, PropsWithChildren, useEffect } from 'react'

export const RouterGuard: FC<PropsWithChildren> = ({ children }) => {
	const router = useRouter();
	const [loginForm, setLoginForm] = useAtom(loginFormAtom)
	const bearerToken = graphQlInstance.getBearer();

	useEffect(() => {
		authCheck(router.asPath)
	}, [])

	const authCheck = (url: string) => {
		const publicPaths = ['/login']
		const path = url.split('?')[0];

		if(!bearerToken && !publicPaths.includes(path)) {
			setLoginForm({...loginForm, accessToken: null})
			router.push({
				pathname: '/login',
			})
		} else {
			setLoginForm({...loginForm, accessToken: bearerToken})
		}
	}

	return children
}