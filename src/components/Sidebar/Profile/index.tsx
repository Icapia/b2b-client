import Image from 'next/image'

import cn from 'classnames'
import { useAtom } from 'jotai'
import { sidebarAtom } from '../../../store/sidebar'
import styles from './index.module.scss'

export const Profile = () => {
	const [sidebar] = useAtom(sidebarAtom)

	const user = {
		id: 123,
		avatar: '',
		name: 'Admin',
		email: 'test@gmail.com',
	}

	return (
		<div className={cn(styles.wrapper)}>
			<div className={cn(styles.avatar)}>
				<Image width={40} height={40} src={`/image/user-avatar-m.png`} alt='' />
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
