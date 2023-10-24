import Image from 'next/image'

import { isSSR } from '@/store/dark-theme'
import { IUser, userAtom } from '@/store/user'
import cn from 'classnames'
import { useAtom } from 'jotai'
import jwt_decode from "jwt-decode"
import { useEffect } from 'react'
import { sidebarAtom } from '../../../store/sidebar'
import styles from './index.module.scss'

export const Profile = () => {
	const [sidebar] = useAtom(sidebarAtom)
	const [user, setUser] = useAtom(userAtom);
	const bearerToken = isSSR ? null : localStorage.getItem("Bearer");

	useEffect(() => {
    if(bearerToken) {
			const _user: IUser = jwt_decode(bearerToken)
			setUser(_user);
		}
	}, [bearerToken])

	return (
		<div className={cn(styles.wrapper)}>
			<div className={cn(styles.avatar)}>
				<Image width={40} height={40} src={`/b2b/image/user-avatar.png`} alt='' />
			</div>
			{!sidebar && (
				<div className={cn(styles.profile)}>
					<span className={cn(styles.name)}>{user?.name}</span>
					<span>{user?.email}</span>
				</div>
			)}
		</div>
	)
}
